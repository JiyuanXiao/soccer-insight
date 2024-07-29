import React from "react";
import NewCarousel from "@/components/NewsCarousel";
import AdviseList from "@/components/AdviseList";

export default function NewsPage() {
  return (
    <main className="flex flex-col flex-grow items-center justify-start h-full pt-2">
      <div className="h-1/2 short:h-21/50 tall:h-5/12 xtall:h-16/50 xxtall:h-14/50">
        <NewCarousel />
      </div>
      <div className="w-full h-1/2 short:h-29/50 tall:h-7/12 xtall:h-34/50 xxtall:h-36/50">
        <AdviseList />
      </div>
    </main>
  );
}
