import style from "components/skillsSection/skillsection.module.scss";

export default function SkillSection() {
  return (
    <>
      <section className="container" id="skillSection">
        <div className={style.skillsSection}>
          <h1 className={style.myskilltitle}>My Skills</h1>
        </div>
        <div>
          <div className={style.skillRow}>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="react.png" />
              </div>
              <div className={style.label}>React JS</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="nextjs.png" />
              </div>
              <div className={style.label}>NextJS</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-css3-48.png" />
              </div>
              <div className={style.label}>CSS 3</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-html-5-48.png" />
              </div>
              <div className={style.label}>HTML 5</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-java-48.png" />
              </div>
              <div className={style.label}>Java</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-typescript-48.png" />
              </div>
              <div className={style.label}>Typescript</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-mysql-logo-50.png" />
              </div>
              <div className={style.label}>My SQL</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-nodejs-48.png" />
              </div>
              <div className={style.label}>Node JS</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image + " " + style.expressimag} src="expressjs.png" />
              </div>
              <div className={style.label}>Express JS</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-javascript-48.png" />
              </div>
              <div className={style.label}>Javascript</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-mongodb-96.png" />
              </div>
              <div className={style.label}>MongoDB</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-git-48.png" />
              </div>
              <div className={style.label}>GIT</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-hadoop-distributed-file-system-96.png" />
              </div>
              <div className={style.label}>Hadoop</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-wasp-96.png" />
              </div>
              <div className={style.label}>Apache Hive</div>
            </div>
            <div className={style.skill}>
              <div className={style.imageborder}>
                <img className={style.image} src="icons8-machine-learning-64.png" />
              </div>
              <div className={style.label}>Machine Learning</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
