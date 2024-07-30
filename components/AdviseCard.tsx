"use client";

import React, { useState } from "react";
import AdviseModal from "./AdviseModal";

interface LiveMatcheProps {
  league: string;
  firstTeam: string;
  secondTeam: string;
  startTime: string;
  score: string;
}

interface AdviceHistoryProps {
  league: string;
  firstTeam: string;
  secondTeam: string;
  startTime: string;
  isWin: boolean;
  rate: number;
}

interface AdviseCardProps {
  title: string;
  winRate: string;
  hitDescription: string;
  description: string;
  liveMatches: LiveMatcheProps[];
  adviseHistory: AdviceHistoryProps[];
}

const AdviseCard: React.FC<AdviseCardProps> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <article className="flex flex-col px-1.5 py-2.5 m-2 bg-white border border-solid border-neutral-200">
        <button
          className="flex w-full h-full gap-5 justify-between items-center whitespace-nowrap"
          onClick={() => setOpenModal(true)}
        >
          <div className="flex w-auto h-full flex-col self-start font-black">
            <div className="w-fit px-1.5 py-1 text-xs text-amber-500 rounded-xl border border-amber-500 border-solid">
              {props.hitDescription}
            </div>
            <h3 className="mt-1.5 text-2xl text-black">{props.title}</h3>
            <text className="text-sm font-normal text-gray-400 self-start">
              {props.description}
            </text>
          </div>
          <div className="flex flex-col justify-center size-20 rounded-full border border-red-600 border-solid stroke-[1px]">
            <div className="self-center text-2xl font-black text-red-600">
              {props.winRate}
            </div>
            <div className="self-center text-xs font-medium text-black">
              胜率
            </div>
          </div>
        </button>
      </article>
      <AdviseModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        {...props}
      />
    </>
  );
};

export default AdviseCard;
