import React from "react";

interface MainHeaderProps {
  content: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ content }) => {
  return (
    <header>
      <h1 className="mt-2 w-full text-4xl font-black text-black tracking-[2.87px]">
        {content}
      </h1>
    </header>
  );
};

export default MainHeader;
