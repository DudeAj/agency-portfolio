import { FaStar } from "react-icons/fa";

const Stars = ({ count }: { count: number }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_item) => (
        <FaStar color="#FFFF00" />
      ))}
    </div>
  );
};

export default Stars;