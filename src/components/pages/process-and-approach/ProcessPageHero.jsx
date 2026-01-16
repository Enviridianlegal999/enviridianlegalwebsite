import { Grid } from "@mui/material";

import Container from "@/components/layout/Container";

const ProcessPageHero = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.heroImageSection}>
      {/* Video Overlay (optional - for better text contrast) */}
      <div className={styles.heroOverlay}></div>

      <Container>
        <div className={styles.heroContent}>
          <Grid
            container
            minHeight={"var(--half-viewport-height)"}
            marginTop={{
              xs: 4,
              sm: 0,
              lg: 0,
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid size={12} maxWidth={"fit-content"}>
              <h1
                className={`${styles.heroTitle} ${styles.processHeroTitle}`}
              >
                Our Process
              </h1>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default ProcessPageHero;
