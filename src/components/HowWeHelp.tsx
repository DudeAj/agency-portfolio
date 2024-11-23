import Card from "./Card";
import { cardData } from "../constants";

const HowWeHelp = () => {
  return (
    <div className="flex justify-center mt-4 md:mt-24">
      <div className="w-11/12 md:w-10/12">
        <div className="flex items-center justify-center">
          <div className="w-1/4 md:w-full p-[0.5px] bg-gradient-to-r from-dark to-dark-blue" />
          <p className="text-white w-full md:w-2/3 text-center text-lg">
            See How We Can Help Your Brand
          </p>
          <div className="w-1/4 md:w-full p-[0.5px] bg-gradient-to-l from-dark to-dark-blue" />
        </div>
        <div className="w-full border border-dark-blue-2 rounded-3xl mt-10 p-2">
          <iframe
            width="100%"
            className="h-[300px] md:h-[700px]"
            src="https://www.youtube.com/embed/6xJWQRVl9nw?controls=0&modestbranding=1&rel=0"
            //@ts-ignore
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 w-full ">
          {cardData.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
