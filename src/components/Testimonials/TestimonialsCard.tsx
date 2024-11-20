import * as React from "react";
import { StarRating } from "../ui/StartRating";
import { TestimonialAuthor } from "./Author";
import { TestimonialProps } from "../../types";
import Stars from "../ui/Stars";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  rating,
  author,
}) => {
  return (
    <section className="border border-dark-blue-2 flex overflow-hidden relative flex-col items-center self-stretch px-20 py-20 mt-12 w-full rounded-3xl min-h-[416px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a9c26f8ea94f60ed62529b2cd77e6d7a9953e0e531c1ae370b995d24a5ac4?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center w-full max-w-[678px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8180ce35bc0aea6303880c23fe8e33ae217f05fa39c5926b0d1846d7194c8f?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
          alt=""
          className="object-contain aspect-[1.02] w-[61px]"
        />

        <p className="self-stretch mt-3 text-xl font-semibold text-center text-gray-400 max-md:mr-2.5 max-md:max-w-full">
          {quote}
        </p>
        <div className="mt-8">
        <Stars count={rating} />
        </div>
        {/* <StarRating count={rating} /> */}
        <TestimonialAuthor {...author} />
      </div>
    </section>
  );
};
