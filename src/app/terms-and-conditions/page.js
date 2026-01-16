import { Box } from "@mui/material";

import Container from "@/components/layout/Container";

import styles from "@/styles/pages/Common.module.css";

export default function TermsAndConditionsPage() {
  return (
    <section id="document" className={styles.termsAndConditionsPage}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <h1>Terms & Conditions</h1>
        </Box>
      </Container>
    </section>
  );
}
