import { motion } from 'framer-motion';
import './WhitePaper.css';
import hpsBanner from '../assets/hps-banner.jpeg';

const WhitePaper = () => {
  return (
    <section className="whitepaper-section" id="whitepaper">
      <div className="whitepaper-expanded-container">
        <div className="whitepaper-grid">
          <motion.div 
            className="whitepaper-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="section-title" style={{ color: '#00adee', marginBottom: '24px' }}>India's Health Protection Score 2026</h2>
            <p className="whitepaper-subtitle" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '16px' }}>
              India’s Health Protection Score is a nationwide study of 2,400+ respondents, revealing a gap between perceived and actual health preparedness among young Indians. While 65% of uninsured youth report no ailments, many rely on self-belief over medical validation. The Health Protection Score (HPS), a first-of-its-kind composite metric built on financial adequacy, preventive care, family history, and lifestyle, measures real readiness against medical uncertainty. It reveals that nearly 3 in 4 young Indians remain financially or medically exposed.
            </p>
            <p className="whitepaper-subtitle" style={{ fontSize: '1.05rem', color: '#fff', lineHeight: '1.7', marginBottom: '32px' }}>
              This white paper brings these insights to the forefront of the national conversation, explore the report to dive deeper.
            </p>
            <a href="#" className="btn-unified hps-download-btn">
              Download
            </a>
          </motion.div>
          
          <motion.div 
            className="whitepaper-image-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="whitepaper-image-box">
              <img src={hpsBanner} alt="Health Protection Report Graphics" className="hps-banner-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
