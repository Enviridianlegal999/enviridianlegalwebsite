import * as motion from "motion/react-client";

import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/aboutpage-cta.webp";

const AboutPageCTA = ({ sectionID, styles }) => {
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
          ctaTitle={"Explore Practice Areas"}
          ctaDescription={
            "Our approach: clear communication, realistic strategies, and unwavering commitment to client success."
          }
          ctaButtonText={"Explore Now"}
          actionType={"internal-link"}
          linkUrl={"/practice-areas"}
        />
      </motion.div>
    </section>
  );
};

export default AboutPageCTA;
