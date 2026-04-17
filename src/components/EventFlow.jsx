import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Mic, MicVocal, UsersRound, MessageSquare, Utensils, Trophy, Star, UserPlus, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import './EventFlow.css';

const agenda = [
  { time: ' ', title: ' ', desc: '' },
  { time: '9:00 AM – 10:00 AM', title: 'Registration + Breakfast', desc: '' },
  { time: '10:05 AM – 10:45 AM', title: 'Welcome Address', desc: 'by Krishnan Ramachandran, MD & CEO - Niva Bupa & Young India Whitepaper Launch' },
  { time: '10:45 AM – 11:15 AM', title: 'In Conversation', desc: 'Krishnan Ramachandran, MD & CEO - Niva Bupa in conversation with Amitabh Chaudhry, MD & CEO - Axis Bank' },
  { time: '11:15 AM – 12:00 PM', title: 'Discussion', desc: 'The Missing Link in Loan Protection Strategies' },
  { time: '12:00 PM – 12:45 PM', title: 'Discussion', desc: 'AI-Driven Transformation in Insurance' },
  { time: '12:45 PM – 1:30 PM', title: 'Lunch Break', desc: '' },
  { time: '1:30 PM – 2:00 PM', title: 'In Conversation', desc: 'Ankur Kharbanda, Executive Director & CBO - Niva Bupa in conversation with Yashish Dahiya, Chairman PB Fintech' },
  { time: '2:00 PM – 2:45 PM', title: 'Discussion', desc: 'Bridging the Trust Deficit in Insurance' },
  { time: '2:45 PM – 3:30 PM', title: 'Discussion', desc: 'Winning the Last Mile' },
  { time: '3:30 PM – 4:30 PM', title: 'In Conversation', desc: 'Ankur Kharbanda, Executive Director & CBO - Niva Bupa in conversation with Gauranga Das Ji, Monk & Spiritual Leader, ISKCON' },
  { time: '4:30 PM – 5:00 PM', title: 'Tea Break', desc: '' },
  { time: '5:00 PM – 5:45 PM', title: 'Discussion', desc: 'Affordability vs Value in Insurance' },
  { time: '5:45 PM – 6:45 PM', title: 'Laughter Therapy', desc: 'with Gaurav Gupta' },
  { time: '6:45 PM – 7:30 PM', title: 'Thank You Awards', desc: '' }
];

const getEventIcon = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('breakfast') || lower.includes('tea')) return <Coffee size={32} strokeWidth={1} />;
  if (lower.includes('lunch') || lower.includes('dinner')) return <Utensils size={32} strokeWidth={1} />;
  if (lower.includes('comedian') || lower.includes('laughter')) return <MicVocal size={32} strokeWidth={1} />;
  if (lower.includes('keynote')) return <Star size={32} strokeWidth={1} />;
  if (lower.includes('awards')) return <Trophy size={32} strokeWidth={1} />;
  if (lower.includes('discussion') || lower.includes('panel')) return <UsersRound size={32} strokeWidth={1} />;
  if (lower.includes('conversation')) return <MessageSquare size={32} strokeWidth={1} />;
  if (lower.includes('address')) return <Mic size={32} strokeWidth={1} />;
  if (lower.includes('registration')) return <UserPlus size={32} strokeWidth={1} />;
  return <FileText size={32} strokeWidth={1} />;
};

const formatTimeMobile = (timeStr) => {
  if (typeof timeStr !== 'string' || !timeStr.includes('–')) return timeStr;
  const parts = timeStr.split(' – ');
  if (parts.length === 2) {
    const match = parts[0].match(/^(.*?)\s*(AM|PM)$/i);
    if (match) {
      return (
        <>
          {match[1]}<span className="mobile-hide-ampm"> {match[2]}</span> – {parts[1]}
        </>
      );
    }
  }
  return timeStr;
};

const EventFlow = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolledLeft, setIsScrolledLeft] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
      setScrollProgress(progress);
      setIsScrolledLeft(scrollLeft > 20);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section className="event-flow-section" id="agenda" style={{ paddingLeft: 0, paddingRight: 0 }}>
      {/* Centralized Text/Title Container */}
      <div className="section-container">
        <h2 className="section-title text-gradient" style={{ marginBottom: '30px' }}>Event Flow</h2>
      </div>
        
      {/* Full-width Boundary Container */}
      <div className="event-track-wrapper">
          <div 
            className={`scroll-fade-left ${isScrolledLeft ? 'visible' : ''}`}
            onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
          >
            <ChevronLeft size={48} strokeWidth={4} />
          </div>

          <div 
            className="event-horizontal-track" 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {agenda.map((item, index) => (
              <div 
                key={index} 
                className="event-box"
                style={index === 0 ? { opacity: 0, pointerEvents: 'none' } : {}}
              >
                <div className="event-box-icon">
                  {getEventIcon(item.title)}
                </div>
                <div className="event-box-text-container">
                  <div className="event-box-time">{formatTimeMobile(item.time)}</div>
                  <h3 className="event-box-title">{item.title}</h3>
                  {item.desc && <p className="event-box-desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          <div 
            className={`scroll-fade-right ${scrollProgress < 0.99 ? 'visible' : ''}`}
            onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
          >
            <ChevronRight size={48} strokeWidth={4} />
          </div>
        </div>


      {/* Centralized Progress Bar Container */}
      <div className="section-container">
        <div className="event-progress-container">
          <div className="event-progress-track"></div>
          <div 
            className="event-progress-fill" 
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
          />
        </div>
      </div>

    </section>
  );
};

export default EventFlow;
