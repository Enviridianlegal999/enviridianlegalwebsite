"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, IconButton, Stack } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

import { companyShortBio } from "@/constants/company";
import { headerNavItems } from "@/constants/links";

import Container from "@/components/layout/Container";
import DesktopNavbar from "@/components/layout/DesktopNavbar";
import TabletNavbar from "@/components/layout/TabletNavbar";
import CallUs from "@/components/popups/CallUs";

import enviridianCompanyLogo from "../../../public/assets/company/enviridian-logo.svg";

import styles from "@/styles/components/Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReadyToCallPopup, setIsReadyToCallPopup] = useState(false);

  const SCROLL_NUDGE = 30; // ~ one mouse wheel tick

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setOpen((prev) => {
      if (!prev) {
        // menu opening → subtle real scroll
        window.scrollBy({
          top: SCROLL_NUDGE,
          behavior: "smooth",
        });
      }
      return !prev;
    });
  };

  return (
    <>
      <header className={`${styles.header}`}>
        <Container
          className={`${
            isScrolled ? styles.headerCurved : styles.headerNormal
          } ${open ? styles.headerMobileMenuOpenCurve : ""}`}
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
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
              >
                <TabletNavbar styles={styles} />
                <CallUs
                  open={isReadyToCallPopup}
                  setOpen={setIsReadyToCallPopup}
                />
              </Stack>
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={5}
              >
                <DesktopNavbar styles={styles} />
                <CallUs
                  open={isReadyToCallPopup}
                  setOpen={setIsReadyToCallPopup}
                />
              </Stack>
            </Box>
          </nav>
          {/* Mobile Menu */}
          {open ? (
            <nav>
              <Stack
                alignItems={"center"}
                marginTop={4}
                spacing={4}
                display={{ xs: "flex", sm: "none" }}
              >
                <ul className={styles.navLinks}>
                  {headerNavItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <CallUs
                  open={isReadyToCallPopup}
                  setOpen={setIsReadyToCallPopup}
                />
              </Stack>
            </nav>
          ) : null}
          {/* Mobile Menu Button */}
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
                transform: "translateX(-50%) translateY(-50%)",
                background: "var(--white)",
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
    </>
  );
};

export default Header;
