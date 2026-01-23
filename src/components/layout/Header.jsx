"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Box, IconButton, Stack } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";

import { companyShortBio } from "@/constants/company";
import { headerNavItems } from "@/constants/links";

import Container from "@/components/layout/Container";
import DesktopNavbar from "@/components/layout/DesktopNavbar";
import TabletNavbar from "@/components/layout/TabletNavbar";
import GetFreeConsultation from "@/components/popups/GetFreeConsultation";

// import enviridianCompanyLogo from "../../../public/assets/company/enviridian-logo.svg";
import enviridianCompanyLogo from "../../../public/assets/company/enviridian-logo-long-svg.svg";

import styles from "@/styles/components/Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGetFreeConsultation, setIsGetFreeConsultation] = useState(false);

  const SCROLL_NUDGE = 30;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => {
      if (!prev) {
        window.scrollBy({
          top: SCROLL_NUDGE,
          behavior: "smooth",
        });
      }
      return !prev;
    });
  };

  // Helper function to close the menu
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Container
        className={`${
          isScrolled ? styles.headerCurved : styles.headerNormal
        } ${open ? styles.headerMobileMenuOpenCurve : ""}`}
      >
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src={enviridianCompanyLogo}
              alt={companyShortBio}
              width={160}
              loading="eager"
            />
          </Link>

          {/* Tablet/Mid-size View */}
          <Box sx={{ display: { xs: "none", sm: "block", lg: "none" } }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <TabletNavbar styles={styles} />
              <GetFreeConsultation
                variant="contained"
                color="secondary"
                boxTitle="Get Quick Help"
                title="Quick Help"
                open={isGetFreeConsultation}
                setOpen={setIsGetFreeConsultation}
                btnEndIcon={<ElectricBoltRoundedIcon />}
              />
            </Stack>
          </Box>

          {/* Desktop View */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <DesktopNavbar styles={styles} />
              <GetFreeConsultation
                variant="contained"
                color="secondary"
                boxTitle="Get Quick Help"
                title="Quick Help"
                open={isGetFreeConsultation}
                setOpen={setIsGetFreeConsultation}
                btnEndIcon={<ElectricBoltRoundedIcon />}
              />
            </Stack>
          </Box>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <nav>
            <Stack
              alignItems="center"
              marginTop={4}
              spacing={4}
              display={{ xs: "flex", sm: "none" }}
            >
              <ul className={styles.navLinks}>
                {headerNavItems.map((item) => (
                  <li key={item.href}>
                    {/* Added onClick here to close menu when a link is clicked */}
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <GetFreeConsultation
                variant="contained"
                color="secondary"
                boxTitle="Get Quick Help"
                title="Quick Help"
                open={isGetFreeConsultation}
                setOpen={setIsGetFreeConsultation}
                btnEndIcon={<ElectricBoltRoundedIcon />}
              />
            </Stack>
          </nav>
        )}

        {/* Mobile Menu Toggle Button */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            textAlign: "center",
            marginTop: open ? 6 : 4,
            marginBottom: "-20px",
          }}
        >
          <IconButton
            size="small"
            sx={{
              border: "1px solid var(--grey-10)",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              background: "var(--white)",
              zIndex: "var(--z-index-header-mobile-menu-open-close-button",
              "&:hover": { background: "var(--white)" },
            }}
            onClick={handleMenu}
          >
            {open ? (
              <KeyboardDoubleArrowUpRoundedIcon
                fontSize="medium"
                sx={{ color: "var(--secondary)" }}
              />
            ) : (
              <KeyboardDoubleArrowDownRoundedIcon
                fontSize="medium"
                sx={{ color: "var(--secondary)" }}
              />
            )}
          </IconButton>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
