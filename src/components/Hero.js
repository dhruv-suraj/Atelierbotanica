import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 70;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Where Elegance Grows, We Maintain It</h1>
        <p>Transform your outdoor space with professional landscaping services</p>
        <button className="cta-button" onClick={scrollToContact}>
          Book a free Estimate!
        </button>
      </div>
    </section>
  );
};

export default Hero;