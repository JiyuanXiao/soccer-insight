import React from "react";
import ChoiceMatchCard from "./ChoiceMatchCard";

const mock_choices = [
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    league: "英超",
    teams: "曼联vs韦斯咸",
    startTime: "2024-04-22 23:00",
    score: "88",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    league: "英超",
    teams: "曼联vs韦斯咸",
    startTime: "2024-04-22 23:00",
    score: "88",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    league: "英超",
    teams: "曼联vs韦斯咸",
    startTime: "2024-04-22 23:00",
    score: "88",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    league: "英超",
    teams: "曼联vs韦斯咸",
    startTime: "2024-04-22 23:00",
    score: "88",
  },
];

const ChoiceMatchList = () => {
  const matchesList = mock_choices.map((match, index) => (
    <ChoiceMatchCard key={index} {...match} />
  ));

  return (
    <div className="flex flex-col w-full pt-8 h-full">
      <div className="w-8 mx-2 my-1 border-2 border-red-500" />
      <div className="flex flex-row justify-between ">
        <text className="text-black font-semibold mb-3 mx-2">今日精选</text>
        <a className="text-gray-400 text-xs mx-2 self-end">查看更多</a>
      </div>
      <div className="flex-grow w-full overflow-y-scroll">{matchesList}</div>
    </div>
  );
};

export default ChoiceMatchList;
