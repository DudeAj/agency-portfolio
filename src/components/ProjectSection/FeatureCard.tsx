import * as React from "react";
import { FeatureCardProps } from "../../types";

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text }) => (
  <div className="flex flex-col max-w-full bg-slate-950 rounded-[100px]">
    <div className="flex gap-1.5 p-2 border border-solid border-slate-900 rounded-[100px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-5 aspect-square"
      />
      <p className="grow shrink w-36 text-slate-300">{text}</p>
    </div>
  </div>
);
