import Gallery from '../components/Gallery';

const GalleryPage = () => {
  return (
    <div className="gallery-page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
