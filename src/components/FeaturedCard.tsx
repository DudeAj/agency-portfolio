import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full rounded-2xl bg-gray-950 max-md:mt-8 relative">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain z-10 ml-6 aspect-square w-10 max-md:ml-2.5 absolute -top-5"
        />
        <div className="flex flex-col px-8 py-10 rounded-2xl border border-solid border-slate-900 max-md:px-5">
          <h2 className="self-start text-xl font-semibold text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg font-medium leading-7 text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
