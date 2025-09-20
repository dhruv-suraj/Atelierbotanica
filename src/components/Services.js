import React, { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef(null);

  const services = [
    {
      icon: 'fas fa-seedling',
      title: 'Lawn Care & Maintenance',
      description: 'Professional lawn care services to keep your grass healthy and beautiful year-round.'
    },
    {
      icon: 'fas fa-pencil-ruler',
      title: 'Landscaping Design',
      description: 'Custom landscape design solutions tailored to your style and property needs.'
    },
    {
      icon: 'fas fa-hammer',
      title: 'Landscape Construction',
      description: 'Expert construction services to bring your landscape design to reality.'
    },
    {
      icon: 'fas fa-snowflake',
      title: 'Commercial Snow Removal',
      description: 'Reliable commercial snow removal services to keep your business accessible.'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;