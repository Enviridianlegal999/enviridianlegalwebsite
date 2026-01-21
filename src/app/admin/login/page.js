import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import AdminLoginRegistration from "@/components/forms/AdminLoginRegistration";

import styles from "@/styles/pages/Dashboard.module.css";

export default function LoginPage() {
  return (
    <section id={"admin-login"} className={styles.loginSection}>
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"70vh"}
        >
          <Stack
            minWidth={400}
            spacing={4}
            sx={{
              background: "var(--white)",
              padding: 4,
              borderRadius: "var(--high-rounded)",
              boxShadow: "var(--low-shadow)",
            }}
          >
            <h4>Admin Login</h4>
            <AdminLoginRegistration />
          </Stack>
        </Box>
      </Container>
    </section>
  );
}
