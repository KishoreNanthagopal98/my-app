import style from "components/menuBar/menu.module.scss";

export default function menuBar() {
  return (
    <>
      <div>
        <nav className={style.nav}>
          <ul className={style.ul}>
            <li className={style.li}>
            <div className={style.homeicon}>
                <div>
                  <i className={`uil uil-user-nurse ${style.icon}`}></i>
                </div>
              </div>
            </li>
            <li className={style.li}>
              <div className="abouticon">
                <i className={`uil uil-books ${style.icon}`}></i>
              </div>
            </li>
            <li className={style.li}>
              <div className="work-icon">
                <i className={`uil uil-copy-alt ${style.icon}`}></i>
              </div>
            </li>
            <li className={style.li}>
              <div className="mail-icon">
                <div className="mail-base">
                  <i className={`uil uil-message ${style.icon}`}></i>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
