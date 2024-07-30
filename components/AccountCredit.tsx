import React from "react";
import { AiFillStar } from "react-icons/ai";

interface AccountCreditProps {
  credit: number;
}

const AccountCredit: React.FC<AccountCreditProps> = ({ credit }) => {
  return (
    <div className="flex flex-col h-full w-full gap-4 items-start self-start pt-6 pl-6 font-black text-black whitespace-nowrap">
      <h2 className="text-2xl">个人积分</h2>
      <div className="flex flex-row items-start">
        <div className="text-7xl tracking-[5.57px]">{credit}</div>
        <AiFillStar className="text-amber-400 size-20" />
      </div>
    </div>
  );
};

export default AccountCredit;
