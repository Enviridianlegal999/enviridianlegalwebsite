import { Box, Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPinTimeFill } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";

import Container from "@/components/layout/Container";

import {
  companyAddress,
  companyAddressGoogleMapsURL,
  companyEmail,
  companyOfficeTiming,
  companyPhone,
  companyWorkDays,
  specialAppointment,
} from "@/constants/company";

const ContactPageDetails = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.detailsSection}>
      <Container>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={2} alignItems={"center"}>
                <MdEmail color="var(--primary)" size={64} />
                <h6>Email</h6>
                <p>{companyEmail}</p>
              </Stack>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={2} alignItems={"center"}>
                <FaPhoneAlt color="var(--primary)" size={64} />
                <h6>Phone</h6>
                {/* <p>{companyPhone}</p> */}
              </Stack>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={2} alignItems={"center"}>
                <RiMapPinTimeFill color="var(--primary)" size={64} />
                <h6>Office</h6>
                <p>{companyWorkDays}</p>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Stack alignItems={"center"} spacing={4} mt={10}>
            <FaBalanceScale color="var(--primary)" size={64} />
            <h6>Address</h6>
            <p>{companyAddress}</p>
            <p>{companyOfficeTiming}</p>
            <p>{specialAppointment}</p>
          </Stack>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Box mt={4}>
            <iframe
              src={companyAddressGoogleMapsURL}
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactPageDetails;
