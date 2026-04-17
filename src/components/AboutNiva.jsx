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
            <h2 className="section-title text-gradient" style={{ marginBottom: '20px' }}>About Niva Bupa Health Insurance</h2>
            <p className="about-niva-description">
              At Niva Bupa, our purpose is “to give every Indian the confidence to access the best healthcare” by empowering them with knowledge, guiding them with expertise, and providing them with a gamut of services that instils confidence and puts control back in their hands- just the way they want every moment of their life to be. For us, health insurance is not just an annual transaction. Rather, it is about building a long-term relationship with our customers.
            </p>
            <a 
              href="https://www.nivabupa.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-unified"
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNiva;
