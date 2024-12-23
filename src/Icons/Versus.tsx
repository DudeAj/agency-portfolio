import React from "react";

const Versus = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" fill="none">
      <rect
        width="69"
        height="69"
        x="1"
        y=".5"
        stroke="url(#a)"
        stroke-opacity=".5"
        rx="34.5"
      />
      <rect
        width="57"
        height="57"
        x="7"
        y="6.5"
        fill="url(#b)"
        fill-opacity=".3"
        rx="28.5"
      />
      <rect width="57" height="57" x="7" y="6.5" stroke="url(#c)" rx="28.5" />
      <g filter="url(#d)">
        <rect width="46" height="46" x="12.5" y="12" fill="url(#e)" rx="23" />
        <path
          fill="#CCD8FF"
          d="m27.576 40-3.87-10.5h1.815l3.09 8.745 3.105-8.745h1.8L29.631 40h-2.055zm5.377 1.59 3.75-13.185h1.665L34.603 41.59h-1.65zm10.307-1.41c-.72 0-1.375-.125-1.965-.375a3.353 3.353 0 0 1-1.41-1.125c-.34-.5-.515-1.115-.525-1.845h1.785c.01.56.205 1.02.585 1.38.38.35.885.525 1.515.525.56 0 1.01-.13 1.35-.39.34-.26.51-.625.51-1.095 0-.27-.045-.495-.135-.675-.09-.19-.24-.355-.45-.495-.21-.15-.49-.29-.84-.42-.35-.14-.795-.3-1.335-.48-.63-.21-1.145-.45-1.545-.72-.4-.28-.695-.6-.885-.96-.18-.37-.27-.78-.27-1.23 0-.64.15-1.18.45-1.62.31-.44.725-.77 1.245-.99a4.362 4.362 0 0 1 1.755-.345c.65 0 1.235.115 1.755.345.52.23.94.57 1.26 1.02.32.44.485.98.495 1.62H44.79c0-.43-.16-.795-.48-1.095-.32-.3-.745-.45-1.275-.45-.45-.01-.835.105-1.155.345-.31.24-.465.59-.465 1.05 0 .32.1.585.3.795.21.21.505.395.885.555.38.16.84.335 1.38.525.33.11.665.24 1.005.39.35.15.665.345.945.585.29.23.525.52.705.87.18.34.27.765.27 1.275 0 .63-.165 1.175-.495 1.635-.32.45-.755.795-1.305 1.035-.55.24-1.165.36-1.845.36z"
        />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 63.325 -27.825) scale(206.625)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#003BFF" />
          <stop offset=".75" stop-color="#003BFF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 50.275 -14.775) scale(163.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#003BFF" />
          <stop offset=".75" stop-color="#003BFF" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="a"
          x1="35.5"
          x2="35.5"
          y1="0"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#171D45" />
          <stop offset="1" stop-color="#171D45" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="35.5"
          x2="35.5"
          y1="6"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#171D45" />
          <stop offset="1" stop-color="#171D45" stop-opacity="0" />
        </linearGradient>
        <filter
          id="d"
          width="58"
          height="58"
          x="6.5"
          y="6"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2142_230290"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2142_230290"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Versus;
