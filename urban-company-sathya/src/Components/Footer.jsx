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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, apple } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faPinterest,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
      <div className={styles.footerBottom}>
        <div>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
            alt="error"
          />
        </div>
        <div>
          <p style={{ fontSize: "14px" }}>
            © 2014-22 UrbanClap Technologies India Pvt. Ltd.
          </p>
        </div>
        <div>
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
          <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} />
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          <FontAwesomeIcon className={styles.icon} icon={faPinterest} />
        </div>
        <div style={{ display: "flex" }}>
          <img
            className={styles.img}
            src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
            alt=""
          />
          <img
            className={styles.img}
            src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

/*


*/
