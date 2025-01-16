import React, { useState } from 'react';
import styles from '../Contact/Contact.module.css';

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const images = [
    '/poert1.png',
    '/port2.png',
    '/port3.png',
    '/poert1.png',
    '/port2.png',
    '/port3.png',
  ];

  return (
    <div className="container text-center text-dark p-4">
      <h2 className={`${styles.conTitle} fs-1 pt-5`}>PORTFOLIO COMPONENT</h2>
      <div className={`${styles['star-icon-co']} p-4`}>
        <i className="fa-solid fa-star" />
      </div>
      <div className="row">
        {images.map((src, index) => (
          <div className="col-md-4" key={index}>
            <figure className={`${styles['portfolio-image-container']}`}>
              <img 
                src={src}
                alt={`example ${index + 1}`}
                className="img-fluid"
                onClick={() => openLightbox(src)}
                style={{ cursor: 'pointer' }}
              />
              <div className={styles['image-cover']}>
                <i className="fa-solid fa-plus fs-1 text-white" />
              </div>
            </figure>
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div id="lightBox" className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Selected" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}
