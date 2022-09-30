import {
  footerTopData,
  usaFooterMiddleData,
  indFooterMiddleData,
  uaeFooterMiddleData,
  ausFooterMiddleData,
  sgpFooterMiddleData,
  ksaFooterMiddleData,
} from "../Data/data";
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <ul className={styles.ul}>
          {footerTopData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <p
        style={{
          textAlign: "left",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "50px",
        }}
      >
        Serving In
      </p>
      <div className={styles.footerMiddle}>
        <p className={styles.pHeading}>USA</p>
        <ul className={styles.ul}>
          {usaFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
        <p className={styles.pHeading}>IND</p>
        <ul className={styles.ul}>
          {indFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
        <p className={styles.pHeading}>UAE</p>
        <ul className={styles.ul}>
          {uaeFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
        <p className={styles.pHeading}>AUS</p>
        <ul className={styles.ul}>
          {ausFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
        <p className={styles.pHeading}>SGP</p>
        <ul className={styles.ul}>
          {sgpFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
        <p className={styles.pHeading}>KSA</p>
        <ul className={styles.ul}>
          {ksaFooterMiddleData.map((el, i) => (
            <li className={styles.li} style={{ type: "none" }} key={i + 1}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
