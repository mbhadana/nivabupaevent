import './KeynotesPage.css';

const keynotesData = [
  {
    id: 1,
    index: "01",
    category: "PANEL DISCUSSION 1",
    title: "Fireside Chat: AI-Driven Transformation in Financial Services",
    panelists: [
      { name: "Mr. Amitabh Chaudhry", role: "MD & CEO, Axis Bank" },
      { name: "Mr. Krishnan Ramachandran", role: "MD & CEO, Niva Bupa" }
    ],
    overview: "Industry leaders explored how AI-driven claims processing, telemedicine platforms, and data analytics are reshaping health insurance in India — reducing turnaround times while maintaining the human touch in critical care decisions.",
    takeaways: [
      "AI-powered claims processing can reduce settlement time by 70%",
      "Telemedicine integration is no longer optional for modern insurers",
      "Data-driven personalization will define the next decade of health insurance"
    ],
    images: ['/IMG_5929.JPG', '/IMG_5970.JPG', '/IMG_6052.JPG']
  },
  {
    id: 2,
    index: "02",
    category: "PANEL DISCUSSION 2",
    title: "Panel Discussion: Leveraging AI for Personalised Customer Experiences",
    panelists: [
      { name: "Panelist E", role: "Chief Marketing Officer" },
      { name: "Panelist F", role: "Consumer Insights Lead" },
      { name: "Panelist G", role: "Head of CX" }
    ],
    overview: "Panelists shared insights on transparency in policy design, simplified communication, and empathetic customer service — highlighting how trust is earned through consistent delivery and proactive engagement.",
    takeaways: [
      "Transparency in policy terms is the foundation of customer trust",
      "Proactive health engagement builds stronger brand loyalty",
      "Simplified communication reduces claim disputes by 45%"
    ],
    images: ['/IMG_6108.JPG', '/IMG_6248.JPG', '/IMG_5929.JPG']
  },
  {
    id: 3,
    index: "03",
    category: "PANEL DISCUSSION 3",
    title: "Panel Discussion: AI & the Future of Digital Banking",
    panelists: [
      { name: "Panelist H", role: "Regulatory Affairs Director" },
      { name: "Panelist I", role: "Legal Counsel, InsureTech" },
      { name: "Panelist J", role: "Policy Analyst" },
      { name: "Panelist K", role: "Compliance Head" }
    ],
    overview: "Experts examined upcoming policy changes, the impact of IRDAI reforms, and how insurers can adapt their product portfolios to meet compliance requirements while innovating for customer needs.",
    takeaways: [
      "IRDAI reforms are creating new opportunities for product innovation",
      "Compliance-first design accelerates time to market",
      "Risk-based capital frameworks will reshape competitive dynamics"
    ],
    images: ['/IMG_5970.JPG', '/IMG_6052.JPG', '/IMG_6108.JPG']
  },
  {
    id: 4,
    index: "04",
    category: "PANEL DISCUSSION 4",
    title: "Fireside Chat: Where AI Meets Mindfulness — Technology & Spiritual Intelligence",
    panelists: [
      { name: "Shree Gauranga Das ji", role: "Spiritual Leader & Author" },
      { name: "Mr. Amitabh Chaudhry", role: "MD & CEO, Axis Bank" }
    ],
    overview: "Leaders discussed how wellness programs, wearable tech data, and lifestyle coaching can reduce claims while improving health outcomes — agreeing that the future of insurance lies in prevention, not just coverage.",
    takeaways: [
      "Wellness incentive programs reduce hospitalization claims by 30%",
      "Wearable data integration enables dynamic premium adjustments",
      "Preventive care is the most cost-effective long-term strategy"
    ],
    images: ['/IMG_6248.JPG', '/IMG_5929.JPG', '/IMG_5970.JPG']
  }
];

const KeynotesPage = () => {
  return (
    <div className="keynotes-page">
      <div className="section-container">
        
        {/* Header Hero strictly matching screenshot details */}
        <section className="keynotes-hero">
          <div className="k-hero-text">
            <h1 className="k-hero-title">Panel Discussion<br/>Highlights</h1>
            <p className="k-hero-desc">Explore curated highlights from the panel discussions that shaped the narrative of the defining decade.</p>
          </div>
          <div className="k-hero-visual">
            <img src="/IMG_5929.JPG" alt="Panel Discussion Highlights banner" className="k-hero-img" />
          </div>
        </section>

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

                {/* RIGHT: Images — starts at same level as title */}
                <div className="panel-imagery">
                  <img src={panel.images[0]} alt="main panel" className="img-hero" />
                  <div className="img-grid-2">
                     <img src={panel.images[1]} alt="sub panel 1" className="img-small" />
                     <img src={panel.images[2]} alt="sub panel 2" className="img-small" />
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
