import React from "react";

export interface FooterProps {
  copyright: string;
}

export const Footer: React.FC<FooterProps> = ({ copyright }) => (
  <footer
    id="footer"
    className="flex justify-center w-full bg-white py-3 md:py-4"
  >
    <div className="flex w-full max-w-4xl px-4 sm:px-6 md:px-16 flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-700">
      <span>{copyright}</span>
    </div>
  </footer>
);
