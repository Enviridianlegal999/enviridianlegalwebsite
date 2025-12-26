import styles from "@/styles/components/FullWidthContainer.module.css";

const FullWidthContainer = ({
  image,
  align = "right",
  height = "400px",
  width = "100%", // image width
  mode = "flow",
  objectFit = "cover", // new prop: cover | contain | fill
}) => {
  const alignClass =
    align === "left"
      ? styles.alignLeft
      : align === "center"
      ? styles.alignCenter
      : styles.alignRight;

  const modeClass = mode === "behind" ? styles.behind : styles.flow;

  return (
    <div
      className={`${styles.fullWidthWrapper} ${alignClass} ${modeClass}`}
      style={{ height }}
    >
      <div
        className={styles.fullWidthImage}
        style={{
          backgroundImage: `url(${image})`,
          width,
          backgroundSize: objectFit, // control cover, contain, fill
        }}
      />
    </div>
  );
};

export default FullWidthContainer;
