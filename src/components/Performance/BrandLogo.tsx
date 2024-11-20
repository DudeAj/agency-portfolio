import * as React from "react";
import { BrandLogoProps } from "../../types";

export const BrandLogo: React.FC<BrandLogoProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain mt-6 aspect-[14.08] w-[580px] max-md:max-w-full"
  />
);
