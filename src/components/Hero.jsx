import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import betterTogetherLogo from '../assets/better-together-logo.svg';
import img1 from '../assets/IMG_6087.JPG';
import img2 from '../assets/IMG_6478.JPG';
import img3 from '../assets/IMG_6541.JPG';

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-content-inner">
            <motion.div 
              className="hero-logo-wrapper"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src={betterTogetherLogo} alt="Better Together Logo" className="hero-logo-img" />
            </motion.div>
            
            <h1 className="hero-title">
              A decade of momentum.<br/>
              A decade of transformation.
            </h1>

            <div className="hero-buttons-grid">
              <motion.a href="#agenda" className="hero-wireframe-btn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>Agenda</motion.a>
              <motion.a href="#speakers" className="hero-wireframe-btn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }}>Speakers</motion.a>
              <motion.a href="#highlights" className="hero-wireframe-btn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>Highlights</motion.a>
              <motion.a href="#whitepaper" className="hero-wireframe-btn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.6 }}>HPS Report of 2026</motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="antigravity-card hero-image-card">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                className="hero-slide-img"
                initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                alt={`Event highlight ${currentIndex + 1}`}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
