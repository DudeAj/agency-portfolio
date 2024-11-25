"use client";
import { useState } from "react";
import Logo from "../Icons/Logo";
import Button from "./ui/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SmallButton from "./ui/SmallButton";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      label: "About",
      id: "about",
    },
    {
      label: "Works",
      id: "works",
    },
    {
      label: "Services",
      id: "services",
    },
    {
      label: "Design",
      id: "design",
    },
    {
      label: "Pricing",
      id: "pricing",
    },
  ]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center p-8">
      <div className="flex w-full py-3 px-2 md:w-10/12 border md:border-none border-dark-blue items-center justify-between rounded-full">
        <div>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="border md:flex hidden border-dark-blue bg-utility-deeper-blue rounded-full">
          <ul className="flex w-full justify-evenly p-2 text-lg">
            {menus.map((item) => (
              <a
                href={`#${item.id}`}
                className="py-3 px-4 text-neutral-dark hover:text-white hover:cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="flex justify-center items-center mr-1 md:hidden px-2 bg-dark-blue-2 cursor-pointer hover:bg-dark-blue w-16 h-12 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 color="#fff" />
        </div>

        {/* Desktop "Contact Us" Button */}
        <div className="hidden md:flex justify-end">
          <Button>Contact Us</Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-28 w-1/3 right-5 bg-utility-dark-blue shadow-lg rounded-lg p-3 md:hidden">
          <ul className="flex flex-col gap-2 text-lg">
            {menus.map((item) => (
              <a
                href={`#${item.id}`}
                className="px-3 text-neutral-dark hover:text-white hover:bg-dark-blue rounded"
              >
                {item.label}
              </a>
            ))}
          </ul>
          <div className="mt-2">
            <SmallButton className="w-full text-center text-sm">
              Contact Us
            </SmallButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
