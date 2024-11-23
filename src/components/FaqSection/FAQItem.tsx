"use client";
import { useState, useRef } from "react";
import { FAQItemProps } from "../../types";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Reference to calculate content height

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full flex flex-1 grow shrink-0 rounded-2xl basis-0 bg-slate-950 max-md:max-w-full">
      <div className="w-full gap-5 px-4 md:px-8 py-4 items-center rounded-2xl border border-solid border-slate-900">
        <div className="flex w-full justify-between gap-5">
          <div className="my-auto w-full">{question}</div>
          <div
            className="aspect-square rounded-full w-12 border-dark-blue-2 h-12 flex justify-center items-center border cursor-pointer"
            onClick={handleExpanded}
          >
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {/* Animated content */}
        <div
          className="overflow-hidden transition-[height] duration-500 ease-in-out"
          style={{
            height: expanded ? contentRef.current?.scrollHeight as number+10 : 0,
          }}
        >
          <div ref={contentRef} className="border-t border-dark-blue-2 mt-2">
            <p className="text-neutral-dark pt-4">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
