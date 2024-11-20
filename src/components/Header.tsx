import Logo from "../Icons/Logo";
import Button from "./ui/Button";

const Header = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="flex w-10/12 items-center justify-between rounded-full">
        <div className="">
          <Logo />
        </div>
        <div className="border border-dark-blue bg-utility-deeper-blue rounded-full ">
          <ul className="flex w-full justify-evenly p-2 text-lg">
            <li className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer">About</li>
            <li className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer">Works</li>
            <li className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer">Services</li>
            <li className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer">Pricing</li>
            <li className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer">Features</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
