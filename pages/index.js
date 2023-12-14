import Header from 'components/header/header.tsx';
import Profile from 'components/profilePic/profile.tsx';
import DownArrow from 'components/downArrow/downArrow.tsx';
import AboutMe from 'components/aboutMe/aboutMe.tsx';
import DownloadResume from 'components/downloadResume/downloadResume.tsx';
import MenuBar from 'components/menuBar/menuBar.tsx';
import TypeSection from 'components/typeSection/typeSection.tsx';
import SkillSection from 'components/skillsSection/skillSection.tsx';
import Journey from 'components/myJourney/journey.tsx';
import ReachMe from 'components/reachUsSection/reachus.tsx';
import AwardSection from 'components/awardSection/awardSection.tsx';

export default function Home() {
  return (
    <>
      <Header />
      <TypeSection /> 
      <Profile />
      <DownArrow />
      <br/>
      <AboutMe />
      <DownloadResume />
      <MenuBar />
      <SkillSection />
      <br/>
      <Journey />
      <br />
      <AwardSection />
      <br />
      <ReachMe />
    </>
  )
}
