/**
 * Image assets - Vite processes these for optimization.
 * Import paths use imagetools directives for responsive/optimized output.
 */

// NavBar logo
import navBarLogo from "../assets/navbar/small-td-logo.webp?w=88&format=webp&quality=85";

// Hero
import heroLogo from "../assets/hero/hero-bg-logo.webp?w=800&format=webp&quality=85";
import heroBg from "../assets/hero/td-hero-bg.webp?w=1920&format=webp&quality=80";

// Services
import aseLogo from "../assets/services/ASE-logo.webp?w=360&format=webp&quality=85";

// Photo gallery
import engineImg from "../assets/photogallery/engine.webp?w=1024&format=webp&quality=82";
import engineSrcSet from "../assets/photogallery/engine.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import subframeImg from "../assets/photogallery/subframe.webp?w=1024&format=webp&quality=82";
import subframeSrcSet from "../assets/photogallery/subframe.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import crateEngineImg from "../assets/photogallery/crate-engine.webp?w=1024&format=webp&quality=82";
import crateEngineSrcSet from "../assets/photogallery/crate-engine.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import bodyRepairedImg from "../assets/photogallery/bodywork-repaired.webp?w=1024&format=webp&quality=82";
import bodyRepairedSrcSet from "../assets/photogallery/bodywork-repaired.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import bodyRepaired2Img from "../assets/photogallery/bodywork-repaired2.webp?w=1024&format=webp&quality=82";
import bodyRepaired2SrcSet from "../assets/photogallery/bodywork-repaired2.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import bodyDamagedImg from "../assets/photogallery/bodywork-damaged.webp?w=1024&format=webp&quality=82";
import bodyDamagedSrcSet from "../assets/photogallery/bodywork-damaged.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import bodyDamaged2Img from "../assets/photogallery/bodywork-damaged2.webp?w=1024&format=webp&quality=82";
import bodyDamaged2SrcSet from "../assets/photogallery/bodywork-damaged2.webp?w=480;768;1024&format=webp&quality=82&as=srcset";
import engineRemovalImg from "../assets/photogallery/engine-removal.webp?w=1024&format=webp&quality=82";
import engineRemovalSrcSet from "../assets/photogallery/engine-removal.webp?w=480;768;1024&format=webp&quality=82&as=srcset";

export const assets = {
  navBar: { logo: navBarLogo },
  hero: { logo: heroLogo, bgLogo: heroBg },
  services: { aseLogo },
  photoGallery: [
    { src: engineImg, srcSet: engineSrcSet },
    { src: subframeImg, srcSet: subframeSrcSet },
    { src: crateEngineImg, srcSet: crateEngineSrcSet },
    { src: bodyRepairedImg, srcSet: bodyRepairedSrcSet },
    { src: bodyRepaired2Img, srcSet: bodyRepaired2SrcSet },
    { src: bodyDamagedImg, srcSet: bodyDamagedSrcSet },
    { src: bodyDamaged2Img, srcSet: bodyDamaged2SrcSet },
    { src: engineRemovalImg, srcSet: engineRemovalSrcSet },
  ],
} as const;
