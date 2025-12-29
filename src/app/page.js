import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageCoreExpertise from "@/components/pages/homepage/HomePageCoreExpertise";
import HomePageSpecialisation from "@/components/pages/homepage/HomePageSpecialisation";
import HomePageServices from "@/components/pages/homepage/HomePageServices";

import styles from "@/styles/pages/HomePage.module.css";

export default function Home() {
  return (
    <>
      <HomePageHero sectionID={"hero"} styles={styles} />
      <HomePageCoreExpertise sectionID={"core-expertise"} styles={styles} />
      <HomePageSpecialisation sectionID={"specialisation"} styles={styles} />
      <HomePageServices sectionID={"services"} styles={styles} />
    </>
  );
}
