import React from "react";

interface FeatureItemProps {
  icon: JSX.Element;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-2 mt-5 items-center">
      {icon}
      <div className="basis-auto">{text}</div>
    </div>
  );
};

export default FeatureItem;
