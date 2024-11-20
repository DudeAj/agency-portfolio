import React from "react";
import Tag from "./ui/Tag";

interface DesignProcessCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  tag?: string | JSX.Element;
  isLink?: string;
  titleWithIcon?: boolean;
}

const DesignProcessCard: React.FC<DesignProcessCardProps> = ({
  icon,
  title,
  description,
  tag,
  isLink,
  titleWithIcon,
}) => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full rounded-2xl bg-gray-950 max-md:mt-8">
        <div className="flex flex-col px-8 py-8 rounded-2xl border border-solid border-slate-900 max-md:px-5 relative">
          {tag && (
            <a href={isLink} className="absolute right-8">
              <Tag>{tag}</Tag>
            </a>
          )}
          <div
            className={`flex gap-3 ${titleWithIcon ? "flex-row" : "flex-col"}`}
          >
            <div className="bg-dark-blue-2 w-fit inline-flex p-3 rounded-lg">
              {icon}
            </div>
            <h2
              className={`${
                titleWithIcon ? "self-center" : "self-start"
              } text-xl font-semibold text-white`}
            >
              {title}
            </h2>
          </div>
          <p className="mt-2 text-lg font-medium text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignProcessCard;
