import Image, { StaticImageData } from "next/image";
import { AiFillStar } from "react-icons/ai";
import React, { ReactElement, ReactNode, FC } from "react";

interface ScheduleCardProps {
  backgroundImage: StaticImageData;
  matchStartTime: string;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamLogo: StaticImageData;
  secondTeamLogo: StaticImageData;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  backgroundImage,
  matchStartTime,
  firstTeamName,
  secondTeamName,
  firstTeamLogo,
  secondTeamLogo,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className={`min-w-24 h-32 border-r-2 border-x-gray-400 rounded-xl bg-cover bg-center`}
    >
      <div className="flex flex-row justify-between w-full h-1/5  ">
        <time className="ml-2 self-end text-white">{matchStartTime}</time>
        <AiFillStar className="m-2 text-white" />
      </div>
      <div className="flex flex-col font-semibold ml-2 mt-1 text-white">
        <text>{firstTeamName}</text>
        <text>{secondTeamName}</text>
      </div>
      <div className="flex flex-row justify-around my-1">
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
  );
};

export default ScheduleCard;
