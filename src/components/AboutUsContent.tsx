import React from "react";
import Button from "./ui/Button";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <h1 className="mt-3 text-5xl font-bold text-white">
        Discover Who We Are and Our Mission
      </h1>
      <p className="mt-3 text-lg font-medium leading-7 text-slate-500 max-md:mr-1.5 max-md:max-w-full">
        Discover who we are and our mission at Arise. We are a passionate team
        of creative professionals dedicated to crafting exceptional web design
        solutions. Our mission is to empower businesses with innovative websites
        that not only captivate but also drive results.
      </p>
      <div className="flex gap-4 self-start mt-6">
        <Button endIcon={<ExternalLinkIcon />}>Contact Us</Button>
        <Button
          endIcon={<ExternalLinkIcon />}
          className="bg-dark-blue border border-dark-blue-2"
        >
          View Projects
        </Button>
      </div>
    </>
  );
};

export default AboutUsContent;
