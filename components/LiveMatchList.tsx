"use client";

import React, { useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import LiveMatchCard from "./LiveMatchCard";
import liverpoolLogo from "@/public/liverpool-logo.png";
import evertonLogo from "@/public/everton-logo.png";
import leagueLogo from "@/public/league-logo.png";
import cfLogo from "@/public/CF-logo.png";
import fcbLogo from "@/public/FCB-logo.png";
import psgLogo from "@/public/PSG-logo.png";
import bvbLogo from "@/public/BVB-logo.png";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const mockLiveMatchInfo = [
  {
    id: 0,
    day: "周二",
    date: "2024-04-29",
    liveMatchInfoList: [
      {
        date: "2024-04-29",
        firstTeamName: "巴塞罗那",
        secondTeamName: "皇家马德里",
        firstTeamLogo: fcbLogo,
        secondTeamLogo: cfLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-04-29",
        firstTeamName: "巴塞罗那",
        secondTeamName: "皇家马德里",
        firstTeamLogo: fcbLogo,
        secondTeamLogo: cfLogo,
        leagueLogo: leagueLogo,
      },
    ],
  },
  {
    id: 1,
    day: "周三",
    date: "2024-04-30",
    liveMatchInfoList: [
      {
        date: "2024-04-30",
        firstTeamName: "利物浦",
        secondTeamName: "爱华顿",
        firstTeamLogo: liverpoolLogo,
        secondTeamLogo: evertonLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-04-30",
        firstTeamName: "利物浦",
        secondTeamName: "爱华顿",
        firstTeamLogo: liverpoolLogo,
        secondTeamLogo: evertonLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-04-30",
        firstTeamName: "利物浦",
        secondTeamName: "爱华顿",
        firstTeamLogo: liverpoolLogo,
        secondTeamLogo: evertonLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-04-30",
        firstTeamName: "利物浦",
        secondTeamName: "爱华顿",
        firstTeamLogo: liverpoolLogo,
        secondTeamLogo: evertonLogo,
        leagueLogo: leagueLogo,
      },
    ],
  },
  {
    id: 2,
    day: "周四",
    date: "2024-05-01",
    liveMatchInfoList: [
      {
        date: "2024-05-01",
        firstTeamName: "巴黎圣日尔门",
        secondTeamName: "多蒙特",
        firstTeamLogo: psgLogo,
        secondTeamLogo: bvbLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-05-01",
        firstTeamName: "巴黎圣日尔门",
        secondTeamName: "多蒙特",
        firstTeamLogo: psgLogo,
        secondTeamLogo: bvbLogo,
        leagueLogo: leagueLogo,
      },
      {
        date: "2024-05-01",
        firstTeamName: "巴黎圣日尔门",
        secondTeamName: "多蒙特",
        firstTeamLogo: psgLogo,
        secondTeamLogo: bvbLogo,
        leagueLogo: leagueLogo,
      },
    ],
  },
];

interface LiveMatchProps {
  date: string;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamLogo: StaticImageData;
  secondTeamLogo: StaticImageData;
  leagueLogo: StaticImageData;
}

interface MatchListProps {
  id: number;
  day: string;
  date: string;
  liveMatchInfoList: LiveMatchProps[];
}

const LiveMatchList = () => {
  const today = "2024-04-30";

  const [currentLiveMatchList, setCurrentLiveMatchList] =
    useState<MatchListProps>();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isFirst, setIsFirst] = useState<boolean>(false);
  const [isLast, setIsLast] = useState<boolean>(false);

  useEffect(() => {
    const targetInfo = mockLiveMatchInfo.find((info) => info.date === today);
    if (targetInfo) {
      setCurrentIndex(targetInfo.id);
    }
  }, []);

  useEffect(() => {
    console.log(currentIndex);
    if (currentIndex === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }

    if (currentIndex === mockLiveMatchInfo.length - 1) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }

    const targetInfo = mockLiveMatchInfo.find(
      (info) => info.id === currentIndex
    );
    if (targetInfo) {
      setCurrentLiveMatchList(targetInfo);
    }
  }, [currentIndex]);

  const handleSwitchList = (action: string) => {
    if (currentIndex < 0) return;

    if (action === "left") {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (action === "right") {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 h-full">
      <div className="border-4 border-red-600 border-solid w-[27px]" />
      <h3 className="pt-1.5 text-base text-neutral-400">直播赛程</h3>
      <div className="flex flex-row justify-between w-full px-2 pb-1">
        <button
          onClick={() => handleSwitchList("left")}
          disabled={isFirst || currentIndex < 0}
        >
          <AiFillCaretLeft
            className={`${isFirst ? "text-gray-400" : "text-black"} size-7`}
          />
        </button>
        <time className="text-black text-xl font-extrabold">
          {currentLiveMatchList?.day} {currentLiveMatchList?.date}
        </time>
        <button
          onClick={() => handleSwitchList("right")}
          disabled={isLast || currentIndex < 0}
        >
          <AiFillCaretRight
            className={`${isLast ? "text-gray-400" : "text-black"} size-7`}
          />
        </button>
      </div>
      <div className="flex flex-col w-full overflow-y-scroll">
        {currentLiveMatchList?.liveMatchInfoList.map((match, index) => (
          <LiveMatchCard key={index} {...match} />
        ))}
      </div>
    </div>
  );
};

export default LiveMatchList;
