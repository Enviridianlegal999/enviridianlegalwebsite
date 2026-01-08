import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/aboutpage-cta.png";

const AboutPageCTA = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.ctaSection}>
      <PageCTA
        ctaImage={ctaImage}
        ctaTitle={"Explore Practice Areas"}
        ctaDescription={
          "Our approach: clear communication, realistic strategies, and unwavering commitment to client success."
        }
        ctaButtonText={"Explore"}
      />
    </section>
  );
};

export default AboutPageCTA;
