import React from "react";

interface ServerOptionProps {
  serviceType: string;
}

const ServiceOption: React.FC<ServerOptionProps> = ({ serviceType }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="size-20 bg-gray-300" />
      <div className="text-black text-lg font-semibold">{serviceType}</div>
    </div>
  );
};

export default ServiceOption;
