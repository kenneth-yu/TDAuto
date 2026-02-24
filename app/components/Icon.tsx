import React from "react";

export type IconName =
  | "build"
  | "car_repair"
  | "electric_bolt"
  | "location_city"
  | "chevron_right"
  | "call"
  | "phone_iphone"
  | "mail"
  | "schedule"
  | "location_on"
  | "keyboard_arrow_up"
  | "close"
  | "chevron_left"
  | "chevron_right"
  | "format_quote";

type IconVariant = "service" | "contact" | "nav" | "carousel" | "quote";

const variantClass: Record<IconVariant, string> = {
  service: "material-symbols-outlined block leading-none text-[#4B5DB8]",
  contact: "material-symbols-outlined text-[45px] pr-3 shrink-0",
  nav: "material-symbols-outlined text-3xl",
  carousel: "material-symbols-outlined text-5xl hidden md:inline",
  quote: "material-symbols-outlined text-[#4B5DB8]/60 text-4xl mb-1 -mt-1 shrink-0",
};

export interface IconProps {
  name: IconName;
  variant?: IconVariant;
  className?: string;
}

/**
 * Reusable Material Symbols icon component.
 */
export const Icon: React.FC<IconProps> = ({
  name,
  variant = "contact",
  className = "",
}) => (
  <span className={`${variantClass[variant]} ${className}`.trim()} aria-hidden>
    {name}
  </span>
);
