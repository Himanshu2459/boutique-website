import React from 'react';
import './Reels.css';

const Reels = () => {
  const reels = [1, 2, 3, 4, 5];

  return (
    <section className="reels-section">
      <div className="text-center fade-in">
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Seen on Instagram</h2>
        <p style={{color: 'var(--text-secondary)'}}>
          Get inspired by our community. Follow us @Shreesingar
        </p>
      </div>

      <div className="reels-container">
        {reels.map((item) => (
          <div key={item} className="reel-card fade-in">
            <img src={`/product_suit_1.png`} alt="Reel placeholder" className="reel-video-placeholder" />
            <div className="reel-overlay">
              <p>🌸 New Collection Drop! #ethnicwear</p>
              <div className="reel-stats">
                <span><i className="fas fa-heart"></i> 1.2K</span>
                <span><i className="fas fa-comment"></i> 45</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
