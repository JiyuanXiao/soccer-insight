import MainHeader from "@/components/MainHeader";
import LiveStream from "@/components/LiveStream";
import LiveMatchList from "@/components/LiveMatchList";

const mockLiveStreamInfo = {
  league: "英超",
  firstTeam: "曼联",
  secondTeam: "韦斯咸",
  streamer: "小宝",
};

export default function LivePage() {
  return (
    <main className="flex flex-col flex-grow items-start justify-start h-full pt-2">
      <div className=" w-full h-1/2 tall:h-2/5 xtall:h-2/6">
        <div className="px-2">
          <MainHeader content="正在直播" />
        </div>
        <LiveStream {...mockLiveStreamInfo} />
      </div>
      <div className="w-full h-1/2 tall:h-3/5 xtall:h-4/6">
        <LiveMatchList />
      </div>
    </main>
  );
}
