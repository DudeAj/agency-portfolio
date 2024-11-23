import { faqItems } from "@/constants";
import Button from "../ui/Button";
import SmallButton from "../ui/SmallButton";
import { FAQItem } from "./FAQItem";
import { QuestionButton } from "./QuestionButton";

export const FAQSection = () => {
  return (
    <section className="flex justify-center font-medium text-white">
      <div className="w-11/12 md:w-10/12">
        <main className="grid grid-rows-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, i) => (
            <div>
              <div key={i} className="flex flex-wrap gap-5 text-lg">
                <FAQItem {...item} />
              </div>
            </div>
          ))}
        </main>
        <div className="flex justify-center">
          <div className="flex flex-col self-center mt-10 max-w-full bg-slate-950 rounded-full ">
            <div className="flex gap-5 justify-between py-2 pl-5 w-full border border-solid border-slate-900 rounded-[100px] max-md:max-w-full">
              <QuestionButton
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/81ca58d11589fb87bb0fb27d1780fa926e30f7af8da72f81b2cdb6ae32f9eaba?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
                text="Still Have a Question"
              />
              <SmallButton>Ask Question</SmallButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
