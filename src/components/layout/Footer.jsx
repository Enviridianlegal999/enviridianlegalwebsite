"use client";

import Link from "next/link";
import Image from "next/image";

import { Divider, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { socialLinks } from "@/constants/links";
import {
  companyAddress,
  companyEmail,
  companyOfficeTiming,
  companyPhone,
  companyShortBio,
  companyWorkDays,
  specialAppointment,
} from "@/constants/company";

import enviridianCompanyLogo from "../../../public/assets/company/enviridian-logo.svg";

import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={{ xs: 8, md: 2, lg: 4 }}>
          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <Link href="/" className={styles.logo}>
                <Image
                  src={enviridianCompanyLogo}
                  alt={companyShortBio}
                  width={180}
                  className={styles.footerLogo}
                />
              </Link>
              <h4>Enviridian Legal (Law Firm)</h4>
              <p>{companyAddress}</p>
              <Stack
                direction={"row"}
                justifyContent={{ xs: "center", md: "left" }}
                spacing={2}
              >
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 2 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Quick Links</h5>
              <Stack spacing={1}>
                <Link href="/">Home</Link>
                <Link href="/about">Chamber</Link>
                <Link href="/practice-area">Practice</Link>
                <Link href="/process-and-approach">Process</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Insights</Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Services</h5>
              <Stack spacing={1}>
                <Link href="/practice-areas">Constitutional Law</Link>
                <Link href="/practice-areas">Corporate & Commercial Law</Link>
                <Link href="/practice-areas">
                  Litigation & Dispute Resolution
                </Link>
                <Link href="/practice-areas">Publishing & Media Law</Link>
                <Link href="/practice-areas">Real Estate & Property</Link>
                <Link href="/practice-areas">Arbitration & Mediation</Link>
                <Link href="/practice-areas">
                  Regulatory & Compliance Advisory
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6, lg: 3 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Stack spacing={4}>
              <h5>Contact</h5>
              <Stack spacing={1}>
                {/* <a href={`tel:${companyPhone}`}>{companyPhone}</a> */}
                <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
              </Stack>
              <Stack spacing={1}>
                <p>{companyWorkDays}</p>
                <p>{companyOfficeTiming}</p>
              </Stack>
              <p>{specialAppointment}</p>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <p>© {currentYear} Enviridian Legal All rights reserved</p>
          <Stack spacing={1} direction={"row"}>
            <Link href="/terms-and-conditions" className={styles.tandc}>
              Terms & Conditions
            </Link>
            <Divider orientation="vertical" />
            <Link href="/privacy-policy" className={styles.tandc}>
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
