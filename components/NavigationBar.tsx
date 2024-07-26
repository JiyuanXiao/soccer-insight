import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex z-10 gap-5 justify-between self-center w-full bg-white px-10">
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px]"
        label="首页"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px]"
        label="直播"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px]"
        label="资讯"
      />
      <NavItem
        icon="shrink-0 rounded-full bg-zinc-300 h-[25px] w-[25px]"
        label="个人"
      />
    </nav>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col">
      <div className={icon} />
      <div className="text-xs font-semibold text-black whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default NavigationBar;
