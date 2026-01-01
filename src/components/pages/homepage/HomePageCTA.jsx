import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/cta-image.png";

const HomePageCTA = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.ctaSection}>
      <PageCTA
        ctaImage={ctaImage}
        ctaTitle={"Speak with an attorney today"}
        ctaDescription={
          "Get clear, practical legal guidance from experienced professionals; no obligation, just answers."
        }
        ctaButtonText={"Quick Call"}
      />
    </section>
  );
};

export default HomePageCTA;
