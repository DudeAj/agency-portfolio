import { FAQItemProps } from '../../types';

export const FAQItem = ({ question, iconSrc }: FAQItemProps) => {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 rounded-2xl basis-0 bg-slate-950 w-fit max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between px-8 py-4 rounded-2xl border border-solid border-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="my-auto">{question}</div>
        <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 aspect-square rounded-[100px] w-[38px]" />
      </div>
    </div>
  );
};