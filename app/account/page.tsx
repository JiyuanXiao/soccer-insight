import MainHeader from "@/components/MainHeader";
import AccountCredit from "@/components/AccountCredit";
import ServiceOption from "@/components/ServiceOption";

const mockUser = {
  credit: 333,
  memberLevel: 2,
  memberName: "会员名",
};

export default function AccountPage() {
  return (
    <main className="flex flex-col flex-grow items-start justify-start h-full pt-2">
      <div className="w-full h-27/50 short:h-1/2 tall:h-21/50 xtall:h-18/50 xxtall:h-16/50">
        <div className="border-0 border-b-2 border-gray-200 w-full py-12">
          <AccountCredit credit={mockUser.credit} />
        </div>
        <div className="flex flex-row justify-start items-center font-extrabold gap-4 border-0 border-b-2 border-gray-200 w-full py-8">
          <div className="ml-6 w-fit h-fit px-1.5 py-0.5 text-xs  text-amber-500 rounded-xl border border-amber-500 border-solid">
            Lv.{mockUser.memberLevel}
          </div>
          <div className="text-3xl text-black tracking-[2.09px]">
            {mockUser.memberName}
          </div>
        </div>
      </div>
      <div className="w-full h-23/50 short:h-1/2 tall:h-29/50 xtall:h-32/50 xxtall:h-34/50">
        <div className="flex flex-row justify-between items-center font-extrabold border-0 border-b-2 border-gray-200 w-full p-8 pb-12">
          <ServiceOption serviceType="充值优惠" />
          <ServiceOption serviceType="积分商城" />
          <ServiceOption serviceType="历史订单" />
        </div>
        <div className="flex flex-row justify-start items-center font-extrabold gap-4 border-0 border-b-2 border-gray-200 w-full p-4">
          <text className="text-gray-500 text-xl font-extrabold">在线客服</text>
        </div>
      </div>
    </main>
  );
}
