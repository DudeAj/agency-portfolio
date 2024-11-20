import React from "react";
import ComparisonItem from "./ComparisonItem";
import Logo from "../Icons/Logo";

interface ComparisonData {
  otherAgencies: {
    icon: string;
    text: string;
  };
  ourAgency: {
    icon: string;
    text: string;
  };
}

const comparisonData: ComparisonData[] = [
  {
    otherAgencies: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0c21b3d990a6d9a2702406caee338875419e32efdfa207dca42658b4417aee5?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Experienced team delivering standard solutions.",
    },
    ourAgency: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6200027ff51ca09bd84ce8d719e1e160d626d2b1e8d8e40a3fae0ce6aada1a?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Highly skilled specialists delivering customized solutions.",
    },
  },
  {
    otherAgencies: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3263ce9b0a98426c0faa50e481e2016a5b7dcdcb7e575123cb07fa2dedde2480?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Offers standard, template-based designs.",
    },
    ourAgency: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ec2a27b3af5fa6a2b2211d4d172f564ac180650f7dbd02987e308a6908cb559?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Offers innovative, bespoke website designs.",
    },
  },
  {
    otherAgencies: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2426bb257918ffec1c4ecf535e3b76093f7a21a5b5fdefd58d7fc34e649e2f24?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Limited post-launch support and updates.",
    },
    ourAgency: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0506ffb13d1aa0634e8194d60facdf944edd9611fec2a2b351e0999fd01bccd1?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Comprehensive post-launch support and updates.",
    },
  },
  {
    otherAgencies: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b60ca9bd2f6055ea27665054fa9da61baaabdbcb7e58b7b02957c3cdfbe116cd?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Basic performance with average loading times.",
    },
    ourAgency: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/524072be40feb651bbc9594baaee0cbc0d562a217fd1a754667ae21544995235?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Optimal performance with fast loading times.",
    },
  },
  {
    otherAgencies: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dece095dcbfbdf0b13839b34044736424bb4d552895645bcdbf4f99114b377f?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Basic SEO practices implemented.",
    },
    ourAgency: {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6df8ba8fb52c29a8cddf1a9a34e66fb6838f034a8415cd3dc220281bb9a7b93?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      text: "Advanced SEO tactics for enhanced online visibility.",
    },
  },
];

const ComparisonSection: React.FC = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col px-16 w-11/12 py-10 rounded-md">
        <header className="flex gap-5 w-full justify-between items-center self-center max-w-full text-3xl font-bold leading-tight text-center text-white">
          <h2 className="self-stretch my-auto flex-1 text-center">Other Agencies</h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd271490a647605a12886f37fdc5234966e55a1dea8db918433879f17fcbd7a3?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
            alt=""
            className="object-contain shrink-0 self-stretch aspect-square rounded-[100px] w-[70px]"
          />
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
        </header>
        {comparisonData.map((item, index) => (
          <ComparisonItem
            key={index}
            otherAgencies={item.otherAgencies}
            ourAgency={item.ourAgency}
          />
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
