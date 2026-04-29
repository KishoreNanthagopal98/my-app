import TopNav from 'components/topNav/topNav.tsx';
import HeroSection from 'components/heroSection/heroSection.tsx';
import AboutMe from 'components/aboutMe/aboutMe.tsx';
import DownloadResume from 'components/downloadResume/downloadResume.tsx';
import MenuBar from 'components/menuBar/menuBar.tsx';
import SkillSection from 'components/skillsSection/skillSection.tsx';
import Journey from 'components/myJourney/journey.tsx';
import ReachMe from 'components/reachUsSection/reachus.tsx';
import AwardSection from 'components/awardSection/awardSection.tsx';

export default function Home() {
  return (
    <>
      {/* <TopNav /> */}
      <HeroSection />
      <AboutMe />
      <DownloadResume />
      <MenuBar />
      <SkillSection />
      <Journey />
      <AwardSection />
      <ReachMe />
    </>
  )
}
