import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";

import mumbai from "../../../../public/assets/images/mumbai.webp";
import delhi from "../../../../public/assets/images/delhi.webp";
import gurugram from "../../../../public/assets/images/gurugram.webp";
import bengaluru from "../../../../public/assets/images/bengaluru.webp";
import lucknow from "../../../../public/assets/images/lucknow.webp";
import jaipur from "../../../../public/assets/images/jaipur.webp";
import kochi from "../../../../public/assets/images/kochi.webp";
import chennai from "../../../../public/assets/images/chennai.webp";
import singapore from "../../../../public/assets/images/singapore.webp";
import australia from "../../../../public/assets/images/australia.webp";
import sweden from "../../../../public/assets/images/sweden.webp";
// Photo by <a href="https://unsplash.com/@sidsaxena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sid Saxena</a> on <a href="https://unsplash.com/photos/brown-bridge-during-golden-hour-tsXADt9ldio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@junaidahmadansari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Junaid Ahmad Ansari</a> on <a href="https://unsplash.com/photos/white-dome-building-near-palm-trees-during-daytime-9WP-NVh2d6U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@vishu_since_2000?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vishal Kumar</a> on <a href="https://unsplash.com/photos/a-very-tall-building-with-a-sky-background-iFDByklLsdE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jay_5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jayanth Muppaneni</a> on <a href="https://unsplash.com/photos/a-large-building-with-a-clock-on-the-top-of-it-y96JVdGu7XU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@fotuwaala?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sourabh Pandey</a> on <a href="https://unsplash.com/photos/a-very-large-building-with-a-massive-entrance-EOm5YV73zns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@msaditya9?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aditya Siva</a> on <a href="https://unsplash.com/photos/man-in-white-and-green-long-sleeve-shirt-standing-near-brown-concrete-building-during-daytime-6rDbvXzIVpQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@sd4ssm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">gaurav kumar</a> on <a href="https://unsplash.com/photos/white-concrete-building-during-daytime-7Svnv0HrMgw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@siby_cd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SIBY</a> on <a href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-QXIBCvvA_jc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@unfilteredkopi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Swapnil Bapat</a> on <a href="https://unsplash.com/photos/a-large-body-of-water-with-a-city-in-the-background-sJ7pYyJFyuA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jonflobrant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Flobrant</a> on <a href="https://unsplash.com/photos/scenery-of-a-body-of-water-beside-a-city-jxfe3orC4G8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@jonflobrant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Flobrant</a> on <a href="https://unsplash.com/photos/scenery-of-a-body-of-water-beside-a-city-jxfe3orC4G8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                       

const AboutPageCities = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.teamSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Our Proximity"} />
        <Stack spacing={4} mt={4}>
          <Stack spacing={2} alignItems={"center"}>
            <h2>Cities We Have Served</h2>
            <p>
              Serving clients Pan-India, with a strong presence in the following
              cities:
            </p>
          </Stack>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={mumbai}
                    alt={"Mumbai"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Mumbai</h4>
                    {/* <p>100+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={delhi}
                    alt={"Delhi"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Delhi</h4>
                    {/* <p>500+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={lucknow}
                    alt={"Lucknow"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Lucknow</h4>
                    {/* <p>500+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={jaipur}
                    alt={"Jaipur"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Jaipur</h4>
                    {/* <p>500+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={kochi}
                    alt={"Kochi"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Kochi</h4>
                    {/* <p>500+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={chennai}
                    alt={"Chennai"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Chennai</h4>
                    {/* <p>500+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              {/* <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={bengaluru}
                    alt={"Bengaluru"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Bengaluru</h4>
                    <p>20+ Cases</p>
                  </Stack>
                </Box>
              </Grid> */}
              {/* <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "250px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={gurugram}
                    alt={"Gurugram"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Gurugram</h4>
                    <p>150+ Cases</p>
                  </Stack>
                </Box>
              </Grid> */}
            </Grid>
          </motion.div>
        </Stack>
        <Stack spacing={4} mt={4}>
          <Stack spacing={2} alignItems={"center"}>
            <h2>International Partnerships</h2>
            <p>
              In addition, we collaborate with partner firms internationally.
            </p>
          </Stack>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6, lg: 4 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "300px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={singapore}
                    alt={"Singapore"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Singapore</h4>
                    {/* <p>100+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 4 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "300px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={australia}
                    alt={"Australia"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Australia</h4>
                    {/* <p>100+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, lg: 4 }}
                className={styles.teamCard}
                position={"relative"}
              >
                <Box
                  sx={{
                    height: "250px",
                    width: "300px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    position: "relative",
                    borderRadius: "var(--high-rounded)",
                    overflow: "clip",
                  }}
                >
                  <Image
                    src={sweden}
                    alt={"Sweden"}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: "20px",
                  }}
                >
                  <Stack spacing={2}>
                    <h4>Sweden</h4>
                    {/* <p>100+ Cases</p> */}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
};

export default AboutPageCities;
