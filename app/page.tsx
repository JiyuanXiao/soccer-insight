import MainHeader from "@/components/MainHeader";
import ScheduleCarousel from "@/components/ScheduleCarousel";
import ChoiceMatchList from "@/components/ChoiceMatchList";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-start justify-start h-full pt-2">
      <div className="flex flex-col h-4/12 tall:h-3/12 xtall:1/12 w-full">
        <div className="flex flex-col ml-2">
          <time className="self-start text-xs font-black text-black">
            2024.04.22
          </time>
          <MainHeader content="本日赛程" />
        </div>
        <div className="h-full">
          <ScheduleCarousel />
        </div>
      </div>
      <div className="h-8/12 tall:h-9/12 xtall:h-11/12 w-full">
        <ChoiceMatchList />
      </div>
    </main>
  );
}
