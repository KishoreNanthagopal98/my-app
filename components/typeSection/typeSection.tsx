import { useTypewriter, Cursor } from "react-simple-typewriter";

import style from "components/typeSection/typeSection.module.scss";

export default function TypeSection() {
  const { text } = useTypewriter({
    words: ["Full Stack Developer", "Senior Software Engineer", "Photographer"],
    loop: 0,
  });

  return (
    <>
      <div className={style.typing}>
        <div className={style.centerBox}>
          <span className={style.hey}>Hey There,</span>
          <br />
          <span className={style.name}>I&rsquo;m Kishore N, </span>
          <span className={style.destination}>{text}</span>
          <Cursor />
        </div>
      </div>
    </>
  );
}
