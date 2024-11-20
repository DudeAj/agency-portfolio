import Card from "./Card";
import { cardData } from "../constants";

const HowWeHelp = () => {
  return (
    <div className="flex justify-center mt-36">
      <div className="w-10/12">
        <div className="flex items-center justify-center">
          <div className=" w-full p-[0.5px] bg-gradient-to-r from-dark to-dark-blue" />
          <p className="text-white w-2/3 text-center text-lg">
            See How We Can Help Your Brand
          </p>
          <div className=" w-full p-[0.5px] bg-gradient-to-l from-dark to-dark-blue" />
        </div>
        <div className="w-full border border-dark-blue-2 rounded-3xl mt-10 p-2">
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/6xJWQRVl9nw?controls=0&modestbranding=1&rel=0"
            //@ts-ignore
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="grid grid-cols-3 mt-5 gap-5 w-full ">
          {cardData.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
