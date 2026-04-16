import { useState, useEffect, useRef } from 'react';
import './PhotosPage.css';

const carouselImages = [
  '/IMG_5929.JPG',
  '/IMG_5970.JPG',
  '/IMG_6052.JPG',
  '/IMG_6108.JPG',
  '/IMG_6248.JPG'
];

const PhotosPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    // File handling logic would go here
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="photos-page">

      {/* Hero Section */}
      <section className="photos-hero">
        <div className="photos-hero-text">
          <h1 className="photos-title">Find Your Event Photos</h1>
          <p className="photos-desc">Upload your photograph to discover event photos in which you appear.</p>
          <p className="photos-subdesc">Our photo-matching experience is designed to help you quickly find your moments from the event.</p>
          <div className="photos-accent-line"></div>
        </div>

        <div className="photos-hero-visual">
          <div className="photos-carousel">
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Event photo ${idx + 1}`}
                className={`carousel-img ${idx === activeSlide ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="carousel-dots">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Drop Zone */}
      <section className="photos-dropzone-section">
        <div
          className={`photos-dropzone ${isDragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="dropzone-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <h3 className="dropzone-title">Drop your photo here</h3>
          <p className="dropzone-hint">or click to browse • JPG, PNG, WebP up to 10MB</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            style={{ display: 'none' }}
          />
        </div>
      </section>

    </div>
  );
};

export default PhotosPage;
