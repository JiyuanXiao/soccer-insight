import React from "react";
import Image from "next/image";
import liveIcon from "@/public/live-icon.png";

interface MatchCardProps {
  title: string;
  winRate: string;
  league: string;
  teams: string;
  startTime: string;
  score: string;
}

const ChoiceMatchCard: React.FC<MatchCardProps> = ({
  title,
  winRate,
  league,
  teams,
  startTime,
  score,
}) => {
  return (
    <article className="flex flex-col px-1.5 py-2.5 mt-2 w-full bg-white border border-solid border-neutral-200">
      <div className="flex gap-5 justify-between whitespace-nowrap">
        <div className="flex flex-col self-start font-black">
          <div className="px-1.5 py-1 text-xs text-amber-500 rounded-lg border border-amber-500 border-solid">
            近10中8
          </div>
          <h3 className="mt-1.5 text-2xl text-black">{title}</h3>
        </div>
        <div className="flex flex-col px-2 py-4 rounded-full border border-red-600 border-solid stroke-[1px]">
          <div className="text-xl font-black text-red-600">{winRate}</div>
          <div className="text-xs font-medium text-black">胜率</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start py-2 pr-4 pl-1.5 mt-1 w-full bg-gray-200">
        <div className="flex flex-col self-start">
          <div className="flex gap-1.5 text-lg font-semibold text-black">
            <div className="grow my-auto">{`${league} ${teams}`}</div>
            <Image
              loading="lazy"
              src={liveIcon}
              alt="icon"
              className="shrink-0 aspect-square w-[34px]"
            />
          </div>
          <div className="text-sm text-neutral-400">开赛时间：{startTime}</div>
        </div>
        <div className="flex gap-1 self-end p-1.5 mt-7 text-base font-black text-white whitespace-nowrap bg-orange-600 rounded-xl">
          <div className="grow">{score}</div>
        </div>
      </div>
    </article>
  );
};

export default ChoiceMatchCard;
