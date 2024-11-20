import React from "react";
import Button from "./ui/Button";

interface Props {
  data: { tag: string; heading: string; description: string; bgImage: string };
}

const Insights: React.FC<Props> = ({ data }) => {
  return (
    <section className="flex gap-5 justify-center w-full text-lg font-medium text-neutral-dark max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col items-center px-20 pt-28 pb-12 my-auto min-h-[320px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={data.bgImage}
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col items-center max-w-full w-auto">
          <p className="rounded-full p-2 px-4 text-lg">{data.tag}</p>
          <h2 className="mt-7 text-6xl w-3/5 font-semibold leading-tight text-center text-white">
            {data.heading}
          </h2>
          <p className="mt-4 text-center max-md:max-w-full max-w-9/12 w-2/5">
            {data.description}
          </p>
          <Button className="mt-12">Start a Project</Button>
        </div>
      </div>
      {/* <WhyUsRight /> */}
    </section>
  );
};

export default Insights;
