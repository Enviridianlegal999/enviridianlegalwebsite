"use client";

import { useState } from "react";

import * as motion from "motion/react-client";

import { Grid, Rating, Stack } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import Container from "@/components/layout/Container";
import StackedCarousel from "@/components/ui/StackedCarousel";

import rakesh from "../../../../public/assets/images/rakesh.webp";
import neha from "../../../../public/assets/images/neha.webp";
import abdul from "../../../../public/assets/images/abdul.webp";
import garima from "../../../../public/assets/images/garima.webp";
import anand from "../../../../public/assets/images/anand.webp";

const testimonials = [
  {
    id: 1,
    title: "Rakesh Sharma",
    testimony:
      "I was really stressed about my property dispute, but the lawyers explained everything clearly and handled my case professionally. I felt supported throughout the process and got a fair resolution.",
    rating: 5,
    image: rakesh,
  },
  {
    id: 2,
    title: "Neha Verma",
    testimony:
      "The legal team was very patient and understanding. They kept me informed at every step and made a complicated legal issue much easier to deal with. I truly appreciate their guidance.",
    rating: 4,
    image: neha,
  },
  {
    id: 3,
    title: "Abdul Khan",
    testimony:
      "I am very satisfied with the legal advice I received. The lawyers were honest, responsive, and truly cared about my case. I would definitely recommend them to anyone needing legal help.",
    rating: 5,
    image: abdul,
  },
  {
    id: 4,
    title: "Garima Shelar",
    testimony:
      "Professional, knowledgeable, and incredibly thorough. The team took the time to explain every detail of my contract dispute in plain English, which gave me so much peace of mind. I couldn't have asked for better representation.",
    rating: 5,
    image: garima,
  },
  {
    id: 5,
    title: "Anand Lobo",
    testimony:
      "Exceptional service from start to finish. They were always available to answer my questions and kept me updated throughout the entire process. It’s rare to find a firm that combines high-level expertise with such a personal touch.",
    rating: 4,
    image: anand,
  },
];

const HomePageTestimonials = ({ sectionID, styles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id={sectionID} className={styles.testimonialsSection}>
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }} py={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <StackedCarousel activeIndex={activeIndex} cards={testimonials} />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display={"flex"}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack justifyContent={"space-around"} spacing={4}>
                <h2>{testimonials[activeIndex].title}</h2>
                <p>{testimonials[activeIndex].testimony}</p>
                <Rating value={testimonials[activeIndex].rating} readOnly />
                <Stack direction={"row"} spacing={2}>
                  <button className={styles.testimonialsButton} onClick={prev}>
                    <WestRoundedIcon />
                  </button>
                  <button className={styles.testimonialsButton} onClick={next}>
                    <EastRoundedIcon />
                  </button>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomePageTestimonials;
