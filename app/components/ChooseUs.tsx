import React from "react";
import { Icon } from "~/components/Icon";

interface TalkingPoint {
  title: string;
  body: string;
}

export interface Props {
  heading: string;
  talkingPoints: TalkingPoint[];
}

const parseTalkingPoints = (talkingPoints: Props["talkingPoints"]) =>
  talkingPoints.map((talkingPoint, index) => (
    <div
      key={`talking-point-${index}`}
      className="flex justify-center items-start w-full max-w-[1200px] flex-col md:flex-row md:items-center gap-4 md:gap-6"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white w-full md:w-1/5 leading-snug shrink-0">
        {talkingPoint.title}
      </h3>
      <div className="hidden md:block [&_.material-symbols-outlined]:text-5xl shrink-0">
        <Icon name="chevron_right" variant="carousel" />
      </div>
      <p className="text-base md:text-lg leading-relaxed text-white/90 m-0 w-full md:w-4/5 min-w-0">
        {talkingPoint.body}
      </p>
    </div>
  ));

export const ChooseUs: React.FC<Props> = ({ heading, talkingPoints }) => {
  return (
    <section
      id="choose-us-outer"
      className="flex justify-center w-full bg-black py-12 md:py-24"
    >
      <div
        id="choose-us-inner"
        className="w-full max-w-5xl px-4 sm:px-6 md:px-16 bg-black text-white overflow-hidden"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {heading}
          </h2>
          <hr className="border-[3px] border-[#4B5DB8] rounded w-[70px] mt-4 mb-0 ml-0 opacity-80" />
        </div>
        <div className="flex flex-col gap-8 md:gap-10 mt-10 md:mt-12">
          {parseTalkingPoints(talkingPoints)}
        </div>
      </div>
    </section>
  );
};
