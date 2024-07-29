import React from "react";
import AdviseCard from "./AdviseCard";

const mock_adivses = [
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
  },
  {
    title: "英超风向标",
    winRate: "78%",
    hitDescription: "近10中8",
    description: "锁定英伦赛事",
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
