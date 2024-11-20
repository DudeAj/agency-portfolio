import { QuestionButtonProps } from "../../types";

export const QuestionButton = ({ iconSrc, text }: QuestionButtonProps) => {
  return (
    <button className="flex gap-2.5 my-auto text-lg">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 w-9 aspect-square rounded-[1000px]"
      />
      <span className="my-auto basis-auto">{text}</span>
    </button>
  );
};
