import * as motion from "motion/react-client";

import PageCTA from "@/components/layout/PageCTA";

// import ctaImage from "../../../../public/assets/images/cta-image.webp";
import ctaImage from "../../../../public/assets/images/cta-image.webp";

const HomePageCTA = ({ sectionID, styles }) => {
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
          ctaTitle={"Speak with an attorney today"}
          ctaDescription={
            "Get clear, practical legal guidance from experienced professionals; no obligation, just answers."
          }
          ctaButtonText={"Quick Call"}
          actionType="quick-help"
        />
      </motion.div>
    </section>
  );
};

export default HomePageCTA;
