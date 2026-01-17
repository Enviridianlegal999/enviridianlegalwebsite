import * as motion from "motion/react-client";

import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/practiceareas-cta.webp";

const PracticeAreasPageCTA = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.ctaSection}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <PageCTA
          ctaImage={ctaImage}
          ctaTitle={"Let our experts handle your case"}
          ctaDescription={
            "We take care of the legal complexities, so you can move forward with confidence."
          }
          ctaButtonText={"Check Process"}
          actionType={"internal-link"}
          linkUrl={"/process-and-approach"}
        />
      </motion.div>
    </section>
  );
};

export default PracticeAreasPageCTA;
