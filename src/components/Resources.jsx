import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Resources.css';

const resourcesData = [
  {
    title: 'Fireside Chat Videos',
    desc: 'Revisit impactful perspectives from industry leaders on what the decade demands.',
    linkText: 'Show Videos',
    linkUrl: '/speakers',
    isRoute: true
  },
  {
    title: 'Discussion Highlights',
    desc: 'Gain insights from the most engaging conversations from our panel discussions.',
    linkText: 'Show Videos',
    linkUrl: '/keynotes',
    isRoute: true
  },
  {
    title: 'Get Your Photos',
    desc: 'Relive your favourite moments from the event. Download your photo collection.',
    linkText: 'Show Photos',
    linkUrl: '/photos',
    isRoute: true
  }
];

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <div className="section-container">
        
        <div className="resources-header">
          <h2 className="resources-title">Better Together — <span className="text-gradient">Defining Decade</span></h2>
          <p className="resources-subtitle">
            The Defining Decade by Niva Bupa Health Insurance event brought together leaders, thinkers, and industry voices to reflect on the opportunities ahead.
          </p>
        </div>

        <div className="horizontal-resources">
          {resourcesData.map((item, index) => (
            <motion.div 
              key={index}
              className="resource-card-horizontal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="resource-card-title">{item.title}</h3>
              <p className="resource-card-desc">{item.desc}</p>
              {item.isRoute ? (
                <Link to={item.linkUrl} className="btn-unified">{item.linkText}</Link>
              ) : (
                <a href={item.linkUrl} className="btn-unified">{item.linkText}</a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Resources;
