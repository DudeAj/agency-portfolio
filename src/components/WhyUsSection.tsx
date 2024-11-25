import React from "react";
import ParticleAnimation from "./ParticleAnimation";

interface Props {
  data: {
    id?: string;
    tag: string;
    heading: string;
    description: string;
    bgImage: string;
  };
}

const WhyUsSection: React.FC<Props> = ({ data }) => {
  return (
    <section
      id={data.id}
      className="flex gap-5 justify-center w-full mt-10 text-lg font-medium text-neutral-dark max-md:max-w-full"
    >
      {/* <WhyUsLeft /> */}
      <div className="flex overflow-hidden relative flex-col items-center px-20 pt-12 md:pt-28 pb-12 my-auto min-h-[320px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={data.bgImage}
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <ParticleAnimation
          particleCount={70}
          particleSize={1}
          particleSpeed={0.5}
        />
        <div className="flex relative flex-col items-center max-w-full w-auto">
          {/* <WhyUsHeader /> */}
          <p className="border rounded-full p-2 px-4 bg-dark text-md border-dark-blue-2">
            {data.tag}
          </p>
          <h2 className="mt-7 text-5xl font-bold leading-tight text-center text-white">
            {data.heading}
          </h2>
          <p className="mt-4 text-center max-md:max-w-full max-w-9/12 w-9/12">
            {data.description}
          </p>
        </div>
      </div>
      {/* <WhyUsRight /> */}
    </section>
  );
};

export default WhyUsSection;
