import Link from "next/link";
import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex z-10 gap-5 justify-between w-full h-full bg-white px-10 border-t-2 border-gray-100">
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px] mt-1"
        label="首页"
        url="/"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px] mt-1"
        label="直播"
        url="/live"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px] mt-1"
        label="资讯"
        url="/news"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px] mt-1"
        label="个人"
        url="/account"
      />
    </nav>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  url: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, url }) => {
  return (
    <Link className="flex flex-col justify-center" href={url}>
      <div className={icon} />
      <div className="text-xs font-semibold text-black whitespace-nowrap">
        {label}
      </div>
    </Link>
  );
};

export default NavigationBar;
