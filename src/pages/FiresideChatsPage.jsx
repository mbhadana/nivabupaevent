import './KeynotesPage.css';

const firesideData = [
  {
    id: 1,
    index: "01",
    category: "FIRESIDE CHAT",
    title: "In conversation",
    panelists: [
      { name: "Amitabh Chaudhry", role: "MD & CEO, Axis Bank" },
      { name: "Krishnan Ramachandran", role: "CEO & MD, Niva Bupa Health Insurance" }
    ],
    overview: "A comprehensive discussion exploring the synergy between banking distribution channels and modern health insurance products, detailing strategies for leveraging AI and data analytics in the upcoming decade of inclusive growth.",
    takeaways: [
      "Strategic banking partnerships are crucial for deep-tier insurance penetration.",
      "Customer-centric claim processes directly drive long-term brand loyalty.",
      "Digital integration is accelerating modular product deployment across digital platforms."
    ],
    image: '/IMG_5929.JPG'
  },
  {
    id: 2,
    index: "02",
    category: "FIRESIDE CHAT",
    title: "In conversation",
    panelists: [
      { name: "Ankur Kharbanda", role: "Executive Director & CBO - Niva Bupa" },
      { name: "Yashish Dahiya", role: "Chairman PB Fintech" }
    ],
    overview: "An in-depth look at how aggregators and underwriters can architect frictionless purchasing journeys, emphasizing transparency in claims and the future of dynamic pricing algorithms.",
    takeaways: [
      "Transparency in policy terms serves as the absolute foundation of customer trust.",
      "Telemedicine and wellness tracking must be integrated natively into future policies.",
      "Simplified communication architecture reduces claim processing disputes significantly."
    ],
    image: '/IMG_6108.JPG'
  },
  {
    id: 3,
    index: "03",
    category: "FIRESIDE CHAT",
    title: "Mindfulness & Leadership",
    panelists: [
      { name: "Ankur Kharbanda", role: "Executive Director & CBO - Niva Bupa" },
      { name: "Gauranga Das Ji", role: "Monk & Spiritual Leader, ISKCON" }
    ],
    overview: "A profound exploration into the intersection of high-stakes corporate leadership and spiritual intelligence, discussing how mindful resilience acts as the ultimate bedrock for navigating aggressive market paradigms.",
    takeaways: [
      "Corporate burnout can be mitigated through institutionalized mindfulness protocols.",
      "Empathetic leadership directly correlates with higher organizational adaptability.",
      "Preventive mental healthcare is the most under-indexed demographic in modern wellness."
    ],
    image: '/IMG_5970.JPG'
  }
];

const FiresideChatsPage = () => {
  return (
    <div className="keynotes-page">
      <div className="section-container">
        
        {/* Top Hero text removed per user request */}

        <div className="k-panels-feed">
          {firesideData.map((panel) => (
            <section key={panel.id} className="panel-wrapper">
              <span className="panel-index">{panel.index}</span>
              
              {/* LEFT: Content */}
              <div className="panel-content">
                <h2 className="panel-title">{panel.title}</h2>

                <h5 className="panel-section-title">SPEAKERS</h5>
                <div className="panelists-grid">
                  {panel.panelists.map((person, idx) => (
                    <div key={idx} className="panelist-pill">
                      <div className="panelist-info">
                        <h4>{person.name}</h4>
                        <p>{person.role}</p>
                      </div>
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

              {/* RIGHT: Image (using the single layout style vs grid-3) */}
              <div className="panel-imagery" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <img src={panel.image} alt="Speaker panel" className="img-hero" style={{ height: 'auto', width: '100%', borderRadius: '12px', marginBottom: '0' }} />
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
          ))}
        </div>

      </div>
    </div>
  );
};

export default FiresideChatsPage;
