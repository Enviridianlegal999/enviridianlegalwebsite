"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, Button, Stack } from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

import { companyShortBio } from "@/constants/company";

import Container from "@/components/layout/Container";
import DesktopNavbar from "@/components/layout/DesktopNavbar";
// import TabletNavbar from "@/components/layout/TabletNavbar";
// import MobileNavbar from "@/components/layout/MobileNavbar";

import enviridianCompanyLogo from "../../../public/assets/company/enviridian-logo.svg";

import styles from "@/styles/components/Header.module.css";
import { blackOutlinedButtonStyle } from "@/styles/mui/mui-custom-component";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll based glass effect on header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header}`}>
        <Container
          className={`${isScrolled ? styles.headerCurved : styles.headerNormal}`}
        >
          <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
              <Image
                src={enviridianCompanyLogo}
                alt={companyShortBio}
                width={160}
                loading="eager"
              />
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block", lg: "none" } }}>
              {/* <TabletNavbar width={300} /> */}
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={5}
              >
                <DesktopNavbar />
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={blackOutlinedButtonStyle}
                  endIcon={<CallRoundedIcon />}
                >
                  Call Us
                </Button>
              </Stack>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              {/* <MobileNavbar /> */}
            </Box>
          </nav>
        </Container>
      </header>
      {/* Offset 145 header height, because header is position fixed*/}
      {/* <Box height={145}></Box> */}
    </>
  );
};

export default Header;
