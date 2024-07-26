import React from "react";
import ScheduleCard from "./ScheduleCard";
import purpleBgImg from "@/public/purple-bg.png";
import orangeBgImg from "@/public/orange-bg.png";
import blueBgImg from "@/public/blue-bg.png";
import liverpoolLogo from "@/public/liverpool-logo.png";
import evertonLogo from "@/public/everton-logo.png";
import psgLogo from "@/public/PSG-logo.png";
import cfLogo from "@/public/CF-logo.png";
import fcbLogo from "@/public/FCB-logo.png";
import bvbLogo from "@/public/BVB-logo.png";

const mock_matches = [
  {
    backgroundImage: purpleBgImg,
    matchStartTime: "20:00",
    firstTeamName: "利物浦",
    secondTeamName: "爱华顿",
    firstTeamLogo: liverpoolLogo,
    secondTeamLogo: evertonLogo,
  },
  {
    backgroundImage: orangeBgImg,
    matchStartTime: "20:00",
    firstTeamName: "巴塞罗那",
    secondTeamName: "皇家马德里",
    firstTeamLogo: fcbLogo,
    secondTeamLogo: cfLogo,
  },
  {
    backgroundImage: blueBgImg,
    matchStartTime: "3:00",
    firstTeamName: "巴黎圣日尔门",
    secondTeamName: "多蒙特",
    firstTeamLogo: psgLogo,
    secondTeamLogo: bvbLogo,
  },
  {
    backgroundImage: blueBgImg,
    matchStartTime: "3:00",
    firstTeamName: "巴黎圣日尔门",
    secondTeamName: "多蒙特",
    firstTeamLogo: psgLogo,
    secondTeamLogo: bvbLogo,
  },
];

const ScheduleCarousel: React.FC = () => {
  const scheduledMatchesList = mock_matches.map((match, index) => (
    <ScheduleCard key={index} {...match} />
  ));

  return (
    <div className="flex flex-col w-full h-full border-gray-300 border-t-2">
      <a className="text-gray-400 self-end text-sm mt-2">{"全部赛程"}</a>
      <div className="flex gap-3 w-full h-full items-start px-2 pt-1 pb-1 text-xs font-medium whitespace-nowrap overflow-x-scroll shadow-sm text-stone-400">
        {scheduledMatchesList}
      </div>
    </div>
  );
};

export default ScheduleCarousel;
