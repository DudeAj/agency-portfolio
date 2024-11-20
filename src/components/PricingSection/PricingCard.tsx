import React from "react";
import FeatureItem from "../ui/FeatureItem";
import Button from "../ui/Button";
import ExternalLinkIcon from "../../Icons/ExternalLinkIcon";
import CheckIcon from "../../Icons/CheckIcon";
import CloseIcon from "../../Icons/CloseIcon";
import StarIcon from "../../Icons/StarIcon";

interface PricingCardProps {
  title: string;
  price: string;
  discount: string;
  features: string[];
  notIncluded: string[];
  highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  discount,
  features,
  notIncluded,
  highlight,
}) => {
  return (
    <section className="relative mt-6">
      {highlight && (
        <div className="text-center absolute -z-10 -left-[0.5px] bg-gradient-to-b from-deep-blue to-transparent -right-[0.5px] bottom-0 -top-10 text-white text-lg py-2 rounded-3xl">
          Most Popular
        </div>
      )}
      <div className="flex flex-col pt-px pb-9 rounded-3xl border border-solid bg-utility-dark-blue border-dark-blue-2">
        <div className="flex relative flex-col items-start px-7 pt-8 pb-2 w-full rounded-3xl aspect-[0.921]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da5880284fae295cb92a6e533a93b82ac4a9a6a2427c2413e24a88cd1bbb996c?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-1 text-xl font-semibold text-indigo-200 whitespace-nowrap">
            <StarIcon />
            <h2 className="my-auto">{title}</h2>
          </div>
          <div className="flex relative gap-3 mt-8">
            <div className="grow text-4xl font-bold leading-tight text-white">
              {price}
            </div>
            <div className="flex flex-col text-base font-medium text-indigo-200 bg-slate-900 rounded-full">
              <div className="p-3 border border-solid border-indigo-950 rounded-full">
                {discount}
              </div>
            </div>
          </div>
          <p className="relative mt-7 text-lg text-gray-400">
            Pause or cancel anytime.
          </p>
          <div className="flex flex-col gap-4 w-full justify-center items-center">
            <Button className="w-full justify-center mt-4 bg-dark-blue">
              Get Started
            </Button>
            <Button
              className="border-b rounded-none border-dark-blue-2 bg-transparent hover:cursor-pointer"
              endIcon={<ExternalLinkIcon />}
            >
              Book a Call
            </Button>
          </div>
          <h3 className="relative mt-11 text-lg font-semibold text-white max-md:mt-10">
            What's included:
          </h3>
        </div>
        <div className="flex flex-col items-start pr-20 pl-8 mt-3.5 w-full text-lg font-medium text-slate-300 max-md:px-5">
          {features.map((feature, index) => (
            <FeatureItem
              icon={<CheckIcon bgColor="#3363FF" />}
              key={index}
              text={feature}
            />
          ))}
          {notIncluded.map((feature, index) => (
            <FeatureItem icon={<CloseIcon />} key={index} text={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
