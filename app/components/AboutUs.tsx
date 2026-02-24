import React from "react";

export interface Props {
  heading: string;
  body: string;
  buttonText: string;
}

export const AboutUs: React.FC<Props> = ({
  heading,
  body,
  buttonText,
}) => {
  return (
    <section className="flex justify-center w-full bg-white py-12 md:py-24">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-16 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          {heading}
        </h2>
        <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0" />
        <div className="mt-10 md:mt-12 max-w-[900px]">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line text-left">
            {body}
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#contact-us"
              role="button"
              className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 text-base font-semibold text-[#4B5DB8] border-2 border-[#4B5DB8] bg-transparent rounded-md hover:bg-[#4B5DB8] hover:text-white transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#4B5DB8] focus-visible:ring-offset-2 touch-manipulation"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
