/**
 * Site content - all copy and configuration.
 * Edit this file to update site text and links.
 */

export const siteMeta = {
  title: "TD Auto Repair",
  description: "T&D Auto Repair",
} as const;

export const navBar = {
  logoText: "Auto Repair",
  links: [
    { text: "Services", src: "services" },
    { text: "Contact Us", src: "contact-us" },
  ],
  contactInfo: { text: "Call Us Now: 718-972-6620", phoneNumber: 7189726620 },
  address: "896 4th Ave, Brooklyn NY 11232",
} as const;

export const hero = {
  logoAlt: "TD Auto Repair",
} as const;

export const services = {
  heading: "Our \n Services",
  logoAlt: "ASE Certified",
  serviceOptions: [
    { label: "Mechanical", icon: "build" },
    { label: "Bodywork", icon: "car_repair" },
    { label: "Electrical", icon: "electric_bolt" },
    { label: "Inspection", icon: "location_city" },
  ],
} as const;

export const chooseUs = {
  heading: "Why Choose \n TD Auto?",
  talkingPoints: [
    {
      title: "Staff",
      body: "ASE Certified Technicians. With years of experience and extensive training, our technicians are equipped with the knowledge and skills to handle any automotive issue.",
    },
    {
      title: "Expertise",
      body: "Our experienced team has the expertise, skills, and knowledge to accurately identify and repair any problem. Our commitment to ongoing training and education means that we stay up-to-date with the latest advancements in automotive technology, so you can trust that your vehicle is in good hands. With us, you can have peace of mind knowing that we will always provide accurate diagnosis and reliable repair services.",
    },
    {
      title: "Equipment",
      body: "State-of-the-art equipment and most advanced tools, computers and scanners available on the market.",
    },
    {
      title: "Parts",
      body: "Only genuine, OEM and the highest-quality aftermarket parts sold.",
    },
    {
      title: "Price",
      body: "Our commitment to transparency and fairness is reflected in our pricing. We believe that our customers deserve to know exactly what they are paying for, without any hidden fees or surprises. That's why we always communicate our prices clearly and honestly, so you can make informed decisions with confidence. Our goal is to provide you with the best possible value for your investment, without compromising on quality or service. With us, you can trust that you are getting a fair and reasonable price every time.",
    },
    {
      title: "Relationships",
      body: "We believe in building lasting connections with our customers is the foundation for success. We strive to create an experience that goes beyond just one transaction, but rather a journey of loyalty and trust. Our mission is to build relationships that stand the test of time and set the standard for professionalism in our industry.",
    },
  ],
} as const;

export const aboutUs = {
  heading: "About \n Us",
  body: `Looking for top-notch automotive repair service in Brooklyn, NY? Look no further than TD Auto! Since 1992, we've been proud to serve the community with high quality repairs for all types of vehicles. Our experienced management and ASE certified technicians have made us a trusted name in the industry.

  But we're not content to rest on our laurels. In 2018, we refreshed our management and ownership, and redoubled our commitment to using the latest technology, tools, and techniques to provide complete solutions to any and all vehicle problems.
  
  No matter what you drive, we welcome you to bring it to TD Auto for mechanical and collision repair. From new and old cars to foreign and domestic trucks, gas, diesel, hybrid, or electric - we've got you covered. Trust us to keep you on the road, no matter what.`,
  buttonText: "Let's Work Together",
} as const;

export const reviews = {
  heading: "What Our \n Customers Say",
  reviews: [
    {
      name: "David Schrager",
      text: "Took care of my inspection and oil change. Accommodating and friendly. Did a very nice job on body work 3 years ago. Terrific service. Norman and his staff are down to earth service oriented people. You can't ask more.",
    },
    {
      name: "Mellica Askari",
      text: "Norman and the crew are some of the most honest, hard working people I've met. After having a horrible experience with South Slope Auto (they would keep my car for months at a time, and would charge me twice when they didn't fix the issue initially and had to do the service again) I feel so lucky to have brought my car in to T & D. As a woman car owner, I've always had to have my guards up super high with every mechanic consultation. What an amazing feeling it is to know that whenever I have any issue with my car, Norman will let me know exactly what's going on without piling on a bunch of other issues that would cost me extra. I used to wait at least 6 weeks to get my car back for a check engine light, and now I get it back in 2-3 days.\n\nThis car shop is the definition of no-nonsense; it is their goal to get your car taken care of as quickly as possible and to do such a good job that you won't have to come back. Everyone in there treats me with such great respect and hospitality which I really appreciate as a girl going into such a male-majority space.\n\nNorman is super easy to reach, is a great communicator, passionate about what he does, and always makes sure his customers' needs come first. This team is the best mechanic crew in the city, you will never regret bringing your car here!",
    },
    {
      name: "Angela Lee",
      text: "Had a great experience with Norman and his crew. They were friendly, showed great customer service and Norman took the time to explain the needed repair and his thought process. They will definitely be my go to mechanic moving forward and I highly recommend their shop!",
    },
    {
      name: "Elina Street",
      text: "Incredible experience here. I wouldn't want to go anywhere else. Everyone is so friendly, honest and very communicative. A deer did some serious damage to my car, and Norman walked me through everything with the insurance and made all the repairs, it was a most seamless experience. I thought my car was going to get totaled and they repaired it GOOD AS NEW! I would go back in a heartbeat. When the accident happened, the shop was closing but Norman stayed open to wait for my car to be dropped off. I am so grateful to have found this place and I will be back.",
    },
    {
      name: "TM",
      text: "Been going to T&D for years. Norman and his crew are good on what they do. He's honest and straight up on what needs to be done for the car. He doesn't sell you unnecessary repairs to charge you extra. It's hard to find an honest and good body shop these days. Will continue to come back.",
    },
  ],
} as const;

export const photoGallery = {
  heading: "Past \n Work",
  imageAlts: [
    "engine-image",
    "subframe-image",
    "crate-engine-image",
    "bodywork-after-image",
    "bodywork-after-2-image",
    "bodywork-before-image",
    "bodywork-before-2-image",
    "engine-removal-image",
  ],
} as const;

export const contactUs = {
  leftSection: {
    heading: "Contact \n Us",
    phoneNumber: { text: "718-972-6620 (Shop)", number: 7189726620 },
    cellNumber: { text: "917-295-1205 (Cell)", number: 9172951205 },
    email: "thetdauto@gmail.com",
  },
  rightSection: {
    heading: "Business \n Hours",
    hours: "Mon - Fri: 8:00 - 5:00 \n Sat: 8:00 - 5:00 \n Sun: CLOSED",
    address: "896 4th Avenue, Brooklyn NY 11232",
  },
} as const;

export const mapConfig = {
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48428.82983462483!2d-74.07903105136718!3d40.65629779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4065f096ac24cb8b%3A0x72b14f44749f014e!2sT%20%26%20D%20Auto%20Repair!5e0!3m2!1sen!2sus!4v1693428821399!5m2!1sen!2sus",
  directionsUrl:
    "https://www.google.com/maps/dir//T+%26+D+Auto+Repair+896+4th+Ave+Brooklyn,+NY+11232/@40.6562978,-74.0028134,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4065f096ac24cb8b:0x72b14f44749f014e",
  title: "T&D Auto Repair location",
} as const;

export const footer = {
  copyright: "Copyright © 2023 TD Auto Repair, Inc. All rights reserved.",
} as const;
