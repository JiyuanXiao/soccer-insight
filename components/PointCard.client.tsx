"use client";
import React from "react";
import { Rnd } from "react-rnd";
import { AiFillStar } from "react-icons/ai";

const PointCard: React.FC = () => {
  return (
    <Rnd
      default={{
        x: 260,
        y: 460,
        width: 112,
        height: 112,
      }}
      className="z-20"
    >
      <div className="flex flex-col justify-center size-28 rounded-full border border-red-600 border-solid stroke-[1px] bg-white font-serif">
        <div className="self-center text-xs font-medium text-black mt-3">
          个人积分
        </div>
        <div className="self-center text-4xl font-bold  text-black">{333}</div>
        <AiFillStar className="flex justify-center self-center text-amber-400 size-7" />
      </div>
    </Rnd>
  );
};

export default PointCard;
