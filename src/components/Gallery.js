import React, { useEffect, useRef } from 'react';

const Gallery = () => {
  const galleryRef = useRef(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 3'
    },
    {
      src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 4'
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 5'
    },
    {
      src: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=400&h=300&fit=crop',
      alt: 'Landscaping Project 6'
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

    const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
    galleryItems?.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="gallery" ref={galleryRef}>
      <div className="container">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;