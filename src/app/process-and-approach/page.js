import ProcessPageCommunication from "@/components/pages/process-and-approach/ProcessPageCommunication";
import ProcessPageCTA from "@/components/pages/process-and-approach/ProcessPageCTA";
import ProcessPageHero from "@/components/pages/process-and-approach/ProcessPageHero";
import ProcessPageSteps from "@/components/pages/process-and-approach/ProcessPageSteps";

import styles from "@/styles/pages/ProcessPage.module.css";

export default function ProcessAndApproach() {
  return (
    <>
      <ProcessPageHero sectionID="main" styles={styles} />
      <ProcessPageSteps sectionID="steps" styles={styles} />
      <ProcessPageCommunication sectionID="communication" styles={styles} />
      <ProcessPageCTA sectionID="cta" styles={styles} />
    </>
  );
}
