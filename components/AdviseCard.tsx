import React from "react";

interface AdviseCardProps {
  title: string;
  winRate: string;
  hitDescription: string;
  description: string;
}

const AdviseCard: React.FC<AdviseCardProps> = ({
  title,
  winRate,
  hitDescription,
  description,
}) => {
  return (
    <article className="flex flex-col px-1.5 py-2.5 mt-2 mx-2 bg-white border border-solid border-neutral-200">
      <div className="flex w-full h-full gap-5 justify-between items-center whitespace-nowrap">
        <div className="flex w-auto h-full flex-col self-start font-black">
          <div className="w-fit px-1.5 py-1 text-xs text-amber-500 rounded-xl border border-amber-500 border-solid">
            {hitDescription}
          </div>
          <h3 className="mt-1.5 text-2xl text-black">{title}</h3>
          <text className="text-sm text-gray-400">{description}</text>
        </div>
        <div className="flex flex-col justify-center size-20 rounded-full border border-red-600 border-solid stroke-[1px]">
          <div className="self-center text-2xl font-black text-red-600">
            {winRate}
          </div>
          <div className="self-center text-xs font-medium text-black">胜率</div>
        </div>
      </div>
    </article>
  );
};

export default AdviseCard;
