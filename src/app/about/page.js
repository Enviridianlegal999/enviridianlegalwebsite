import AboutPageHero from "@/components/pages/about/AboutPageHero";
import AboutPageOverview from "@/components/pages/about/AboutPageOverview";

import styles from "@/styles/pages/AboutPage.module.css";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="main" styles={styles} />
      <AboutPageOverview sectionID="overview" styles={styles} />
    </>
  );
}
