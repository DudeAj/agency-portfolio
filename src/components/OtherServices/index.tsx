import { otherServices } from "../../constants";
import Tag from "../ui/Tag";

const OtherServices = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-4/5 overflow-scroll ">
        <div className="flex gap-4">
          {otherServices.map((service,index) => (
            <Tag key={index} className="flex gap-2 flex-shrink-0">
              {service.icon} {service.title}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
