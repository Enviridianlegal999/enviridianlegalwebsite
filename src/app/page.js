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

export default function Home() {
  return (
    <>
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
      <HomePageTestimonials sectionID={"testimonials"} styles={styles} />
      <HomePageBlogPreview sectionID={"blog-preview"} styles={styles} />
      <HomePageCTA sectionID={"homepage-cta"} styles={styles} />
    </>
  );
}
