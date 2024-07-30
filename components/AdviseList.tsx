import React from "react";
import AdviseCard from "./AdviseCard";

const mock_adivses = [
  {
    id: 0,
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
    liveMatches: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
    ],
    adviseHistory: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: false,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
    ],
  },
  {
    id: 1,
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
    liveMatches: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
    ],
    adviseHistory: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: false,
        rate: -0.25,
      },
    ],
  },
  {
    id: 2,
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
    liveMatches: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        score: "88",
      },
    ],
    adviseHistory: [],
  },
  {
    id: 3,
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
    liveMatches: [],
    adviseHistory: [
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: false,
        rate: -0.25,
      },
      {
        league: "英超",
        firstTeam: "曼联",
        secondTeam: "韦斯咸",
        startTime: "2024-04-22 23:00",
        isWin: true,
        rate: -0.25,
      },
    ],
  },
];

const AdviseList = () => {
  const matchesList = mock_adivses.map((match, index) => (
    <AdviseCard key={index} {...match} />
  ));

  return (
    <div className="flex flex-col w-full pt-8 h-full">
      <div className="flex-grow w-full overflow-y-scroll">{matchesList}</div>
    </div>
  );
};

export default AdviseList;
