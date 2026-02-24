import React from "react";
import { OptimizedImage } from "~/components/OptimizedImage";
import { Icon, type IconName } from "~/components/Icon";

export interface ServiceOption {
  label: string;
  icon: IconName;
}

export interface Props {
  heading: string;
  logo: string;
  logoAlt?: string;
  serviceOptions: ServiceOption[];
}

const parseServiceOptions = (serviceOptions: Props["serviceOptions"]) =>
  serviceOptions.map((option, index) => (
    <div
      key={`service-option-${index}`}
      className="grid text-center gap-2 justify-items-center"
    >
      <Icon name={option.icon} variant="service" />
      <span className="font-bold text-xl md:text-2xl text-[#4B5DB8] leading-snug">
        {option.label}
      </span>
    </div>
  ));

export const Services: React.FC<Props> = ({
  heading,
  logo,
  logoAlt,
  serviceOptions,
}) => {
  return (
    <section
      id="services"
      className="flex justify-center w-full bg-white pt-8 pb-10 md:pt-10 md:pb-20"
    >
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-16">
        <div className="flex flex-wrap w-full justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {heading}
            </h2>
            <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0" />
          </div>
          <OptimizedImage
            className="max-h-[140px] md:max-h-[180px] w-auto object-contain shrink-0"
            src={logo}
            alt={logoAlt ?? "ASE Certified"}
            lazy
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 md:gap-12 mt-10 md:mt-12 font-bold text-[#4B5DB8]">
          {parseServiceOptions(serviceOptions)}
        </div>
      </div>
    </section>
  );
};
