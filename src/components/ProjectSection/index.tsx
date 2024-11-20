import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { ProjectSectionProps } from "../../types";
import Button from "../ui/Button";
import FeatureItem from "../ui/FeatureItem";
import CheckIcon from "../../Icons/CheckIcon";

const ProjectSection: React.FC = () => {
  const options = [
    {
      icon: <CheckIcon />,
      text: "Customized design",
    },
    {
      icon: <CheckIcon />,
      text: "Ongoing support",
    },
    {
      icon: <CheckIcon />,
      text: "Fast delivery",
    },
  ];
  return (
    <section className="flex justify-center mb-32 mt-32">
      <div className="w-10/12 rounded-2xl">
        <div className="flex flex-col justify-center p-2 w-full border border-solid border-slate-950 max-md:max-w-full">
          <div className="flex overflow-hidden bg-utility-dark-blue flex-col w-full rounded-2xl max-md:max-w-full">
            <div className="border border-solid border-slate-900 rounded-md max-md:max-w-full">
              <div className="relative">
                <div className="flex flex-col w-[33%] top-0 left-0 bottom-0 absolute">
                  <img
                    loading="lazy"
                    src="https://framerusercontent.com/images/C8iXhZOAtTSW3ZP6tIsYg6xPIlU.png?scale-down-to=1024"
                    alt="Project showcase"
                    className="object-cover size-full"
                  />
                </div>

                <div className="flex flex-col ml-5">
                  <div className="flex z-10 justify-center flex-col items-center my-24 text-lg font-medium text-white">
                    <h1 className="text-5xl font-bold leading-tight text-center">
                      Start Your Project
                    </h1>
                    <p className="mt-4 text-center text-slate-500 w-1/2">
                      Contact us today to start crafting your exceptional and
                      customized website solution.
                    </p>
                    <div className="flex gap-5 items-center w-full justify-center mb-14">
                      {options.map((feature, index) => (
                        <FeatureItem
                          icon={feature.icon}
                          key={index}
                          text={feature.text}
                        />
                      ))}
                    </div>
                    <Button>Start A Project</Button>
                  </div>
                </div>

                <div className="flex flex-col w-[33%] absolute top-0 -right-5 bottom-0">
                  <img
                    loading="lazy"
                    src="https://framerusercontent.com/images/XBtz1phaWuFmJnHyQtKgezPJHUU.png?scale-down-to=1024"
                    alt="Project visualization"
                    className="object-cover grow w-full rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
