import * as React from "react";
import { StarRatingProps } from "../../types";
import StarIcon from "../../Icons/StarIcon";

export const StarRating: React.FC<StarRatingProps> = ({ count }) => {
  return (
    <div className="flex gap-1 mt-7 max-w-full w-[116px]">
      {[...Array(count)].map((_, index) => (
        <StarIcon />
      ))}
    </div>
  );
};
