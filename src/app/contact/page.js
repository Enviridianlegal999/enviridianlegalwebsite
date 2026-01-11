import ContactPageDetails from "@/components/pages/contact/ContactPageDetails";
import ContactPageHero from "@/components/pages/contact/ContactPageHero";
import ContactPageRegister from "@/components/pages/contact/ContactPageRegister";

import styles from "@/styles/pages/ContactPage.module.css";

export default function ContactPage() {
  return (
    <>
      <ContactPageHero sectionID="main" styles={styles} />
      <ContactPageDetails sectionID="details" styles={styles} />
      <ContactPageRegister sectionID="fill-the-form" styles={styles} />
    </>
  );
}
