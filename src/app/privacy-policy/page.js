import { Box } from "@mui/material";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Common.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section id="document" className={styles.privacyPolicyPage}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <h1>Privacy Policy</h1>
        </Box>
      </Container>
    </section>
  );
}
