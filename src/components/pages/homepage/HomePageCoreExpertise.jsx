import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";
import ChipButton from "@/components/ui/ChipButton";

import advisoryAndOpinionWriting from "../../../../public/assets/images/advisory-and-opinion-writing.png";
import constitutionalAndAdministrativeLaw from "../../../../public/assets/images/constitutional-and-administrative-law.png";
import ipAndPublicInterestDisputes from "../../../../public/assets/images/ip-and-public-interest-disputes.png";
import serviceAndTribunalLaw from "../../../../public/assets/images/service-and-tribunal-law.png";
import scale from "../../../../public/assets/images/scale.png";

const HomePageCoreExpertise = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.coreExpertiseSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Core Expertise"} />
        <Box my={4}>
          <Grid container spacing={2}>
            <ChipButton buttonTitle={"Constitutional/Writs"} />
            <ChipButton buttonTitle={"Service & Employment Law"} />
            <ChipButton buttonTitle={"IP & Regulatory Interface"} />
          </Grid>
        </Box>
        <Grid container alignItems={"stretch"} my={2} spacing={2}>
          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            className={styles.coreExpertiseCard}
          >
            <Stack
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              className={styles.coreExpertiseCardContentStack}
            >
              <Box height={256} width={256} position={"relative"}>
                <Image
                  src={constitutionalAndAdministrativeLaw}
                  alt={"Practice In Supreme Court Of India"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <span>Constitutional & Administrative Law</span>
              <p>
                Rights protection, public law litigation, regulatory oversight.
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            className={styles.coreExpertiseCard}
          >
            <Stack
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              className={styles.coreExpertiseCardContentStack}
            >
              <Box height={256} width={256} position={"relative"}>
                <Image
                  src={serviceAndTribunalLaw}
                  alt={"Practice In High Court Of India"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <span>Service & Tribunal Law</span>
              <p>
                Employment, departmental inquiries, promotions, seniority &
                pensions.
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            className={styles.coreExpertiseCard}
          >
            <Stack
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              className={styles.coreExpertiseCardContentStack}
            >
              <Box height={256} width={256} position={"relative"}>
                <Image
                  src={ipAndPublicInterestDisputes}
                  alt={"Matters related to public interest"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <span>IP & Public Interest Disputes</span>
              <p>
                Trademark, copyright and policy-driven IP work involving public
                law.
              </p>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            className={styles.coreExpertiseCard}
          >
            <Stack
              spacing={2}
              alignItems={"center"}
              textAlign={"center"}
              className={styles.coreExpertiseCardContentStack}
            >
              <Box height={256} width={256} position={"relative"}>
                <Image
                  src={advisoryAndOpinionWriting}
                  alt={"Regulatory matters and legal regulations"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <span>Advisory & Opinion Writing</span>
              <p>
                Legal opinions on constitutional compliance, public contracts,
                and regulatory frameworks.
              </p>
            </Stack>
          </Grid>
        </Grid>
        <Stack alignItems={"center"} spacing={2}>
          <Box height={30} width={30} position={"relative"}>
            <Image
              src={scale}
              alt={"Scale a symbol of law"}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ height: 30, borderLeft: "2px solid var(--black)" }} />
          <span className={styles.lawFirmNote}>
            We approach every case through a constitutional lens - ensuring
            fairness, accountability, and long-term impact.
          </span>
        </Stack>
      </Container>
    </section>
  );
};

export default HomePageCoreExpertise;
