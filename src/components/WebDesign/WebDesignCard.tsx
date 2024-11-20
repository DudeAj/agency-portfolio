import React from "react";
import FeatureItem from "../ui/FeatureItem";
import Button from "../ui/Button";
import ExternalLinkIcon from "../../Icons/ExternalLinkIcon";
import { WebDesignCardProps } from "../../types";

const WebDesignCard: React.FC<WebDesignCardProps> = ({
  title,
  description,
  buttonText,
  features,
}) => {
  return (
    <section className="flex overflow-hidden flex-col w-full rounded-3xl bg-slate-950">
      <div className="flex flex-col p-10 w-full rounded-3xl border border-solid border-slate-900 max-md:px-5 max-md:max-w-full">
        <header className="flex justify-between gap-10 text-white">
          <h1 className="my-auto text-3xl font-bold leading-tight">{title}</h1>
          <Button className="bg-dark-blue" endIcon={<ExternalLinkIcon />}>{buttonText}</Button>
        </header>
        <p className="self-start mt-7 text-lg font-medium leading-7 text-slate-500 max-md:max-w-full">
          {description}
        </p>
        <div className="flex flex-col items-start pt-8 pr-20 pb-1 mt-9 w-full text-lg font-medium border-t border-indigo-950 text-slate-300 max-md:pr-5 max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignCard;
