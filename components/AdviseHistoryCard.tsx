"use client";

import React from "react";

interface AdviceHistoryProps {
  league: string;
  firstTeam: string;
  secondTeam: string;
  startTime: string;
  isWin: boolean;
  rate: number;
}

const AdviceHistoryCard: React.FC<AdviceHistoryProps> = ({
  league,
  firstTeam,
  secondTeam,
  startTime,
  isWin,
  rate,
}) => {
  return (
    <div className="flex flex-col items-center w-72">
      <div className="mb-4 w-full border border-solid border-neutral-200 min-h-[1px]" />
      <div className="flex gap-5 justify-between w-full mb-2">
        <div
          className={`text-3xl size-[70px] self-start font-black  whitespace-nowrap rounded-full border border-solid ${
            isWin
              ? "text-orange-500 border-orange-500 p-4"
              : "text-gray-400 border-gray-400 pt-4 pl-6"
          }`}
        >
          {isWin ? "W" : "L"}
        </div>
        <div className="flex flex-col self-start px-7">
          <time className="text-xs font-medium text-neutral-400">
            {startTime}
          </time>
          <h2 className="mt-1.5 text-base font-bold text-black">
            {league} {firstTeam}vs{secondTeam}
          </h2>
          <p
            className={`text-base font-semibold ${
              isWin ? "text-orange-500" : "text-gray-400"
            }`}
          >
            {rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdviceHistoryCard;
