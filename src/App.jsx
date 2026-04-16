import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import KeynotesPage from './pages/KeynotesPage';
import SpeakersPage from './pages/SpeakersPage';
import PhotosPage from './pages/PhotosPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keynotes" element={<KeynotesPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
