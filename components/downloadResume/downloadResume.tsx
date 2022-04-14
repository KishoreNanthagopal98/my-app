import styles from "components/downloadResume/downloadResume.module.scss";

import { Fade } from "react-awesome-reveal";

var FileSaver = require('file-saver');

function resumeAnimation() {
  let tar: any = document.getElementById("resumeButton");
  if (tar.hasAttribute("data-dl")) {
    let dlClass = "dl-working";
    if (!tar.classList.contains(dlClass)) {
      let lastSpan = tar.querySelector("span:last-child"),
        lastSpanText = lastSpan.textContent,
        timeout: any = getMSFromProperty("--dur", ":root");

      tar.classList.add(dlClass);
      lastSpan.textContent = "Downloading…";
      tar.disabled = true;

      setTimeout(() => {
        lastSpan.textContent = "Completed!";
        FileSaver.saveAs(
          "https://github.com/KishoreNanthagopal98/my-app/blob/main/public/kishore-n.pdf",
          "Kishore-n-resume.pdf"
        );
      }, timeout * 0.9);

      setTimeout(() => {
        tar.classList.remove(dlClass);
        lastSpan.textContent = lastSpanText;
        tar.disabled = false;
      }, timeout + 1e3);
    }
  }
}

function getMSFromProperty(property: any, selector: any) {
  let cs = window.getComputedStyle(document.querySelector(selector)),
    transDur: any = cs.getPropertyValue(property),
    msLabelPos = transDur.indexOf("ms"),
    sLabelPos = transDur.indexOf("s");

  if (msLabelPos > -1) return transDur.substr(0, msLabelPos);
  else if (sLabelPos > -1) return transDur.substr(0, sLabelPos) * 1e3;
}

function downloadResume() {
  return (
    <>
      <Fade>
        <div className="containers">
          <div className={styles.downloadArrow}>
            <button
              type="button"
              data-dl
              className={styles.downloadResume}
              onClick={resumeAnimation}
              id="resumeButton"
            >
              <span className="dlicon"></span>
              <span>&#x44;&#x6F;&#x77;&#x6E;&#x6C;&#x6F;&#x61;&#x64;</span>
            </button>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default downloadResume;
