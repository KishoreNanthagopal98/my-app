import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

import styles from "components/header/header.module.scss";

function header() {
  return (
    <header className={styles.sticky}>
      <div className={`${styles.topheadersection} border-left border-top border-right container`}>
        <div>
          <div className="row mt10 mb1">
            <div className="col-12 ml-0">
              <div className="row d-flex justify-content-center">
                <div className={`${styles.headerDiv} col-2`}>
                  <div>
                    <Image
                      alt="Nk Logo"
                      src="/LogoReal.png"
                      width="75"
                      height="75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.navbar} container`}>
        <div>
          <ul className={styles.navbarLists}>
            <li className={styles.navbarElements}>ABOUT</li>
            <li className={styles.navbarElements}>SKILLS</li>
            <li className={styles.navbarElements}>PROJECTS</li>
            <li className={styles.navbarElements}>JOURNEY</li>
            <li className={styles.navbarElements}>CONTACT ME</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default header;
