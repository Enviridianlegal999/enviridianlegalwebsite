import { Grid, Stack } from "@mui/material";

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
            <Stack spacing={2} alignItems={"center"}>
              <MdEmail color="var(--primary)" size={64} />
              <h6>Email</h6>
              <p>{companyEmail}</p>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack spacing={2} alignItems={"center"}>
              <FaPhoneAlt color="var(--primary)" size={64} />
              <h6>Phone</h6>
              <p>{companyPhone}</p>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack spacing={2} alignItems={"center"}>
              <RiMapPinTimeFill color="var(--primary)" size={64} />
              <h6>Office</h6>
              <p>{companyWorkDays}</p>
            </Stack>
          </Grid>
        </Grid>
        <Stack alignItems={"center"} spacing={4} mt={10}>
          <FaBalanceScale color="var(--primary)" size={64} />
          <h6>Address</h6>
          <p>{companyAddress}</p>
          <p>{companyOfficeTiming}</p>
          <p>{specialAppointment}</p>
          <iframe
            src={companyAddressGoogleMapsURL}
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </section>
  );
};

export default ContactPageDetails;
