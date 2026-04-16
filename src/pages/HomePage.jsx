import Hero from '../components/Hero';
import EventFlow from '../components/EventFlow';
import SpeakerProfiles from '../components/SpeakerProfiles';

import Highlights from '../components/Highlights';
import Resources from '../components/Resources';
import WhitePaper from '../components/WhitePaper';
import AboutNiva from '../components/AboutNiva';

const HomePage = () => {
  return (
    <>
      <Hero />
      <EventFlow />
      <SpeakerProfiles />
      <Highlights />

      <Resources />
      <WhitePaper />
      <AboutNiva />
    </>
  );
};

export default HomePage;
