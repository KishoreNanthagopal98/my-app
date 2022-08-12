import style from "../myJourney/journeySection.module.scss";

export default function Journey() {
  return (
    <>
      <br />
      <h1 className={style.journeyTitle}>My Journey</h1>
      <br />
      <div>
        <div className="containers">
          <div className={style.journeySectionBg}>
            <div className={style.div}>
              <div className={style.cardDiv}>
                <div className={style.imageDiv}>
                  <img
                    src="KCT_logo_Header.svg"
                    width="80%"
                    className={style.imageClass}
                  />
                </div>
                <br />
                <div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                    B.Tech Information Technology
                  </p>
                  <p className={style.dateSection}> 2016 - 2020 </p>
                </div>
              </div>
            </div>
            <div className={style.journeyLine}>
              <div className={style.dot}></div>
            </div>
            <div className={style.div}>
              <div className={style.cardDiv}>
                <div className={style.imageDiv}>
                  <img
                    src="cognizant_logo.png"
                    width="80%"
                    className={style.imageClass}
                  />
                </div>
                <br />
                <div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                    Non Functional Testing - Intern
                  </p>
                  <p className={style.dateSection}> 2019 - 2020 </p>
                </div>
              </div>
            </div>
            <div className={style.journeyLine}>
              <div className={style.dot}></div>
            </div>
						<div className={style.div}>
              <div className={style.cardDiv}>
                <div className={style.imageDiv}>
                  <img
                    src="byjus_learningapp_logo.svg"
                    width="80%"
                    className={style.imageClass}
                  />
                </div>
                <br />
                <div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                    Associate Software Engineer - Intern
                  </p>
                  <p className={style.dateSection + " " + style.byjusDate}> 2019 - 2020 </p>
                </div>
								<br />
								<div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                    Associate Software Engineer
                  </p>
                  <p className={style.dateSection + " " + style.byjusDate}> 2020 - 2021 </p>
                </div>
								<br />
								<div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                   Software Engineer
                  </p>
                  <p className={style.dateSection + " " + style.byjusDate}> 2021 - 2022 </p>
                </div>
								<br />
								<div className={style.aboutData}>
                  <p className={style.aboutDataText}>
                   Senior Software Engineer
                  </p>
                  <p className={style.dateSection + " " + style.byjusDate}> 2022 - Present </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
			<br />
    </>
  );
}
