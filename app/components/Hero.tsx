import React from "react";
import { OptimizedImage } from "~/components/OptimizedImage";

export interface Props {
  logo: string;
  bgLogo: string;
  logoAlt?: string;
}

export const Hero: React.FC<Props> = ({ logo, bgLogo, logoAlt = "TD Auto Repair" }) => {
  return (
    <header
      id="hero"
      className="flex w-full h-[60vh] min-h-[60vh] md:h-screen md:min-h-screen relative border-t border-b border-black overflow-hidden"
    >
      <OptimizedImage
        className="w-full h-full object-cover object-[50%_90%] opacity-65"
        src={bgLogo}
        alt=""
        priority
        lazy={false}
      />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[200px] md:max-w-[50%] m-0">
        <OptimizedImage
          className="block w-full h-full object-contain"
          src={logo}
          alt={logoAlt}
          priority
          lazy={false}
        />
      </h1>
    </header>
  );
};
