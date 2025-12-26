import HomePageHero from "@/components/pages/homepage/HomePageHero";

import styles from "@/styles/pages/HomePage.module.css";

export default function Home() {
  return (
    <>
      <HomePageHero sectionID={"hero"} styles={styles} />
    </>
  );
}
