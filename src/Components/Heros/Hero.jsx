import React from 'react';
import HeroStar from '../Images/mingcute_ai-fill.png'
import '../Heros/Hero.css'

function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-overlay">
      <div className="hero-content">
  <div className="hero-content-1">
    <p className="hero-content-health">Your Health,</p>
  </div>
  <div className="hero-content-2">
    <p className="hero-content-anytime">Anytime, <span>Anywhere</span></p>
  </div>
</div>
<div className="hero-content-3">
  <p className="hero-content-text">
    Expert healthcare at your fingertips — <br /> from diagnosis to follow-up care, 
    all from the comfort of home.
  </p>
</div>  

<div className="hero-footer-container">
      {/* Medical Practitioners Section */}
      <div className="hero-footer-left">
        <h3>200+</h3>
        <p>
          Medical practitioners <br /> all over the globe
        </p>
      </div>

      {/* Green Circular Icon */}
      <div className="hero-footer-right">
        <div className="green-icon">
          <img className="plus-icon" src={HeroStar} alt="" />
        </div>
      </div>
    </div>
      </div>
    </section>

    <section className="hero-middle-con">
  <div className="stats-container">
    <div className="stat-item">
      <h2 className="stat-value">95%</h2>
      <p className="stat-description">Positive Review</p>
    </div>
    <div className="stat-divider"></div>
    <div className="stat-item">
      <h2 className="stat-value">50+</h2>
      <p className="stat-description">Registered Doctors</p>
    </div>
    <div className="stat-divider"></div>
    <div className="stat-item">
      <h2 className="stat-value">200+</h2>
      <p className="stat-description">Registered Clients</p>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero