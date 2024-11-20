import React from "react";
import FeatureCard from "./FeaturedCard";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78ce0bb4decd478e23e3515f559766fc7953a36eae5bd9e7317550383e9e1de4?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Expert Team",
    description:
      "Dedicated professionals with expertise in cutting-edge web design + development.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9218910a6d9cc37ac8bf9023fceffcb927d813bc5ac694cf11d2949af5d62bda?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Client-Centric Approach",
    description:
      "Tailoring solutions to meet your unique business needs and exceed expectations.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36abe0dbf6e1b0f33d572b12543cff34a39e2edbd1640968f49ac2ba2bdbefcc?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Proven Experience",
    description:
      "Years of successfully delivering impactful web solutions across diverse industries.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3150546b34666eaac933c26db0956deef5ffffa6fee769e918811928e85901?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Timely Delivery",
    description:
      "Meeting deadlines consistently without compromising on quality or precision.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c928641661722fe78df83852efe672c17c6bc41cfaba7cca437d3d60f9130dc?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Responsive Solutions",
    description:
      "Ensuring seamless performance across all devices for optimal user experience.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c711c2a77bcccc4ddf24cf106845c1693977dd0b4f8a5aed4f75cda51f0492b?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
    title: "Transparent Communication",
    description:
      "Clear, open lines of communication throughout every stage of your project.",
  },
];

const WhyAriseStandsOut: React.FC = () => {
  return (
    <section className="flex mt-10 justify-center">
      <div className="z-10 w-10/12 self-center mt-0 max-w-[1260px] max-md:max-w-full">
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAriseStandsOut;
