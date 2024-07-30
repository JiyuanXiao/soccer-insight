"use client";

import React from "react";
import Image from "next/image";
import liveIcon from "@/public/live-icon.png";
import { AiFillStar } from "react-icons/ai";

interface LatestLiveCardProps {
  league: string;
  firstTeam: string;
  secondTeam: string;
  startTime: string;
  score: string;
}

const LatestLiveCard: React.FC<LatestLiveCardProps> = ({
  league,
  firstTeam,
  secondTeam,
  startTime,
  score,
}) => {
  return (
    <div className="flex gap-5 justify-between items-start py-2 pr-4 pl-1.5 mt-1 w-full bg-gray-200">
      <div className="flex flex-col self-start">
        <div className="flex gap-1.5 text-lg font-semibold text-black">
          <div className="grow my-auto">{`${league} ${firstTeam}vs${secondTeam}`}</div>
          <Image
            loading="lazy"
            src={liveIcon}
            alt="icon"
            className="shrink-0 aspect-square w-[38px]"
          />
        </div>
        <div className="text-sm text-neutral-400">开赛时间：{startTime}</div>
      </div>
      <div className="flex gap-1 self-end px-1.5 mt-7 text-base font-black text-white whitespace-nowrap bg-orange-500 rounded-xl">
        <div className="grow">{score}</div>
        <AiFillStar className="flex justify-center self-center text-amber-400" />
      </div>
    </div>
  );
};

export default LatestLiveCard;
