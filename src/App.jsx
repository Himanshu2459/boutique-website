import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const canvasRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };
    updateCanvasSize();

    const frameCount = 240;
    const currentFrame = index => (
      `./frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
    );

    const images = [];
    const seq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if (images[Math.round(seq.frame)] && images[Math.round(seq.frame)].complete) {
        const img = images[Math.round(seq.frame)];

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.fillStyle = "#000000";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    images[0].onload = render;

    gsap.to(seq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-content",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
      onUpdate: render
    });

    textRefs.current.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    const handleResize = () => {
      updateCanvasSize();
      render();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <>
      <nav className="minimal-nav">
        <div className="minimal-logo">The Boutique Co.</div>
        <div className="nav-actions">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </nav>

      <div className="canvas-container">
        <canvas ref={canvasRef}></canvas>
        <div className="canvas-overlay"></div>
      </div>

      <div className="scroll-content">
        <div className="section" style={{height: '100vh'}}>
          <div ref={addToRefs}>
            <p className="sub-text">Affordable Luxury</p>
            <h1 className="text-reveal">THE BOUTIQUE CO.</h1>
            <p className="detail-text">Elevating ethnic wear with handcrafted precision. Discover our curated collections designed for the modern woman who values tradition and elegance.</p>
          </div>
        </div>

        <div className="section" style={{height: '150vh'}}>
          <div ref={addToRefs}>
            <p className="sub-text">Premium Ethnic Wear</p>
            <h1 className="text-reveal">CRAFTED.</h1>
            <p className="detail-text">Explore our exclusive range of Punjabi suits, Crush Tissue, and Hakoba Chikankari co-ord sets. Every thread woven with unparalleled boutique luxury.</p>
          </div>
        </div>

        <div className="section" style={{height: '150vh'}}>
          <div ref={addToRefs}>
            <p className="sub-text">Worldwide Shipping</p>
            <h1 className="text-reveal">GLOBAL.</h1>
            <p className="detail-text">Bringing the finest boutique fashion from our home directly to yours. We ensure luxury arrives seamlessly, no matter where you are in the world.</p>
          </div>
        </div>
      </div>

      <section className="footer-section">
        <div ref={addToRefs} style={{textAlign: 'center'}}>
          <p className="sub-text">Ready to Order?</p>
          <h2 className="text-reveal" style={{fontSize: '5rem'}}>ELEVATE YOUR STYLE</h2>
          <a href="https://wa.me/" className="footer-btn">
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default App;