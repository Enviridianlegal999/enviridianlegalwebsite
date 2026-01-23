import { Grid, Stack } from "@mui/material";

import * as motion from "motion/react-client";

import Container from "@/components/layout/Container";
import SectionBookMark from "@/components/layout/SectionBookMark";
import ServicesCard from "@/components/ui/ServicesCard";

import corporateAndCommercial from "../../../../public/assets/images/corporate-and-commercial.webp";
import litigationAndDispute from "../../../../public/assets/images/litigation-and-dispute.webp";
import publishingAndMedia from "../../../../public/assets/images/publishing-and-media.webp";
import intellectualProperty from "../../../../public/assets/images/intellectual-property.webp";
import realEstateAndProperty from "../../../../public/assets/images/real-estate-and-property.webp";
import arbitrationAndMediation from "../../../../public/assets/images/arbitration-and-mediation.webp";
import advisoryAndCompliance from "../../../../public/assets/images/advisory-and-compliance.webp";
import constitutionalService from "../../../../public/assets/images/constitutional-service.webp";

const HomePageServices = ({ sectionID, styles }) => {
  return (
    <section id={sectionID} className={styles.servicesSection}>
      {/* Content for the hero section */}
      <Container>
        <SectionBookMark title={"Our Services"} />
        <Stack spacing={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>Expert Legal Solutions</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={2}>
              <ServicesCard
                styles={styles}
                image={corporateAndCommercial}
                altText={"Corporate And Commercial Laws"}
                serviceTitle={"Corporate & Commercial Law"}
                serviceDescription={
                  "We advise on structuring, transactions, contracts, and corporate governance, assisting clients from incorporation through complex mergers, acquisitions, and compliance matters."
                }
              />
              <ServicesCard
                styles={styles}
                image={litigationAndDispute}
                altText={"Litigation And Dispute Resolution"}
                serviceTitle={"Litigation & Dispute Resolution"}
                serviceDescription={
                  "Our team represents clients before all major courts and tribunals, including High Courts and the Supreme Court of India, offering strategic and pragmatic advocacy in both civil and commercial disputes."
                }
              />
              <ServicesCard
                styles={styles}
                image={publishingAndMedia}
                altText={"Media and Entertainment Law"}
                serviceTitle={"Media and Entertainment Law"}
                serviceDescription={
                  "We help content-led businesses achieve commercial outcomes with legal certainty, combining industry knowledge with sharp and practical risk management."
                }
              />
              <ServicesCard
                styles={styles}
                image={intellectualProperty}
                altText={"Intellectual Property"}
                serviceTitle={"Intellectual Property"}
                serviceDescription={
                  "Our services include drafting, licensing, and protecting copyrights and related rights, with particular expertise in content, literary works, and digital publications."
                }
              />
              <ServicesCard
                styles={styles}
                image={realEstateAndProperty}
                altText={"Real Estate & Property"}
                serviceTitle={"Real Estate & Property"}
                serviceDescription={
                  "We assist with property due diligence, conveyancing, leasing, and title disputes, ensuring every transaction is secure and compliant with applicable law."
                }
              />
              <ServicesCard
                styles={styles}
                image={arbitrationAndMediation}
                altText={"Arbitration & Mediation"}
                serviceTitle={"Arbitration & Mediation"}
                serviceDescription={
                  "We offer end-to-end representation in domestic and international arbitrations, with an emphasis on efficient, cost-effective resolution of disputes."
                }
              />
              <ServicesCard
                styles={styles}
                image={advisoryAndCompliance}
                altText={"Advisory & Compliance"}
                serviceTitle={"Advisory & Compliance"}
                serviceDescription={
                  "We offer strategic counsel on legal frameworks, statutory obligations, and institutional policy, helping clients navigate complex compliance landscapes with clarity."
                }
              />
              <ServicesCard
                styles={styles}
                image={constitutionalService}
                altText={"Constitutional Law"}
                serviceTitle={"Constitutional Law"}
                serviceDescription={
                  "Our firm advises and represents clients in matters involving constitutional interpretation, fundamental rights, administrative law, and public interest litigation before the Supreme Court and High Courts."
                }
              />
            </Grid>
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
};

export default HomePageServices;
