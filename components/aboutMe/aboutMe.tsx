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
                Greetings, I&apos;m Kishore, a 25-year-old software developer residing in Coimbatore, India. I currently hold the position of Senior Software Engineer at Justdial. My passion lies in continuous learning, problem-solving, and capturing the intangible beauty of fleeting moments through the lens of a device that freezes time and transforms it into cherished photos. I thrive on meeting new people and expanding my knowledge horizons. Please peruse my resume for further insights into my professional journey.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default aboutMe;
