import ImgCategoryComponent from "./ImgCategoryComponent";
import styles from "../Styles/ImgCategoryContainerComponent.module.css";

function ImgCategoryContainerComponent(props) {
  //   console.log(props);
  const { array, heading, subHeading } = props;
  //   console.log("array", array);
  return (
    <div className={styles.container}>
      <div
        className={
          subHeading.length === 0
            ? styles.topContinerWithOutSubHeading
            : styles.topContainerWithSubHeading
        }
      >
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subHeading}>{subHeading}</p>
      </div>
      <div className={styles.bottomContainer}>
        {array.map((el, i) => (
          <ImgCategoryComponent key={i + 1} data={el} />
        ))}
      </div>
    </div>
  );
}

export default ImgCategoryContainerComponent;
