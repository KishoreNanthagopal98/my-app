import { Image } from "react-bootstrap";

import styles from "components/header/header.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function Header() {

  return (
    <>
      <header className={styles.sticky}>
        <div className={`${styles.topheadersection} border-left border-top border-right`}>
          <div>
            <div className="row mt10 mb1">
              <div className={`${styles.topheadersectionCol} col-12 ml-0`}>
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
      </header>
    </>
  );
}

export default Header;
