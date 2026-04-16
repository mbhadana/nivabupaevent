const Footer = () => {
  return (
    <footer className="footer" style={{ 
      background: '#000', 
      padding: '100px 0 50px', 
      borderTop: '1px solid rgba(255,255,255,0.05)' 
    }}>
      <div className="section-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px',
          marginBottom: '80px'
        }}>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontFamily: 'Outfit' }}>NIVA BUPA</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              The Defining Decade by Niva Bupa Health Insurance event brought together leaders, thinkers, and industry voices to reflect on the opportunities ahead — and the role of health insurance, innovation, and trust in building a stronger tomorrow.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Agenda', 'Highlights', 'Speakers', 'Gallery'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: '0.3s' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>Contact</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              For support regarding event photos or highlights, please contact the event coordination team.
            </p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '30px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            © 2026 Niva Bupa Health Insurance. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.8rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.8rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
