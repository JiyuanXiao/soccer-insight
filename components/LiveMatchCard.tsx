"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface LiveMatchCardProps {
  date: string;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamLogo: StaticImageData;
  secondTeamLogo: StaticImageData;
  leagueLogo: StaticImageData;
}

const LiveMatchCard: React.FC<LiveMatchCardProps> = ({
  date,
  firstTeamName,
  secondTeamName,
  firstTeamLogo,
  secondTeamLogo,
  leagueLogo,
}) => {
  return (
    <article className="flex flex-row gap-5 justify-between items-start py-4 px-3.5 bg-white border-r border-black border-opacity-50 w-full shadow-[3px_0px_6px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col">
        <time className="text-black text-xs font-bold">{date}</time>
        <h2 className="text-black text-2xl font-black">
          {firstTeamName}vs{secondTeamName}
        </h2>
        <div className="flex flex-row justify-start gap-4 my-2">
          <Image
            src={firstTeamLogo}
            alt={`${firstTeamName} logo`}
            className="h-11 w-fit"
          />
          <Image
            src={secondTeamLogo}
            alt={`${secondTeamName} logo`}
            className="h-11 w-fit"
          />
        </div>
      </div>
      <Image src={leagueLogo} alt="league logo" className="size-28" />
    </article>
  );
};

export default LiveMatchCard;
