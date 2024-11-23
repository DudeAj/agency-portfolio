import React from "react";
import ComparisonItem from "./ComparisonItem";
import Logo from "../Icons/Logo";
import AngleStarIcon from "@/Icons/AngleStarIcon";
import LightningIcon from "@/Icons/LightningIcon";
import Versus from "@/Icons/Versus";

interface ComparisonData {
  otherAgencies: {
    icon: JSX.Element;
    text: string;
  };
  ourAgency: {
    icon: JSX.Element;
    text: string;
  };
}

const comparisonData: ComparisonData[] = [
  {
    otherAgencies: {
      icon: <AngleStarIcon />,
      text: "Experienced team delivering standard solutions.",
    },
    ourAgency: {
      icon: <LightningIcon />,
      text: "Highly skilled specialists delivering customized solutions.",
    },
  },
  {
    otherAgencies: {
      icon: <AngleStarIcon />,
      text: "Offers standard, template-based designs.",
    },
    ourAgency: {
      icon: <LightningIcon />,
      text: "Offers innovative, bespoke website designs.",
    },
  },
  {
    otherAgencies: {
      icon: <AngleStarIcon />,
      text: "Limited post-launch support and updates.",
    },
    ourAgency: {
      icon: <LightningIcon />,
      text: "Comprehensive post-launch support and updates.",
    },
  },
  {
    otherAgencies: {
      icon: <AngleStarIcon />,
      text: "Basic performance with average loading times.",
    },
    ourAgency: {
      icon: <LightningIcon />,
      text: "Optimal performance with fast loading times.",
    },
  },
  {
    otherAgencies: {
      icon: <AngleStarIcon />,
      text: "Basic SEO practices implemented.",
    },
    ourAgency: {
      icon: <LightningIcon />,
      text: "Advanced SEO tactics for enhanced online visibility.",
    },
  },
];

const ComparisonSection: React.FC = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col lg:flex-row px-0 lg:px-16 w-11/12 py-10 relative rounded-md">
        <div className="absolute hidden md:flex justify-center w-full left-0 top-0 pt-6">
          <Versus />
        </div>
        <div className="w-full rounded-2xl">
          <div className="h-16">
            <h2 className="self-stretch my-auto flex-1 text-center text-3xl font-bold leading-tight text-white">
              Other Agencies
            </h2>
          </div>
          {comparisonData.map((item, index) => (
            <div className="flex flex-row w-full relative rounded-2xl mb-2 lg:rounded-r-none border border-dark-blue-2 lg:border-r-0 items-center gap-3 p-3 text-lg font-medium text-gray-400 min-h-[63px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19ac5d78d864d32414811dc35100c36db408cbbe2216aa9bdeffe7b762a6fe6?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
                alt=""
                className="object-cover h-full w-full absolute top-0 left-0 right-0 bottom-0"
              />
              {item.otherAgencies.icon}
              <p className="">{item.otherAgencies.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex-1 flex justify-center h-16">
            <Logo />
          </div>
          {comparisonData.map((item, index) => (
            <div className="flex w-full bg-slate-950 mb-2 rounded-2xl lg:rounded-l-none border-l-2 border-l-deep-blue border border-dark-blue-2 p-3 gap-1.5 overflow-hidden min-h-[63px]">
              <div className="flex w-8 items-center overflow-hidden ">
                {item.ourAgency.icon}
              </div>
              <div className="flex items-center">
                <p className="text-slate-300 text-lg">{item.ourAgency.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
