import React from "react";
import AngleStarIcon from "../Icons/AngleStarIcon";
import LightningIcon from "../Icons/LightningIcon";

interface ComparisonItemProps {
  comparisonData: {
    icon: JSX.Element;
    text: string;
  };
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ comparisonData }) => {
  return (
    <div className="flex mt-5 overflow-hidden w-full rounded-2xl border border-solid border-slate-900">
      <div className="flex w-[96%] relative flex-col md:flex-row items-center gap-1.5 p-3 text-lg font-medium text-gray-400 min-h-[63px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19ac5d78d864d32414811dc35100c36db408cbbe2216aa9bdeffe7b762a6fe6?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
          alt=""
          className="object-cover absolute right-0"
        />
        {/* <AngleStarIcon /> */}
        {comparisonData.icon}
        <p className="">{comparisonData.text}</p>
      </div>
      <div className="flex w-full bg-slate-950 gap-1.5 overflow-hidden">
        <div className="flex items-center overflow-hidden gap-5 py-4 pl-2.5">
          <div className="flex self-start w-px bg-blue-600 h-[34px] rounded-[42px]" />
          {/* <LightningIcon /> */}
          {comparisonData.icon}
        </div>
        <div className="flex items-center">
          <p className="text-slate-300">{comparisonData.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonItem;
