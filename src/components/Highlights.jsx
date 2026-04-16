import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Highlights.css';

const highlightData = [
  {
    category: 'IN CONVERSATION',
    title: 'Amitabh Chaudhry, MD & CEO Axis Bank with Krishnan Ramachandran, CEO & MD, Niva Bupa Health Insurance',
    image: '/IMG_5929.JPG'
  },
  {
    category: 'PANEL DISCUSSION 1',
    title: "The Missing Link in Loan Protection Strategies: Insurance is not just protection—it's a risk mitigation with revenue lever.",
    image: '/IMG_5970.JPG'
  },
  {
    category: 'PANEL DISCUSSION 2',
    title: 'AI-Driven Transformation in Insurance: How AI might redefine the very operating model of insurance companies.',
    image: '/IMG_6052.JPG'
  },
  {
    category: 'KEYNOTE ADDRESS',
    title: 'Yashish Dahiya, Co-Founder & Group CEO, PolicyBazaar',
    image: '/IMG_6108.JPG'
  },
  {
    category: 'PANEL DISCUSSION 3',
    title: 'Bridging the Trust Deficit in Insurance: How insurers can rebuild trust',
    image: '/IMG_6248.JPG'
  },
  {
    category: 'PANEL DISCUSSION 4',
    title: 'Winning the Last Mile: Reimagining Insurance Distribution in a Platform Economy',
    image: '/IMG_5929.JPG'
  },
  {
    category: 'KEYNOTE SPEAKER',
    title: "Gauranga Das, Member of ISKCON's Governing Body Commission",
    image: '/IMG_5970.JPG'
  },
  {
    category: 'PANEL DISCUSSION 5',
    title: 'Affordability vs Value in Insurance: How insurers can innovate through new product designs, preventive healthcare initiatives, and technology-driven cost efficiencies.',
    image: '/IMG_6052.JPG'
  }
];

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRefs = useRef([]);

  useEffect(() => {
    observerRefs.current = observerRefs.current.slice(0, highlightData.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0
      }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="highlights" id="highlights" style={{ position: 'relative', height: `${highlightData.length * 100}vh` }}>
      
      {/* Desktop: Scroll-driven sticky layout */}
      <div className="highlights-desktop">
        {/* Scroll Ghost Tracks */}
        <div className="highlights-scroll-track" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {highlightData.map((_, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (observerRefs.current[index] = el)}
              style={{ height: '100vh', width: '100%' }}
            />
          ))}
        </div>

        <div className="highlights-sticky-container">
          <div className="section-container" style={{ width: '100%' }}>
            
            <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '40px' }}>Speaker Highlights</h2>
            
            <div className="highlights-master-card">
              <div className="highlights-grid-container">
                
                {/* Left Column: Text */}
                <div className="highlights-col-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="highlights-text-display"
                    >
                      <span className="highlights-category">{highlightData[activeIndex].category}</span>
                      <h3 className="highlights-title">{highlightData[activeIndex].title}</h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="highlights-col-right">
                  <div className="highlights-image-container" style={{ position: 'relative' }}>
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={activeIndex}
                        src={highlightData[activeIndex].image}
                        alt="Speaker Highlight"
                        className="highlights-image"
                        initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{ position: 'absolute', top: 0, left: 0 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile: Simple stacked list of all highlights */}
      <div className="highlights-mobile">
        <div className="section-container">
          <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '30px' }}>Speaker Highlights</h2>
          {highlightData.map((item, idx) => (
            <div key={idx} className="highlights-mobile-card">
              <span className="highlights-category">{item.category}</span>
              <h3 className="highlights-title">{item.title}</h3>
              <div className="highlights-image-container">
                <img src={item.image} alt={item.title} className="highlights-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
