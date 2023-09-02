import "bootstrap/dist/css/bootstrap.min.css";

import { Fade } from "react-awesome-reveal";

import styles from "components/aboutMe/aboutMe.module.scss";

function aboutMe() {
  return (
    <>
      <Fade>
        <div className="containers">
          <div className={styles.aboutme} id="aboutMeId">
            <div className={`${styles.aboutMeSection} circle`}>
              <p className={styles.aboutDetails}>
                Hi I&apos;m Kishore, A 24 Years young software developer, Living
                in Coimbatore, India. Currently working at Justdial as a senior software engineer. 
                I love to learn New thing and solve
                Problems. I love to capture sweet memories and moments thats not visible to human eye, through one Instrument
                that can freeze time and give us back as photos. I like meeting
                new people and learn new things. Take a look at my resume.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default aboutMe;
