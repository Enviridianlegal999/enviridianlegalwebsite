import ContactUsRegistration from "@/components/forms/ContactUsRegistration";
import Container from "@/components/layout/Container";
import { Box, Stack } from "@mui/material";

const ContactPageRegister = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={`${styles.contactPageFormSection}`}>
      <Container>
        <Stack spacing={4} sx={{ maxWidth: 600, mx: "auto" }}>
          <h3>Get In Touch</h3>
          <ContactUsRegistration themeColor="secondary" />
        </Stack>
      </Container>
    </section>
  );
};

export default ContactPageRegister;
