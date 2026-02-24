import React from "react";
import { OptimizedImage } from "~/components/OptimizedImage";
import { gMapUrl } from "~/content";

interface NavItem {
  text: string;
  src: string;
}

interface ContactInfo {
  text: string;
  phoneNumber: number;
}

export interface Props {
  logo: string;
  logoText: string;
  links: NavItem[];
  contactInfo: ContactInfo;
  address: string;
}

const parseNavOptions = (links: Props["links"]) => {
  return links.map((link, index) => (
    <a
      href={`#${link.src}`}
      key={`nav-option-${index}`}
      className="font-medium text-sm md:text-base hover:text-[#4B5DB8] hover:bg-[#4B5DB8]/15 hover:underline rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center py-2 -my-1 px-2 -mx-2"
    >
      {link.text}
    </a>
  ));
};

export const NavBar: React.FC<Props> = ({
  logo,
  logoText,
  links,
  contactInfo,
  address,
}) => {
  return (
    <nav
      id="nav-bar"
      className="flex justify-center w-full bg-white z-[10000] overflow-hidden fixed border-b border-gray-200"
    >
      <div
        id="nav-bar-content"
        className="flex w-full max-w-[1200px] items-center px-4 md:px-6 py-2.5"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#hero"
            className="flex items-center gap-0.5 shrink-0 hover:text-[#4B5DB8] hover:bg-[#4B5DB8]/15 rounded-md transition-colors min-h-[44px] items-center py-1 px-2 -mx-2"
          >
            <OptimizedImage
              className="block w-10 h-10 md:w-11 md:h-11 object-contain"
              src={logo}
              alt=""
              lazy={false}
            />
            <span className="font-semibold text-sm md:text-base whitespace-nowrap">
              {logoText}
            </span>
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            {parseNavOptions(links)}
          </div>
        </div>
        <a
          href={`tel:${contactInfo.phoneNumber}`}
          aria-label="Call"
          className="md:hidden flex items-center min-h-[44px] min-w-[44px] justify-center font-medium text-[#4B5DB8] hover:bg-[#4B5DB8]/20 rounded-full transition-colors ml-auto"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </a>
        <div className="hidden md:flex items-center gap-4 text-sm ml-auto">
          <span className="font-medium text-gray-700 whitespace-nowrap min-h-[44px] flex items-center">
            {contactInfo.text}
          </span>
          <span className="text-gray-300">|</span>
          <a
            href={gMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-[#4B5DB8] hover:bg-[#4B5DB8]/15 rounded-md transition-colors min-h-[44px] flex items-center px-2"
          >
            {address}
          </a>
        </div>
      </div>
    </nav>
  );
};
