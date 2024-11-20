import React from "react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const features2 = [
    {
      title: "Basic",
      amount: "$3000/m",
      discount: "15% off",
      onGetStarted: () => {},
      onBookCall: () => {},
      features: ["Enjoy limitless design requests.", "One request at a time"],
      notIncluded: [
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
    },
    {
      title: "Standard",
      amount: "$3,995/m",
      discount: "15% off",
      onGetStarted: () => {},
      onBookCall: () => {},
      highlight:true,
      features: [
        "Enjoy limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
      ],
      notIncluded: ["Easy credit-card payments", "Pause or cancel anytime"],
    },
    {
      title: "Pro",
      amount: "$5,995/m",
      discount: "15% off",
      onGetStarted: () => {},
      onBookCall: () => {},
      features: [
        "Enjoy limitless design requests.",
        "One request at a time",
        "Average 48 hours delivery",
        "Unlimited brands",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
      notIncluded: [],
    },
  ];

  return (
    <div className="flex mt-6 justify-center">
      <div className="flex gap-10">
        {features2.map((item) => (
          <PricingCard
            {...item}
            title={item.title}
            price={item.amount}
            discount={item.discount}
            features={item.features}
            notIncluded={item.notIncluded}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
