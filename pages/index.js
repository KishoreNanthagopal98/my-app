import Header from 'components/header/header.tsx';
import Profile from 'components/profilePic/profile.tsx';
import DownArrow from 'components/downArrow/downArrow.tsx';
import AboutMe from 'components/AboutMe/aboutMe.tsx';
import DownloadResume from 'components/downloadResume/downloadResume.tsx';

export default function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <DownArrow />
      <br/>
      <AboutMe />
      <DownloadResume />
    </div>
  )
}
