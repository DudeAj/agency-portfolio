import Button from "./ui/Button";
import SmallButton from "./ui/SmallButton";
import { GoArrowRight } from "react-icons/go";
import Stars from "./ui/Stars";

const Dashboard = () => {
  return (
    <div className="pt-20 min-h-[85vh]">
      <div className="flex justify-center">
        <div className="border border-dark-blue bg-utility-deeper-blue p-2 rounded-full text-white w-auto inline-flex items-center gap-4">
          <SmallButton Icon={<GoArrowRight size={18} />}>
            Book a Call
          </SmallButton>
          <p className="pr-5 text-neutral-dark">Free Consultation Call</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className="text-6xl text-white w-1/2 text-center font-semibold leading-snug">
          Best Template to Elavate Your Tech Business
        </p>
        <p className="text-lg mt-3 text-neutral-dark w-1/2 text-center font-semibold">
          modern, responsive, and built to impress.
        </p>
        <div className="mt-10">
          <Button>Get this Template</Button>
        </div>
        <div className="mt-14">
          <Stars />
        </div>
        <p className="text-xl mt-3 text-neutral-dark w-1/2 text-center font-semibold">
          4.9/5 From 3,602 Customers
        </p>
        <div className="flex mt-6 gap-2.5">
          {[
            "https://framerusercontent.com/images/7JHrB7AuwYO60K2UwVkMmq4AU.svg",
            "https://framerusercontent.com/images/wYrfdu0osmoL4EAfnxguWtvo.svg",
            "https://framerusercontent.com/images/4O2m70p1nGFwyPrtKVylKwzbq7s.svg",
            "https://framerusercontent.com/images/yFGctKb04GugKlXSF0yN83AYM.svg",
            "https://framerusercontent.com/images/FrHSOTKZbl2Vkh3uKgitS4HTy6o.svg",
            "https://framerusercontent.com/images/tLVvhe1pg5idhcEjMhiywYCwQ.svg",
          ].map((item) => {
            return (
              <div
                key={item}
                className="border bg-utility-deeper-blue rounded-md border-dark-blue-2 w-full px-4 py-3 flex justify-center"
              >
                <img src={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
