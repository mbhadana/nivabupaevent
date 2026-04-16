import './AgendaPage.css';

const agendaData = [
  {
    time: '10:30 AM – 12:30 PM',
    title: 'Registration, High Tea & Opening Session',
    desc: 'Attendees arrive, collect badges, and enjoy an inaugural high tea. The opening session sets the stage with a welcome address and an overview of the day ahead.',
    type: 'break'
  },
  {
    time: '12:30 PM – 1:15 PM',
    title: 'Fireside Chat 1',
    subtitle: 'AI-Driven Transformation in Financial Services',
    desc: 'A candid conversation with Mr. Amitabh Chaudhry (MD & CEO, Axis Bank) and Mr. Krishnan Ramachandran (MD & CEO, Niva Bupa) on how AI is reshaping financial services and health insurance.',
    type: 'session'
  },
  {
    time: '1:15 PM – 2:30 PM',
    title: 'Networking Lunch',
    desc: 'Connect with fellow leaders over a curated dining experience. An opportunity to build relationships and exchange ideas.',
    type: 'break'
  },
  {
    time: '2:30 PM – 3:15 PM',
    title: 'Panel Discussion 1',
    subtitle: 'Leveraging AI for Personalised Customer Experiences',
    desc: 'Industry experts discuss how AI and data analytics can be leveraged to deliver hyper-personalised customer journeys in insurance and financial services.',
    type: 'session'
  },
  {
    time: '3:15 PM – 3:30 PM',
    title: 'Tea Break',
    desc: 'A short refreshment break.',
    type: 'break'
  },
  {
    time: '3:30 PM – 4:15 PM',
    title: 'Panel Discussion 2',
    subtitle: 'AI & the Future of Digital Banking',
    desc: 'Panelists explore the regulatory landscape, IRDAI reforms, and how insurers can innovate while maintaining compliance and competitive advantage.',
    type: 'session'
  },
  {
    time: '4:15 PM – 5:00 PM',
    title: 'Fireside Chat 2',
    subtitle: 'Where AI Meets Mindfulness — Technology & Spiritual Intelligence',
    desc: 'Shree Gauranga Das ji and Mr. Amitabh Chaudhry discuss the intersection of technology and spiritual intelligence in an era of rapid change.',
    type: 'session'
  },
  {
    time: '5:00 PM – 5:45 PM',
    title: 'Panel Discussion 3',
    subtitle: 'Building Responsible AI for a Healthier Tomorrow',
    desc: 'A forward-looking dialogue on preventive healthcare, wellness integration, and how technology can transform health outcomes.',
    type: 'session'
  },
  {
    time: '5:45 PM – 8:15 PM',
    title: 'Tea Break, Entertainment & Awards',
    desc: 'Evening entertainment, recognition of outstanding contributions, and award ceremonies celebrating industry excellence.',
    type: 'break'
  },
  {
    time: '8:15 PM onwards',
    title: 'Dinner & Networking',
    desc: 'A grand dinner to close the day with connections, conversations, and celebration of the defining decade.',
    type: 'break'
  }
];

const AgendaPage = () => {
  return (
    <div className="agenda-page">

      {/* Hero */}
      <section className="agenda-hero">
        <h1 className="agenda-hero-title">Event Agenda</h1>
        <p className="agenda-hero-desc">A comprehensive schedule of the day's sessions, panels, and networking opportunities.</p>
      </section>

      {/* Timetable */}
      <section className="agenda-timetable">
        <div className="timetable-header">
          <span className="th-time">TIME</span>
          <span className="th-session">SESSION</span>
          <span className="th-details">DETAILS</span>
        </div>

        {agendaData.map((item, idx) => (
          <div key={idx} className={`timetable-row ${item.type}`}>
            <div className="tt-time">
              <span>{item.time}</span>
            </div>
            <div className="tt-session">
              <h3 className="tt-title">{item.title}</h3>
              {item.subtitle && <p className="tt-subtitle">{item.subtitle}</p>}
            </div>
            <div className="tt-details">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default AgendaPage;
