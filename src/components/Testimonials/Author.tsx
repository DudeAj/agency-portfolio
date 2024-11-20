import * as React from "react";
import { TestimonialAuthorProps } from "../../types";

export const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  image,
  name,
  role,
  company,
}) => {
  return (
    <div className="flex gap-3 mt-6 max-w-full text-lg font-semibold leading-7 text-white max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={`${name} - ${role} at ${company}`}
        className="object-contain shrink-0 rounded-xl aspect-square w-[52px]"
      />
      <div>
        {name}
        <br />
        <span className="text-gray-400">
          {role} - {company}
        </span>
      </div>
    </div>
  );
};
