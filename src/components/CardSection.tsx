import React from "react";
import { Feature } from "../types";

interface CardSectionProps {
  columns?: number;
  features: Feature[];
  gap?: number;
  titleWithIcon?: boolean;
  Card: any;
}

const CardSection: React.FC<CardSectionProps> = ({
  columns = 2,
  features,
  gap = 8,
  titleWithIcon,
  Card,
}) => {
  return (
    <section className="flex mt-10 justify-center">
      <div className="z-10 w-11/12 lg:w-10/12 self-center mt-0">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-3 md:gap-${gap}`}>
          {features.map((feature, index) => (
            <Card titleWithIcon={titleWithIcon} key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
