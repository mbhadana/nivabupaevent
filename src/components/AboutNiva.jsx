import cityLogo from '../assets/city-logo.svg';
import './AboutNiva.css';

const AboutNiva = () => {
  return (
    <section className="about-niva">
      <div className="section-container">
        <div className="about-niva-content">
          <div className="about-niva-logo-side">
            <img src={cityLogo} alt="Niva Bupa Logo" className="about-niva-logo" />
          </div>
          <div className="about-niva-text-side">
            <h2 className="about-niva-heading">About Niva Bupa Health Insurance</h2>
            <p className="about-niva-description">
              One of India's leading standalone health insurers, Niva Bupa is committed to empowering Indians 
              with access to the best healthcare — when they need it most. As India enters its defining decade, 
              Niva Bupa champions a healthier, more protected India.
            </p>
            <a 
              href="https://www.nivabupa.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="about-niva-link"
            >
              Explore more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNiva;
