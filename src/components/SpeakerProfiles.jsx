import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import './SpeakerProfiles.css';

const speakers = [
  {
    name: 'Amitabh Chaudhry',
    title: 'MANAGING DIRECTOR & CHIEF EXECUTIVE OFFICER AT AXIS BANK LTD.',
    bio: 'Amitabh leads Axis Bank as its MD & CEO, overseeing its strategic growth and digital transformation. With a distinguished career at HDFC Standard Life and Infosys, he is an alumnus of BITS Pilani and IIM Ahmedabad.',
    image: '/Amitabh Chaudhry.jpeg'
  },
  {
    name: 'Yashish Dahiya',
    title: 'CHAIRMAN PB FINTECH',
    bio: 'Yashish is the visionary co-founder of PolicyBazaar and Paisabazaar, revolutionizing the digital insurance and credit landscape in India. An avid sportsman and seven-time Ironman finisher, he holds degrees from IIT Delhi, IIM Ahmedabad, and INSEAD.',
    image: '/Yashish Dahiya.jpeg'
  },
  {
    name: 'Gauranga Das',
    title: 'MEMBER OF ISKCON’S GOVERNING BODY COMMISSION',
    bio: 'An IIT Bombay graduate and mindfulness expert, Gauranga Das is a social welfare catalyst and author of three National bestsellers. He leads global leadership initiatives and sustainability efforts through the Govardhan Ecovillage.',
    image: '/Gauranga Das.jpeg'
  }
];

const SpeakerProfiles = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="speaker-profiles" id="speakers">
      <div className="section-container">
        <h2 className="section-title text-gradient speaker-section-title">Speakers</h2>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={index}
                className={`speaker-card ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onClick={() => toggleCard(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="speaker-card-inner">
                  <div className="speaker-image-wrapper">
                    <img src={speaker.image} alt={speaker.name} className="speaker-card-img" />
                    
                    {/* Plus Icon Trigger */}
                    <div className={`speaker-plus-icon ${isActive ? 'rotate' : ''}`}>
                      <Plus size={24} />
                    </div>

                    {/* Slide-up Biography Overlay */}
                    <div className={`speaker-bio-overlay ${isActive ? 'visible' : ''}`}>
                      <div className="bio-overlay-content">
                        <div className="bio-divider"></div>
                        <div className="bio-scroll-area">
                          <p className="bio-text">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Below */}
                  <div className="speaker-info-below">
                    <h3 className="speaker-card-name-below">{speaker.name}</h3>
                    <p className="speaker-card-title-below">{speaker.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpeakerProfiles;
