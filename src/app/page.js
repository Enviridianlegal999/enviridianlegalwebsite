import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageCoreExpertise from "@/components/pages/homepage/HomePageCoreExpertise";
import HomePageSpecialisation from "@/components/pages/homepage/HomePageSpecialisation";
import HomePageServices from "@/components/pages/homepage/HomePageServices";
import FloatingSection from "@/components/ui/FloatingSection";
import FloatingValues from "@/components/pages/homepage/FloatingValues";

import styles from "@/styles/pages/HomePage.module.css";

export default function Home() {
  return (
    <>
      <HomePageHero sectionID={"hero"} styles={styles} />
      <HomePageCoreExpertise sectionID={"core-expertise"} styles={styles} />
      <HomePageSpecialisation sectionID={"specialisation"} styles={styles} />
      <HomePageServices sectionID={"services"} styles={styles} />
      <FloatingSection sectionID={"values"}>
        <FloatingValues
          bgImageUrls={[
            "/assets/images/integrity.png",
            "/assets/images/diligence.png",
            "/assets/images/clarity.png",
            "/assets/images/commitment.png",
          ]}
          valueNames={["Integrity", "Diligence", "Clarity", "Commitment"]}
        />
      </FloatingSection>
    </>
  );
}
