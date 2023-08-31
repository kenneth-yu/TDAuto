import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "~/styles.css"

import { NavBar } from "~/components/NavBar";
import { Hero } from "~/components/Hero";
import { Services } from "~/components/Services";
import { ChooseUs } from "~/components/ChooseUs";
import { AboutUs } from "~/components/AboutUs";
import { Reviews } from "~/components/Reviews"
import { PhotoGallery } from "~/components/PhotoGallery";
import { ContactUs } from "~/components/ContactUs";
import { Map } from "~/components/Map"
import { Footer } from "~/components/Footer"

import { navBarFallbackData } from "../consts/copy/navBar"
import { heroFallbackData } from "../consts/copy/hero"
import { servicesFallBackData } from "../consts/copy/services"
import { chooseUsFallBackData } from "../consts/copy/chooseUs"
import { aboutUsFallBackData } from "../consts/copy/aboutUs"
import { reviewsFallBackData} from "../consts/copy/reviews"
import { photogalleryFallBackData } from "../consts/copy/photogallery"
import { contactUsFallBackData } from "../consts/copy/contactUs"

// import { fetchFromYelp } from '../../middleware/yelp'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "TD Auto Repair" },
    { name: "description", content: "T&D Auto Repair" },
  ];
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" },
  ];
}

// export async function loader() {
//   const yelpRes = await fetchFromYelp()
//   return json({yelpRes})
// }


export default function Index() {
  // const { yelpRes } = useLoaderData<typeof loader> ();
  return (
    <div id="app">
      <NavBar {...navBarFallbackData}/>
      <Hero {...heroFallbackData}/>
      <Services {...servicesFallBackData}/>
      <ChooseUs {...chooseUsFallBackData}/>
      <AboutUs {...aboutUsFallBackData}/>
      <Reviews {...reviewsFallBackData}/>
      <PhotoGallery {...photogalleryFallBackData}/>
      <ContactUs {...contactUsFallBackData}/>
      <Map/>
      <Footer/>
    </div>
  );
}
