import React from "react";
import { cardBodyProps } from "../types";
import IconBg from "../Icons/IconBg";

interface Props {
  data: cardBodyProps;
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="border border-dark-blue-2 bg-utility-deeper-blue rounded-2xl p-8">
      <div className="w-full">
        <div className="bg-dark-blue-2 inline-flex p-3 rounded-lg">
          {data.icon}
        </div>
        <h2 className="text-white font-semibold text-xl mt-4">{data.title}</h2>
        <p className="text-neutral-dark text-lg mt-2">{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
