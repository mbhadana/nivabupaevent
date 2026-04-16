import Hero from '../components/Hero';
import EventFlow from '../components/EventFlow';
import SpeakerProfiles from '../components/SpeakerProfiles';
import Highlights from '../components/Highlights';
import Resources from '../components/Resources';
import AboutNiva from '../components/AboutNiva';

const HomePage = () => {
  return (
    <>
      <Hero />
      <EventFlow />
      <SpeakerProfiles />
      <Highlights />
      <Resources />
      <AboutNiva />
    </>
  );
};

export default HomePage;
