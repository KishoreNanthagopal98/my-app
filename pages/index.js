import Header from 'components/header/header.tsx';
import Profile from 'components/profilePic/profile.tsx';
import DownArrow from 'components/downArrow/downArrow.tsx';
import AboutMe from 'components/aboutMe/aboutMe.tsx';
import DownloadResume from 'components/downloadResume/downloadResume.tsx';
import MenuBar from 'components/menuBar/menuBar.tsx';
import TypeSection from 'components/typeSection/typeSection.tsx';
import SkillSection from 'components/skillsSection/skillSection.tsx';
// import Project from 'components/journeySection/journey.tsx';

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
      {/* <Project /> */}
    </>
  )
}
