import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Offers } from "@/components/Offers";
import { Contact } from "@/components/Contact";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const title = "الروبي جيم | جيم مصري بأجهزة قوية وبيئة محفزة";
const description =
  "الروبي جيم مش مجرد جيم... دي عيلة. أجهزة قوية، بيئة محفزة، دعم مستمر وعروض اشتراك مميزة. ابدأ رحلتك وابني النسخة الأقوى منك.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <Navbar />
      <Hero />
      <Welcome />
      <Features />
      <Gallery />
      <Offers />
      <Contact />
      <LocationSection />
      <Footer />
    </motion.main>
  );
}
