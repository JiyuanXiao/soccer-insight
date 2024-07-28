import React from "react";

interface LiveStreamProps {
  league: string;
  firstTeam: string;
  secondTeam: string;
  streamer: string;
}

const LiveStream: React.FC<LiveStreamProps> = ({
  league,
  firstTeam,
  secondTeam,
  streamer,
}) => {
  return (
    <>
      <LiveStreamVideo />
      <section className="flex gap-5 justify-between items-start mt-3 w-full font-black text-black px-2">
        <div className="flex flex-col mt-1.5">
          <h2 className="text-2xl">
            {league} {firstTeam}vs{secondTeam}
          </h2>
          <p className="mt-2 text-xs">主播｜{streamer}</p>
        </div>
        <div
          className="shrink-0 w-9 h-9 rounded-2xl bg-zinc-300"
          role="img"
          aria-label="Streamer avatar"
        />
      </section>
    </>
  );
};

const LiveStreamVideo: React.FC = () => {
  return (
    <div
      className="mt-4 w-full rounded-sm bg-zinc-300 min-h-[215px]"
      role="img"
      aria-label="Live stream video player"
    />
  );
};

export default LiveStream;
