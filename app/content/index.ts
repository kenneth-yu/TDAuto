/**
 * Composed page data - content + assets.
 * Single entry point for all section data.
 */

import {
  siteMeta,
  navBar,
  hero as heroContent,
  services as servicesContent,
  chooseUs,
  aboutUs,
  reviews,
  photoGallery as photoGalleryContent,
  contactUs,
  mapConfig,
  footer,
} from "./content";
import { assets } from "./assets";

export { siteMeta, mapConfig };
export { assets };

export const gMapUrl = mapConfig.directionsUrl;

export const navBarData = {
  logo: assets.navBar.logo,
  logoText: navBar.logoText,
  links: navBar.links,
  contactInfo: navBar.contactInfo,
  address: navBar.address,
};

export const heroData = {
  logo: assets.hero.logo,
  bgLogo: assets.hero.bgLogo,
  logoAlt: heroContent.logoAlt,
};

export const servicesData = {
  heading: servicesContent.heading,
  logo: assets.services.aseLogo,
  logoAlt: servicesContent.logoAlt,
  serviceOptions: servicesContent.serviceOptions,
};

export const chooseUsData = {
  heading: chooseUs.heading,
  talkingPoints: chooseUs.talkingPoints,
};

export const aboutUsData = {
  heading: aboutUs.heading,
  body: aboutUs.body,
  buttonText: aboutUs.buttonText,
};

export const reviewsData = {
  heading: reviews.heading,
  reviews: reviews.reviews,
};

export const photoGalleryData = {
  heading: photoGalleryContent.heading,
  images: assets.photoGallery.map((img, i) => ({
    src: img.src,
    srcSet: img.srcSet,
    altText: photoGalleryContent.imageAlts[i],
  })),
};

export const contactUsData = {
  leftSection: contactUs.leftSection,
  rightSection: contactUs.rightSection,
};

export const footerData = {
  copyright: footer.copyright,
};
