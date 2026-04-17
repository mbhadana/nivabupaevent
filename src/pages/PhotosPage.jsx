import { useState, useRef } from 'react';
import './PhotosPage.css';

// Re-purposing the dummy images as the mock results payload
const showcaseImages = [
  '/IMG_5929.JPG',
  '/IMG_5970.JPG',
  '/IMG_6052.JPG',
  '/IMG_6108.JPG',
  '/IMG_6248.JPG'
];

const PhotosPage = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef(null);

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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleReveal = () => {
    setShowResults(true);
  };

  return (
    <div className="photos-page">

      <section className="photos-hero" style={{ justifyContent: 'center', paddingBottom: '0' }}>
        <div className="photos-hero-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="photos-title">Find Your Event Photos</h1>
          <div className="photos-accent-line" style={{ margin: '30px auto' }}></div>
        </div>
      </section>

      {/* State 1: Awaiting Upload */}
      {!uploadedFile && !showResults && (
        <section className="photos-dropzone-section" style={{ paddingTop: '40px' }}>
          <div
            className={`photos-dropzone ${isDragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
            style={{ margin: '0 auto' }}
          >
            <div className="dropzone-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <h3 className="dropzone-title">Drop your photo here</h3>
            <p className="dropzone-hint">or click to browse</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </section>
      )}

      {/* State 2: File Selected, Requesting Trigger */}
      {uploadedFile && !showResults && (
        <section className="photos-action-section" style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <button className="btn-unified" onClick={handleReveal} style={{ fontSize: '1.2rem', padding: '16px 40px' }}>
            See your photos
          </button>
        </section>
      )}

      {/* State 3: Mock Results Gallery */}
      {showResults && (
        <section className="photos-results-section" style={{ padding: '40px var(--padding-std)', maxWidth: '1300px', margin: '0 auto' }}>
          <div className="photos-results-grid">
            {showcaseImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Your event photo match ${idx + 1}`}
                className="result-img"
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default PhotosPage;
