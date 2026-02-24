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
import { contactUs } from "~/content";

export const meta: MetaFunction = () => {
  const url = `${siteMeta.siteUrl}/`;
  const ogImage = `${siteMeta.siteUrl}${siteMeta.ogImage}`;
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "TD Auto Repair",
    image: ogImage,
    url: siteMeta.siteUrl,
    telephone: "+1-718-972-6620",
    email: contactUs.leftSection.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "896 4th Avenue",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11232",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.6562978,
      longitude: -74.0028134,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
    ],
    priceRange: "$$",
  };
  return [
    { title: siteMeta.title },
    { name: "description", content: siteMeta.description },
    { link: { rel: "canonical", href: url } },
    { property: "og:type", content: "website" },
    { property: "og:title", content: siteMeta.title },
    { property: "og:description", content: siteMeta.description },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: "TD Auto Repair" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteMeta.title },
    { name: "twitter:description", content: siteMeta.description },
    { name: "twitter:image", content: ogImage },
    { "script:ld+json": localBusiness },
  ];
};

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
