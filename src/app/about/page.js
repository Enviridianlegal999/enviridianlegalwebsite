import AboutPageCTA from "@/components/pages/about/AboutPageCTA";
import AboutPageHero from "@/components/pages/about/AboutPageHero";
import AboutPageOverview from "@/components/pages/about/AboutPageOverview";
import AboutPageRecognition from "@/components/pages/about/AboutPageRecognition";
import AboutPageStory from "@/components/pages/about/AboutPageStory";
import AboutPageTeam from "@/components/pages/about/AboutPageTeam";
import AboutPageUSP from "@/components/pages/about/AboutPageUSP";

import styles from "@/styles/pages/AboutPage.module.css";

export default function About() {
  return (
    <>
      <AboutPageHero sectionID="main" styles={styles} />
      <AboutPageOverview sectionID="overview" styles={styles} />
      <AboutPageStory sectionID="our-story" styles={styles} />
      <AboutPageTeam sectionID="our-team" styles={styles} />
      <AboutPageUSP sectionID="usp" styles={styles} />
      <AboutPageRecognition sectionID="recognition" styles={styles} />
      <AboutPageCTA sectionID="cta" styles={styles} />
    </>
  );
}
