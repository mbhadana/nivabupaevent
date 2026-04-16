import { motion } from 'framer-motion';
import './ScoreReport.css';

const ScoreReport = () => {
  return (
    <section className="score-report-section" id="score-report">
      <div className="section-container">
        
        <div className="score-header">
          <h2 className="section-title text-gradient">India Health Protection Score</h2>
          <p className="score-subtitle">
            A comprehensive look at the changing landscape of health protection across India, uncovering core demographic shifts, evolving risks, and future outlooks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScoreReport;
