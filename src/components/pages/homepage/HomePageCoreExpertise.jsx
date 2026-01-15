import Image from "next/image";
import { Box, Grid, Stack } from "@mui/material";
import { FaBalanceScale } from "react-icons/fa";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";
import ChipButton from "@/components/ui/ChipButton";

import advisoryAndOpinionWriting from "../../../../public/assets/images/advisory-and-opinion-writing.webp";
import constitutionalAndAdministrativeLaw from "../../../../public/assets/images/constitutional-and-administrative-law.webp";
import ipAndPublicInterestDisputes from "../../../../public/assets/images/ip-and-public-interest-disputes.webp";
import serviceAndTribunalLaw from "../../../../public/assets/images/service-and-tribunal-law.webp";

const HomePageCoreExpertise = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.coreExpertiseSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Core Expertise"} />
        <Box my={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={2}>
              <ChipButton buttonTitle={"Constitutional/Writs"} />
              <ChipButton buttonTitle={"Service & Employment Law"} />
              <ChipButton buttonTitle={"IP & Regulatory Interface"} />
            </Grid>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
                    alt={"Constitutional And Administrative Laws"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <span>Constitutional & Administrative Law</span>
                <p>
                  Rights protection, public law litigation, regulatory
                  oversight.
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
                    alt={"Service And Tribunal Laws"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    alt={"IP And Public Interest Disputes"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <span>IP & Public Interest Disputes</span>
                <p>
                  Trademark, copyright and policy-driven IP work involving
                  public law.
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
                    alt={"Advisory And Opinion Writing"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Stack alignItems={"center"} spacing={2}>
            <FaBalanceScale color="var(--primary)" size={32} />
            <Box sx={{ height: 30, borderLeft: "2px solid var(--black)" }} />
            <span className={styles.lawFirmNote}>
              We approach every case through a constitutional lens - ensuring
              fairness, accountability, and long-term impact.
            </span>
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomePageCoreExpertise;
