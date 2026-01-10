import PageCTA from "@/components/layout/PageCTA";

import ctaImage from "../../../../public/assets/images/communication-cta.png";

const ProcessPageCTA = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.ctaSection}>
      <PageCTA
        ctaImage={ctaImage}
        ctaTitle={"Speak with an attorney today"}
        ctaDescription={
          "Our approach: clear communication, realistic strategies, and unwavering commitment to client success."
        }
        ctaButtonText={"Quick Call"}
      />
    </section>
  );
};

export default ProcessPageCTA;
