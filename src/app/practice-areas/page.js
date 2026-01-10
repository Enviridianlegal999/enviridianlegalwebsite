import PracticeAreasPageHero from "@/components/pages/practice-areas/PracticeAreasPageHero";
import PracticeAreasTypes from "@/components/pages/practice-areas/PracticeAreasTypes";

import styles from "@/styles/pages/PracticeAreasPage.module.css";

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeAreasPageHero sectionID="main" styles={styles} />
      <PracticeAreasTypes sectionID="types" styles={styles} />
    </>
  );
}
