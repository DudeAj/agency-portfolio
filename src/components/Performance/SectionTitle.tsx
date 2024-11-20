import * as React from "react";
import { SectionTitleProps } from "../../types";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  className,
}) => (
  <div
    className={`flex flex-col max-w-full text-center text-indigo-200 bg-slate-950 rounded-[100px] w-[181px] ${className}`}
  >
    <div className="px-3.5 py-3.5 border border-solid border-indigo-950 rounded-[100px]">
      {label}
    </div>
  </div>
);
