import Button from "../ui/Button";
import SmallButton from "../ui/SmallButton";
import { FAQItem } from "./FAQItem";
import { QuestionButton } from "./QuestionButton";

const faqItems = [
  {
    question: "What services does Arise offer?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9cd45fffc628cc9b4841b5c2d1a355757199d612b703bc8c541350a2100db9de?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "Do you provide hosting services?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/28038220d9f8faea37017fa66acabb65267ccefd17bc484ada6872a70512abe6?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "How long does a typical project take?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b3f73ce7191187675dcd11aae730f65fe5a3c5562bd0629d651163b0bd1dec9?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "How do you handle revisions during the process?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fa8bd3aad421ea91eb55befaa3d345f86e6cec85ef2e879e87bef7d7cf0918aa?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "Do you offer ongoing support after the website launch?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1428f32632b3f824a105d021ba368f05f8737f28041d3ffb78d80beb967653f9?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "Can you help with content creation for my website?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b5337640098ec235d0093f59e0a012fcc376be7eb059cd456062ca44d9048f75?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "Can I see examples of your previous work?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ea968a87c840c311099b30dff6a749536c1bd5a657ad1ded89478c6a41c98280?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "Is SEO included in your web design packages?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db286da976664ae6f423e6cd5204a6ea084298e7412aed55eadce11e5e455599?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "What is your pricing structure like?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e8d3bdf03bcc5233ef1c0274d4ebac04b5540b30903944dfcb64e0bfc54f37bf?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
  {
    question: "What makes Arise different from other agencies?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a13489d976746501ee60880cfb1112f0e4eb20fd7c9d2a31a1d919e4fd47210d?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
  },
];

export const FAQSection = () => {
  return (
    <section className="flex justify-center font-medium text-white">
      <div className="w-10/12">
        <main className="grid grid-cols-2 gap-4">
          {faqItems.map((item, i) => (
            <div key={i} className="flex flex-wrap gap-5 text-lg">
              <FAQItem {...item} />
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
