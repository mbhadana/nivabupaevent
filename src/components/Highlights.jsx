import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Highlights.css';

const renderParticipants = (participants) => (
  <div style={{ 
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: '12px',
    columnGap: '20px', 
    marginTop: '40px',
    fontSize: '0.55em'
  }}>
    {participants.map((p, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
        <span style={{ color: '#fff', fontWeight: '500', lineHeight: '1.2' }}>{p.name}</span>
        <span style={{ fontSize: '0.7em', color: 'rgba(255,255,255,0.5)', lineHeight: '1.2', marginLeft: '6px' }}>{p.firm}</span>
      </div>
    ))}
  </div>
);

const highlightData = [
  {
    category: 'FIRESIDE CHAT',
    title: (
      <>
        Amitabh Chaudhry
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>MD & CEO Axis Bank</div>
        <div style={{ marginTop: '40px' }}><span style={{ fontSize: '0.65em', fontWeight: '400', color: '#fff' }}>with</span> Krishnan Ramachandran</div>
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>CEO & MD, Niva Bupa Health Insurance</div>
      </>
    ),
    image: '/IMG_5929.JPG'
  },
  {
    category: 'DISCUSSION 1',
    title: (
      <>
        The Missing Link in Loan Protection Strategies:
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Insurance is not just protection—it's a risk mitigation with revenue lever.</div>
        {renderParticipants([
          { name: 'Nikhil Varma', firm: 'IDFC' },
          { name: 'Randeep Gandhok', firm: 'SCB' },
          { name: 'Ashish Sagar', firm: 'HDFC Bank' },
          { name: 'Sambhat Kumar', firm: 'HSL' },
          { name: 'Virendra Somwanshi', firm: 'Federal Bank' },
          { name: 'Subhajit Roy', firm: 'Bandhan Bank' },
          { name: 'Neeta Bhatt', firm: 'Axis Bank' }
        ])}
      </>
    ),
    image: '/IMG_5970.JPG'
  },
  {
    category: 'DISCUSSION 2',
    title: (
      <>
        AI-Driven Transformation in Insurance:
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>How AI might redefine the very operating model of insurance companies.</div>
        {renderParticipants([
          { name: 'Manas Gupta', firm: 'Phone Pe' },
          { name: 'Sarbvir Singh', firm: 'PB Fintech' },
          { name: 'Surendra Katariya', firm: 'BFL' },
          { name: 'Nitish Kumar', firm: 'Poonawalla Fincorp' },
          { name: 'Vipul Agarwal', firm: 'Axis Bank' },
          { name: 'Dhirendra Mahyavanshi', firm: 'Turtlemint' }
        ])}
      </>
    ),
    image: '/IMG_6052.JPG'
  },
  {
    category: 'FIRESIDE CHAT',
    title: (
      <>
        Ankur Kharbanda
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Executive Director & CBO - Niva Bupa</div>
        <div style={{ marginTop: '40px' }}><span style={{ fontSize: '0.65em', fontWeight: '400', color: '#fff' }}>in conversation with</span> Yashish Dahiya</div>
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Chairman PB Fintech</div>
      </>
    ),
    image: '/IMG_6108.JPG'
  },
  {
    category: 'DISCUSSION 3',
    title: (
      <>
        Bridging the Trust Deficit in Insurance:
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>How insurers can rebuild trust</div>
        {renderParticipants([
          { name: 'Sajja Chowdhary', firm: 'PB Fintech' },
          { name: 'Jasmine Kaur', firm: 'Mahindra Finance' },
          { name: 'Mahesh Dayani', firm: 'SBFC Finance' },
          { name: 'Arjun Chowdhry', firm: 'Grihum Housing' },
          { name: 'Roopa Natrajan', firm: 'HDFC Bank' },
          { name: 'Saurabh Jain', firm: 'SCB' },
          { name: 'Shirish Patel', firm: 'Gennext' }
        ])}
      </>
    ),
    image: '/IMG_6248.JPG'
  },
  {
    category: 'DISCUSSION 4',
    title: (
      <>
        Winning the Last Mile
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Reimagining Insurance Distribution in a Platform Economy</div>
        {renderParticipants([
          { name: 'Rohit Chugh', firm: 'Capri Global' },
          { name: 'K Suresh Kumar', firm: 'Fedfina' },
          { name: 'Kranti Sharma', firm: 'L&T Finance' },
          { name: 'Gursharan Rai Bansal', firm: 'IPPB' },
          { name: 'Saumya Chaudhuri', firm: 'IDBI Bank' }
        ])}
      </>
    ),
    image: '/IMG_5929.JPG'
  },
  {
    category: 'FIRESIDE CHAT',
    title: (
      <>
        Ankur Kharbanda
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Executive Director & CBO - Niva Bupa</div>
        <div style={{ marginTop: '40px' }}><span style={{ fontSize: '0.65em', fontWeight: '400', color: '#fff' }}>in conversation with</span> Gauranga Das Ji</div>
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Monk & Spiritual Leader, ISKCON</div>
      </>
    ),
    image: '/IMG_5970.JPG'
  },
  {
    category: 'DISCUSSION 5',
    title: (
      <>
        Affordability vs Value in Insurance
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>How insurers can innovate through new product designs, preventive healthcare initiatives, and technology-driven cost efficiencies.</div>
        {renderParticipants([
          { name: 'Amit Chhabra', firm: 'PB Fintech' },
          { name: 'Neeraj Purohit', firm: 'Paytm' },
          { name: 'Ashish Goyal', firm: 'Early Salary' },
          { name: 'Raul Rebello', firm: 'Mahindra Finance' },
          { name: 'Dhiraj Reli', firm: 'HSL' },
          { name: 'Balachander Shekhar', firm: 'Renew Buy' }
        ])}
      </>
    ),
    image: '/IMG_6052.JPG'
  },
  {
    category: 'LAUGHTER THERAPY',
    title: (
      <>
        Gaurav Gupta
        <div style={{ fontSize: '0.65em', marginTop: '24px', fontWeight: '400', color: '#fff', lineHeight: '1.4' }}>Stand Up Comedian</div>
      </>
    ),
    image: '/Gaurav-Gupta-2026-WEB.jpeg'
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
            
            <h2 className="section-title text-gradient" style={{ marginBottom: '40px' }}>Highlights</h2>
            
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
          <h2 className="section-title text-gradient" style={{ marginBottom: '30px' }}>Highlights</h2>
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


