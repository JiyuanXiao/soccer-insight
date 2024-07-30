"use client";

import React, { useState } from "react";
import { Modal } from "flowbite-react";
import LatestLiveCard from "./LatestLiveCard";
import AdviceHistoryCard from "./AdviseHistoryCard";

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

interface AdviseModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  winRate: string;
  hitDescription: string;
  description: string;
  liveMatches: LiveMatcheProps[];
  adviseHistory: AdviceHistoryProps[];
}

const AdviseModal: React.FC<AdviseModalProps> = (props) => {
  const [openHisttory, setOpenHisttory] = useState<boolean>(false);

  const latestLiveList = props.liveMatches.map((match, index) => (
    <LatestLiveCard key={index} {...match} />
  ));

  const historyList = props.adviseHistory.map((history, index) => (
    <AdviceHistoryCard key={index} {...history} />
  ));

  return (
    <Modal
      show={props.openModal}
      onClose={() => props.setOpenModal(false)}
      size="7xl"
      dismissible
    >
      <Modal.Header />
      <Modal.Body className="flex flex-col items-center">
        <div className="flex w-full h-full gap-5 justify-between items-center whitespace-nowrap">
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
        </div>
        <nav className=" mt-10 w-full text-xl font-semibold whitespace-nowrap max-w-[274px] tracking-[3.72px]">
          <button
            className={`px-12 py-0.5 ${
              openHisttory
                ? "bg-white border border-solid border-gray-400 text-gray-400"
                : "text-white bg-orange-500 border border-solid border-orange-500"
            }`}
            onClick={() => setOpenHisttory(false)}
          >
            最新
          </button>
          <button
            className={`px-12 py-0.5 ${
              openHisttory
                ? "text-white bg-orange-500 border border-solid border-orange-500"
                : "bg-white border border-solid border-gray-400 text-gray-400"
            }`}
            onClick={() => setOpenHisttory(true)}
          >
            往绩
          </button>
        </nav>
        <div className="flex flex-col items-center overflow-y-scroll w-full h-screen mt-6 gap-4">
          {openHisttory ? historyList : latestLiveList}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdviseModal;
