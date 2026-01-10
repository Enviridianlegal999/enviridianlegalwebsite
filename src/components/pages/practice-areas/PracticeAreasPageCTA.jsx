import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/practiceareas-cta.png";

const PracticeAreasPageCTA = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.ctaSection}>
      <PageCTA
        ctaImage={ctaImage}
        ctaTitle={"Let our experts handle your case"}
        ctaDescription={
          "We take care of the legal complexities, so you can move forward with confidence."
        }
        ctaButtonText={"Check Process"}
      />
    </section>
  );
};

export default PracticeAreasPageCTA;
