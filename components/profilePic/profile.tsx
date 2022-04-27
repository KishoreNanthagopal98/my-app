import "bootstrap/dist/css/bootstrap.min.css";

import { bounceIn, bounceInLeft, bounceInRight } from "react-animations";
import Radium from 'radium';

import styles from "components/profilePic/profile.module.scss";

function profile() {
  const stylesAnimation:any = {
    bounceIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceIn, "bounceIn"),
    },
    bounceInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceInLeft, "bounceInLeft"),
    },
    bounceInRight: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceInRight, "bounceInRight"),
    }
  };

  return (
    <>
      <div className={styles.profileSection}>
        <div className={styles.profileImage} id="profilePic">      
          <Radium.StyleRoot className={styles.anime}>
            <span className={styles.titleLineFirst} style={stylesAnimation.bounceInLeft}/>  
            <img src="/profileImg-min.png" className={styles.image} style={stylesAnimation.bounceIn} loading="lazy"/>
            <span className={styles.titleLine} style={stylesAnimation.bounceInRight}/>
          </Radium.StyleRoot>
        </div>
      </div>
    </>
  );
}

export default profile;
