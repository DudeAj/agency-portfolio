const CheckIcon = ({ bgColor = "#08951E" }: { bgColor?: string }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="kWedhcFiMFVAegynh5rxadiQA0.svg" clip-path="url(#clip0_49_4849)">
        <path
          id="Vector"
          d="M20 10.4414C20 4.91856 15.5228 0.441406 10 0.441406C4.47715 0.441406 0 4.91856 0 10.4414C0 15.9643 4.47715 20.4414 10 20.4414C15.5228 20.4414 20 15.9643 20 10.4414Z"
          fill={bgColor}
        />
        <path
          id="Vector_2"
          d="M14.246 7.92188L8.72196 13.4219L6.20996 10.9219"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_49_4849">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.441406)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
