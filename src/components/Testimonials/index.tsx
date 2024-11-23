"use client";
import React from "react";
import { TestimonialCard } from "./TestimonialsCard";
import { testimonialData } from "../../constants";
import Slider from "react-slick";

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <Slider {...settings}>
          {testimonialData.map((test) => (
            <TestimonialCard key={test.quote} {...test} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
