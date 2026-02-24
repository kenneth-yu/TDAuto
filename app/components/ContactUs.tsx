import React, { useState } from "react";
import { Icon } from "~/components/Icon";
import { gMapUrl } from "~/content";

export interface Props {
  leftSection: {
    heading: string;
    phoneNumber: { text: string; number: number };
    cellNumber: { text: string; number: number };
    email: string;
  };
  rightSection: {
    heading: string;
    hours: string;
    address: string;
  };
}

export const ContactUs: React.FC<Props> = ({ leftSection, rightSection }) => {
  const { heading, phoneNumber, cellNumber, email } = leftSection;
  const { hours, address } = rightSection;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact-us"
      className="relative flex justify-center w-full bg-black py-12 md:py-24"
    >
      <div className="flex w-full max-w-4xl px-4 sm:px-6 md:px-16 bg-black text-white flex-col md:flex-row md:justify-center gap-10 md:gap-16">
        <div className="min-w-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {heading}
          </h2>
          <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0 opacity-80" />
          <div className="flex flex-col gap-1 mt-8">
            <>
              <a
                href={`tel:${phoneNumber.number}`}
                className="md:hidden flex items-center gap-3 text-white visited:text-white hover:text-[#4B5DB8] hover:bg-white/25 hover:underline rounded-md transition-colors min-h-[44px] py-2 px-3 -mx-3"
              >
                <Icon name="call" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed">
                  {phoneNumber.text}
                </span>
              </a>
              <div className="hidden md:flex items-center gap-3 text-white min-h-[44px] py-2">
                <Icon name="call" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed">
                  {phoneNumber.text}
                </span>
              </div>
            </>
            <>
              <a
                href={`tel:${cellNumber.number}`}
                className="md:hidden flex items-center gap-3 text-white visited:text-white hover:text-[#4B5DB8] hover:bg-white/25 hover:underline rounded-md transition-colors min-h-[44px] py-2 px-3 -mx-3"
              >
                <Icon name="phone_iphone" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed">
                  {cellNumber.text}
                </span>
              </a>
              <div className="hidden md:flex items-center gap-3 text-white min-h-[44px] py-2">
                <Icon name="phone_iphone" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed">
                  {cellNumber.text}
                </span>
              </div>
            </>
            <>
              <a
                href={`mailto:${email}`}
                className="md:hidden flex items-center gap-3 text-white visited:text-white hover:text-[#4B5DB8] hover:bg-white/25 hover:underline rounded-md transition-colors min-h-[44px] py-2 px-3 -mx-3"
              >
                <Icon name="mail" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed break-all">
                  {email}
                </span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="hidden md:flex items-center gap-3 text-white hover:text-[#4B5DB8] hover:bg-white/25 rounded-md transition-colors min-h-[44px] py-2 px-3 -mx-3 text-left cursor-pointer relative"
              >
                <Icon name="mail" variant="contact" />
                <span className="text-base md:text-lg font-medium leading-relaxed break-all">
                  {email}
                </span>
              </button>
            </>
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {rightSection.heading}
          </h2>
          <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0 opacity-80" />
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex items-start gap-3">
              <Icon name="schedule" variant="contact" />
              <span className="text-base md:text-lg font-medium leading-relaxed whitespace-pre-line">
                {hours}
              </span>
            </div>
            <a
              href={gMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white visited:text-white hover:text-[#4B5DB8] hover:bg-white/25 hover:underline rounded-md transition-colors min-h-[44px] py-2 px-3 -mx-3"
            >
              <Icon name="location_on" variant="contact" />
              <span className="text-base md:text-lg font-medium leading-relaxed">
                {address}
              </span>
            </a>
          </div>
        </div>
      </div>
      {copied && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-[#4B5DB8] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Email copied
        </span>
      )}
    </section>
  );
};
