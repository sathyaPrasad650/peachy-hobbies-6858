import styles from "../Styles/ImgCategoryComponent.module.css";

function ImgCategoryComponent(props) {
  // console.log("props", props);
  const { src, title, subTitle } = props.data;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={src} className={styles.img} alt="Error" />
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
}

export default ImgCategoryComponent;
