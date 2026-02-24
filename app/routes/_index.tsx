import type { LinksFunction, MetaFunction } from "react-router";
import { useState, useEffect } from "react";

import { NavBar } from "~/components/NavBar";
import { Hero } from "~/components/Hero";
import { Services } from "~/components/Services";
import { ChooseUs } from "~/components/ChooseUs";
import { AboutUs } from "~/components/AboutUs";
import { Reviews } from "~/components/Reviews";
import { PhotoGallery } from "~/components/PhotoGallery";
import { ContactUs } from "~/components/ContactUs";
import { Map } from "~/components/Map";
import { Footer } from "~/components/Footer";

import {
  siteMeta,
  navBarData,
  heroData,
  servicesData,
  chooseUsData,
  aboutUsData,
  reviewsData,
  photoGalleryData,
  contactUsData,
  footerData,
} from "~/content";

export const meta: MetaFunction = () => [
  { title: siteMeta.title },
  { name: "description", content: siteMeta.description },
];

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  },
];

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { scrollHeight } = document.documentElement;
      setShowScrollTop(scrollY + innerHeight >= scrollHeight - 100);
    };
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="app">
      <NavBar {...navBarData} />
      <Hero {...heroData} />
      <Services {...servicesData} />
      <ChooseUs {...chooseUsData} />
      <AboutUs {...aboutUsData} />
      <Reviews {...reviewsData} />
      <PhotoGallery {...photoGalleryData} />
      <ContactUs {...contactUsData} />
      <Map />
      <Footer {...footerData} />
      {showScrollTop && (
        <a
          href="#hero"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[9990] w-12 h-12 flex items-center justify-center rounded-full bg-[#4B5DB8] text-white hover:bg-[#3d4d9a] shadow-lg border-2 border-white transition-colors touch-manipulation"
        >
          <span className="material-symbols-outlined text-2xl text-white">keyboard_arrow_up</span>
        </a>
      )}
    </div>
  );
}
