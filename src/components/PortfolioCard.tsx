import React from "react";
import Image from "./ui/Image";
import Tag from "./ui/Tag";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";

interface PortfolioCardProps {
  icon: string;
  title: string;
  description: string;
  avatarSrc: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex overflow-hidden flex-col rounded-3xl utility-deeper-blue max-w-[615px] hover:cursor-pointer">
      <div className="flex flex-col px-8 py-8 w-full rounded-3xl border border-solid border-slate-900">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={icon}
            alt="Portfolio project preview"
            className="object-contain w-full ease-in-out duration-300 rounded-2xl aspect-[1.31] hover:scale-105 overflow-hidden"
          />
        </div>
        <div className="flex gap-9 mt-8">
          <div className="flex flex-col grow w-fit">
            <h2 className="self-start text-2xl font-bold text-white">
              {title}
            </h2>
            <p className="mt-4 text-lg font-medium leading-7 text-gray-400 ">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Tag>
              <ExternalLinkIcon />
            </Tag>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
