import Container from "../layout/Container";

import styles from "@/styles/components/ui/FloatingSection.module.css";

const FloatingSection = ({ sectionID, children }) => {
  return (
    <section id={sectionID} className={styles.floatingSection}>
      <Container>{children}</Container>
    </section>
  );
};

export default FloatingSection;
