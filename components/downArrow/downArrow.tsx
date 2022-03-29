import styles from "components/downArrow/downArrow.module.scss";

function downArray() {
  return (
    <>
      <div className={styles.arrowBounce}>
        <span className={styles.animated + " " + styles.bounce}></span>
      </div>
    </>
  );
}

export default downArray;
