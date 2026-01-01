"use client";

import Link from "next/link";
import Image from "next/image";

import { Divider, Grid, Stack } from "@mui/material";

import Container from "@/components/layout/Container";

import { socialLinks } from "@/constants/links";
import { companyShortBio } from "@/constants/company";

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
              <p>B 89, Greater Kailash 1,New Delhi 110048</p>
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
                <Link href="/process">Process</Link>
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
                <Link href="/services">Constitutional Law</Link>
                <Link href="/services">Corporate & Commercial Law</Link>
                <Link href="/services">Litigation & Dispute Resolution</Link>
                <Link href="/services">Publishing & Media Law</Link>
                <Link href="/services">Real Estate & Property</Link>
                <Link href="/services">Arbitration & Mediation</Link>
                <Link href="/services">Regulatory & Compliance Advisory</Link>
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
                <a href={`tel:+91987654321`}>+91987654321</a>
                <a href={`mailto:hello@enviridian.com`}>hello@enviridian.com</a>
              </Stack>
              <Stack spacing={1}>
                <p>Monday – Friday</p>
                <p>9:30 AM to 7.30 PM</p>
              </Stack>
              <p>Saturday, by appointment only.</p>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <p>© {currentYear} Enviridian Legal All rights reserved</p>
          <Stack spacing={1} direction={"row"}>
            <Link href="/" className={styles.tandc}>
              Terms & Conditions
            </Link>
            <Divider orientation="vertical" />
            <Link href="/" className={styles.tandc}>
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
