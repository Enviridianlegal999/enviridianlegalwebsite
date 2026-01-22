import * as motion from "motion/react-client";

import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/communication-cta.webp";

const ProcessPageCTA = ({ sectionID, styles }) => {
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
            "Our approach: clear communication, realistic strategies, and unwavering commitment to client success."
          }
          ctaButtonText={"Quick Call"}
          actionType={"quick-help"}
        />
      </motion.div>
    </section>
  );
};

export default ProcessPageCTA;
