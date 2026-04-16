import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EventFlow.css';

const agenda = [
  { time: '9:00 AM – 10:00 AM', title: 'Registration + Breakfast', desc: '' },
  { time: '10:00 AM – 10:45 AM', title: 'Welcome Address', desc: 'Krishnan Ramachandran, CEO & MD, Niva Bupa Health Insurance' },
  { time: '10:45 AM – 11:15 AM', title: 'In Conversation', desc: 'Amitabh Chaudhry, MD & CEO Axis Bank with Krishnan Ramachandran, CEO & MD, Niva Bupa Health Insurance' },
  { time: '11:15 AM – 12:00 PM', title: 'Panel Discussion 1', desc: 'The Missing Link in Loan Protection Strategies' },
  { time: '12:00 PM – 12:45 PM', title: 'Panel Discussion 2', desc: 'AI-Driven Transformation in Insurance' },
  { time: '12:45 PM – 1:30 PM', title: 'Lunch', desc: '' },
  { time: '1:30 PM – 2:00 PM', title: 'Keynote Address', desc: 'Yashish Dahiya, Co-Founder & Group CEO, PolicyBazaar' },
  { time: '2:00 PM – 2:45 PM', title: 'Panel Discussion 3', desc: 'Bridging the Trust Deficit in Insurance' },
  { time: '2:45 PM – 3:30 PM', title: 'Panel Discussion 4', desc: 'Winning the Last Mile' },
  { time: '3:30 PM – 4:30 PM', title: 'Keynote Speaker', desc: "Gauranga Das, Member of ISKCON's Governing Body Commission" },
  { time: '4:30 PM – 5:00 PM', title: 'Tea Break', desc: '' },
  { time: '5:00 PM – 5:45 PM', title: 'Panel Discussion 5', desc: 'Affordability vs Value in Insurance' },
  { time: '5:45 PM – 6:45 PM', title: 'Stand Up Comedian Show', desc: 'Gaurav Gupta' },
  { time: '6:45 PM – 7:30 PM', title: 'Awards & Vote of Thanks', desc: '' },
  { time: '7:35 PM onwards', title: 'Dinner & Cocktails', desc: '' }
];

const parseTimeToDegrees = (timeString) => {
  const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (match) {
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();

    if (hours === 12 && ampm === 'AM') hours = 0;
    
    const hourDegrees = ((hours % 12) * 30) + (minutes * 0.5);
    const minuteDegrees = minutes * 6;
    return { hourDegrees, minuteDegrees };
  }
  return { hourDegrees: 0, minuteDegrees: 0 };
}

const AnalogClock = ({ timeString }) => {
  const { hourDegrees, minuteDegrees } = parseTimeToDegrees(timeString);
  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  return (
    <div className="analog-clock">
      {/* 60 Ticks Ring - Outer Edge */}
      {[...Array(60)].map((_, i) => (
         <div key={i} className={`clock-marker-tick ${i % 5 === 0 ? 'accent' : ''}`} style={{ transform: `rotate(${i * 6}deg)` }}></div>
      ))}

      {/* Numerical Markers - Pushed Inside */}
      {numbers.map((num, i) => {
         const deg = i * 30;
         return (
            <div key={num} className="clock-marker" style={{ transform: `rotate(${deg}deg)` }}>
              <div 
                className="clock-number"
                style={{ transform: `rotate(-${deg}deg)`, display: 'inline-block' }}
              >
                {num}
              </div>
            </div>
         )
      })}
      
      {/* Elevated Trapzoidal Hands */}
      <motion.div 
        className="clock-hand-hour-wrapper"
        animate={{ rotate: hourDegrees, x: '-50%' }}
        transition={{ type: "spring", stiffness: 40, damping: 12 }}
      >
         <div className="clock-hand-front-hour"></div>
         <div className="clock-hand-tail-hour"></div>
         <div className="clock-hand-ring"></div>
      </motion.div>

      <motion.div 
        className="clock-hand-minute-wrapper"
        animate={{ rotate: minuteDegrees, x: '-50%' }}
        transition={{ type: "spring", stiffness: 30, damping: 10 }}
      >
         <div className="clock-hand-front-minute"></div>
         <div className="clock-hand-tail-minute"></div>
         <div className="clock-hand-ring"></div>
      </motion.div>
    </div>
  )
}

const EventFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRefs = useRef([]);

  useEffect(() => {
    observerRefs.current = observerRefs.current.slice(0, agenda.length);

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
    <section className="event-flow" id="agenda" style={{ position: 'relative', height: `${(agenda.length - 1) * 100 + 20}vh` }}>
      
      <div className="event-scroll-track" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
         {agenda.map((_, index) => (
            <div
               key={index}
               data-index={index}
               ref={(el) => (observerRefs.current[index] = el)}
               style={{ height: index === agenda.length - 1 ? '20vh' : '100vh', width: '100%' }}
            />
         ))}
      </div>

      <div className="event-flow-sticky-container">
        <div className="section-container" style={{ width: '100%', position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
          
          <h2 className="section-title text-gradient event-flow-section-title">Event Flow</h2>

          <div className="event-flow-master-card">
            <div className="event-flow-grid">
              
              <div className="event-col-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="event-active-display"
                  >
                    <div className="event-time-left">{agenda[activeIndex].time}</div>
                    <h3 className="event-title-left">{agenda[activeIndex].title}</h3>
                    {agenda[activeIndex].desc && (
                      <p style={{ marginTop: '16px', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        {agenda[activeIndex].desc}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="event-col-right">
                <AnalogClock timeString={agenda[activeIndex].time} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFlow;
