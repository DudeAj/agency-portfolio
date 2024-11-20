import * as React from "react";
import { SectionTitle } from "./SectionTitle";
import { BrandLogo } from "./BrandLogo";
import Tag from "../ui/Tag";
import CardBG from "../../Icons/CardBG";

const data = [
  {
    value: "150+",
    label: "Happy Customers",
  },
  {
    value: "80+",
    label: "Project Completed",
  },
  {
    value: "12+",
    label: "Years of Experience",
  },
  {
    value: "86+",
    label: "Team Members",
  },
];

const Performance: React.FC = () => {
  return (
    <main className="flex justify-center mt-24">
      <div className="w-10/12 flex gap-5">
        <section className="grid grid-cols-2 w-6/12 gap-4 py-5">
          {data.map((item) => {
            return (
              <div className="border bg-utility-dark-blue border-dark-blue-2 py-12 rounded-lg flex justify-center items-center relative">
                <div className="absolute top-0 left-0 w-full bottom-0">
                <CardBG />
                </div>
                <div>
                  <p className="text-5xl text-center text-white font-bold">
                    {item.value}
                  </p>
                  <p className="text-neutral-dark text-lg mt-2">{item.label}</p>
                </div>
              </div>
            );
          })}
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c7093b-993c-4b4d-a7dd-db9bd48f4e7a?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
            alt="Performance analytics visualization"
            className="object-contain grow w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
          /> */}
        </section>

        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full text-lg font-medium max-md:mt-10 max-md:max-w-full">
            {/* <SectionTitle label="Results & Analytics" /> */}
            <Tag>Results & Analytics</Tag>
            <h1 className="self-start mt-6 text-5xl font-bold text-white leading-[50px] max-md:max-w-full">
              Performance Insights and <br /> Analytics Overview
            </h1>

            <div className="flex flex-wrap gap-3 mt-14 text-center text-zinc-200 max-md:mt-10">
              <p className="grow">Trusted by Leading Brands</p>
              <div className="flex shrink-0 my-auto max-w-full h-px w-[351px]" />
            </div>

            <div className="flex mt-6 w-full overflow-scroll border-l border-deep-blue">
              {[
                "https://framerusercontent.com/images/7JHrB7AuwYO60K2UwVkMmq4AU.svg",
                "https://framerusercontent.com/images/wYrfdu0osmoL4EAfnxguWtvo.svg",
                "https://framerusercontent.com/images/4O2m70p1nGFwyPrtKVylKwzbq7s.svg",
                "https://framerusercontent.com/images/yFGctKb04GugKlXSF0yN83AYM.svg",
                "https://framerusercontent.com/images/FrHSOTKZbl2Vkh3uKgitS4HTy6o.svg",
                "https://framerusercontent.com/images/tLVvhe1pg5idhcEjMhiywYCwQ.svg",
              ].map((item) => {
                return (
                  <div
                    key={item}
                    className="bg-utility-deeper-blue w-full px-2 py-2 flex justify-center"
                  >
                    <img className="min-w-[100px]" src={item} />
                  </div>
                );
              })}
            </div>
            {/* <BrandLogo
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe79f12d96430793e138a4ff0c0c8f7f491250a79f298a5bbbaaefadd874eb73?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
              alt="Trusted brands logos"
            /> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Performance;
