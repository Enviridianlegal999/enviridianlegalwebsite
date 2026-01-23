import PracticeAreasPageCTA from "@/components/pages/practice-areas/PracticeAreasPageCTA";
import PracticeAreasPageHero from "@/components/pages/practice-areas/PracticeAreasPageHero";
import PracticeAreasTypes from "@/components/pages/practice-areas/PracticeAreasTypes";

import styles from "@/styles/pages/PracticeAreasPage.module.css";

export const metadata = {
  title: "Our Practice Areas",
  description:
    "Comprehensive legal services including Constitutional Law, IP Disputes, Service Matters, and Corporate Advisory in the Supreme Court and High Courts.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeAreasPageHero sectionID="main" styles={styles} />
      <PracticeAreasTypes sectionID="types" styles={styles} />
      <PracticeAreasPageCTA sectionID="cta" styles={styles} />
    </>
  );
}
