import ContactPageDetails from "@/components/pages/contact/ContactPageDetails";
import ContactPageHero from "@/components/pages/contact/ContactPageHero";
import ContactPageRegister from "@/components/pages/contact/ContactPageRegister";

import styles from "@/styles/pages/ContactPage.module.css";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Enviridian Legal for expert legal consultation in Delhi NCR. Reach out for Supreme Court and High Court representation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageHero sectionID="main" styles={styles} />
      <ContactPageDetails sectionID="details" styles={styles} />
      <ContactPageRegister sectionID="fill-the-form" styles={styles} />
    </>
  );
}
