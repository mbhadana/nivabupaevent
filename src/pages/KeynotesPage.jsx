import './KeynotesPage.css';

const keynotesData = [
  {
    id: 1,
    index: "01",
    category: "DISCUSSION 1",
    title: "The Missing Link in Loan Protection Strategies:",
    panelists: [
      { name: "Nikhil Varma", role: "IDFC" },
      { name: "Ashish Sagar", role: "HDFC Bank" },
      { name: "Virendra Somwanshi", role: "Federal Bank" },
      { name: "Neeta Bhatt", role: "Axis Bank" },
      { name: "Randeep Gandhok", role: "SCB" },
      { name: "Sambhat Kumar", role: "HSL" },
      { name: "Subhajit Roy", role: "Bandhan Bank" }
    ],
    overview: "Insurance is not just protection—it's a risk mitigation with revenue lever.",
    takeaways: [
      "Loan protection acts as a critical revenue lever for financial institutions.",
      "Integrating insurance mitigates default risks significantly across credit portfolios.",
      "Strategic alignment between banking and insurance elevates long-term client value."
    ],
    images: ['/IMG_5929.JPG', '/IMG_5970.JPG', '/IMG_6052.JPG']
  },
  {
    id: 2,
    index: "02",
    category: "DISCUSSION 2",
    title: "AI-Driven Transformation in Insurance:",
    panelists: [
      { name: "Manas Gupta", role: "Phone Pe" },
      { name: "Surendra Katariya", role: "BFL" },
      { name: "Vipul Agarwal", role: "Axis Bank" },
      { name: "Sarbvir Singh", role: "PB Fintech" },
      { name: "Nitish Kumar", role: "Poonawalla Fincorp" },
      { name: "Dhirendra Mahyavanshi", role: "Turtlemint" }
    ],
    overview: "How AI might redefine the very operating model of insurance companies.",
    takeaways: [
      "AI automation is restructuring core underwriting and claims processing workflows.",
      "Machine learning models significantly improve precision in risk assessment.",
      "Generative AI creates hyper-personalized customer engagement channels at scale."
    ],
    images: ['/IMG_6108.JPG', '/IMG_6248.JPG', '/IMG_5929.JPG']
  },
  {
    id: 3,
    index: "03",
    category: "DISCUSSION 3",
    title: "Bridging the Trust Deficit in Insurance:",
    panelists: [
      { name: "Sajja Chowdhary", role: "PB Fintech" },
      { name: "Mahesh Dayani", role: "SBFC Finance" },
      { name: "Roopa Natrajan", role: "HDFC Bank" },
      { name: "Shirish Patel", role: "Gennext" },
      { name: "Jasmine Kaur", role: "Mahindra Finance" },
      { name: "Arjun Chowdhry", role: "Grihum Housing" },
      { name: "Saurabh Jain", role: "SCB" }
    ],
    overview: "How insurers can rebuild trust",
    takeaways: [
      "Radical transparency in policy formulation remains the absolute foundation of consumer trust.",
      "Simplifying communication architecture massively reduces dispute friction.",
      "Proactive empathetic customer engagement builds unshakeable brand loyalty."
    ],
    images: ['/IMG_5970.JPG', '/IMG_6052.JPG', '/IMG_6108.JPG']
  },
  {
    id: 4,
    index: "04",
    category: "DISCUSSION 4",
    title: "Winning the Last Mile",
    panelists: [
      { name: "Rohit Chugh", role: "Capri Global" },
      { name: "Kranti Sharma", role: "L&T Finance" },
      { name: "Saumya Chaudhuri", role: "IDBI Bank" },
      { name: "K Suresh Kumar", role: "Fedfina" },
      { name: "Gursharan Rai Bansal", role: "IPPB" }
    ],
    overview: "Reimagining Insurance Distribution in a Platform Economy",
    takeaways: [
      "Embedded insurance inside existing platform ecosystems dramatically reduces acquisition costs.",
      "Localizing digital touchpoints ensures deep penetration in tier-2 and tier-3 sectors.",
      "Interoperable digital public infrastructure is the key to scaling the last mile."
    ],
    images: ['/IMG_6248.JPG', '/IMG_5929.JPG', '/IMG_5970.JPG']
  },
  {
    id: 5,
    index: "05",
    category: "DISCUSSION 5",
    title: "Affordability vs Value in Insurance",
    panelists: [
      { name: "Amit Chhabra", role: "PB Fintech" },
      { name: "Ashish Goyal", role: "Early Salary" },
      { name: "Dhiraj Reli", role: "HSL" },
      { name: "Neeraj Purohit", role: "Paytm" },
      { name: "Raul Rebello", role: "Mahindra Finance" },
      { name: "Balachander Shekhar", role: "Renew Buy" }
    ],
    overview: "How insurers can innovate through new product designs, preventive healthcare initiatives, and technology-driven cost efficiencies.",
    takeaways: [
      "Preventive healthcare integrations reduce long-term structural underwriting strains.",
      "Modular product designs empower consumers to build custom, highly affordable portfolios.",
      "Technology-driven cost compression allows for superior value delivery without margin loss."
    ],
    images: ['/IMG_6052.JPG', '/IMG_6108.JPG', '/IMG_6248.JPG']
  }
];

const KeynotesPage = () => {
  return (
    <div className="keynotes-page">
      <div className="section-container">
        
        {/* Top Hero text removed per user request */}

        {/* All panels use consistent layout: content left, images right */}
        <div className="k-panels-feed">
          {keynotesData.map((panel, i) => {

            return (
              <section key={panel.id} className="panel-wrapper">
                <span className="panel-index">{panel.index}</span>
                
                {/* LEFT: All text content */}
                <div className="panel-content">
                  <span className="panel-category">{panel.category}</span>
                  <h2 className="panel-title">{panel.title}</h2>

                  <h5 className="panel-section-title">PANELISTS</h5>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px 24px',
                    width: '100%',
                    marginBottom: '40px'
                  }}>
                    {panel.panelists.map((person, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ color: '#fff', fontSize: '1.25rem', fontWeight: '500' }}>{person.name}</span>
                        <span style={{ color: '#777', fontSize: '0.85rem', fontWeight: '700' }}>{person.role}</span>
                      </div>
                    ))}
                  </div>

                  <h5 className="panel-section-title">DISCUSSION OVERVIEW</h5>
                  <p className="panel-overview">{panel.overview}</p>

                  <h5 className="panel-section-title">KEY TAKEAWAYS</h5>
                  <div className="takeaways-list">
                    {panel.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="takeaway-pill">
                        <p>{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: Image (Single feature style mimicking Fireside page) */}
                <div className="panel-imagery" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <img src={panel.images[0]} alt="Speaker discussion" className="img-hero" style={{ height: 'auto', width: '100%', borderRadius: '12px', marginBottom: '0' }} />
                    {/* Floating Play Button Overlay */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '50%', left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      backgroundColor: 'rgba(0,173,238,0.85)', 
                      borderRadius: '50%', 
                      width: '74px', height: '74px', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      cursor: 'pointer', 
                      border: '3px solid #fff',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <path d="M5 3l14 9-14 9V3z"/>
                      </svg>
                    </div>
                  </div>
                </div>

              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default KeynotesPage;
