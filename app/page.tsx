import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import ScheduleCarousel from "@/components/ScheduleCarousel";
import DailyChoicesList from "@/components/DailyChoicesList";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-start justify-start p-0 font-serif mt-2">
      <time className="self-start ml-3 text-xs font-black text-black">
        2024.04.22
      </time>
      <MainHeader content="本日赛程" />
      <ScheduleCarousel />
      <DailyChoicesList />
    </main>
  );
}
