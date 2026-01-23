import HomePageHero from "@/components/pages/homepage/HomePageHero";
import HomePageCoreExpertise from "@/components/pages/homepage/HomePageCoreExpertise";
import HomePageSpecialisation from "@/components/pages/homepage/HomePageSpecialisation";
import HomePageServices from "@/components/pages/homepage/HomePageServices";
import FloatingSection from "@/components/ui/FloatingSection";
import FloatingValues from "@/components/pages/homepage/FloatingValues";
import HomePageApproach from "@/components/pages/homepage/HomePageApproach";
import HomePageTestimonials from "@/components/pages/homepage/HomePageTestimonials";
import HomePageBlogPreview from "@/components/pages/homepage/HomePageBlogPreview";
import HomePageCTA from "@/components/pages/homepage/HomePageCTA";

import styles from "@/styles/pages/HomePage.module.css";

// TODO add telephone and email when approved
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Enviridian Legal",
  image:
    "https://enviridianlegal.com/assets/company/enviridian-logo-long-png.png",
  "@id": "https://enviridianlegal.com",
  url: "https://enviridianlegal.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B 89, Greater Kailash 1",
    addressLocality: "New Delhi",
    postalCode: "110048",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.556434,
    longitude: 77.23244,
  },
  areaServed: {
    "@type": "State",
    name: "Delhi NCR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:30",
    closes: "19:30",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageHero sectionID={"hero"} styles={styles} />
      <HomePageCoreExpertise sectionID={"core-expertise"} styles={styles} />
      <HomePageSpecialisation sectionID={"specialisation"} styles={styles} />
      <HomePageServices sectionID={"services"} styles={styles} />
      <FloatingSection sectionID={"values"}>
        <FloatingValues
          bgImageUrls={[
            "/assets/images/integrity.webp",
            "/assets/images/diligence.webp",
            "/assets/images/clarity.webp",
            "/assets/images/commitment.webp",
          ]}
          valueNames={["Integrity", "Diligence", "Clarity", "Commitment"]}
        />
      </FloatingSection>
      <HomePageApproach sectionID={"approach"} styles={styles} />
      {/* <HomePageTestimonials sectionID={"testimonials"} styles={styles} /> */}
      <HomePageBlogPreview sectionID={"blog-preview"} styles={styles} />
      <HomePageCTA sectionID={"homepage-cta"} styles={styles} />
    </>
  );
}
