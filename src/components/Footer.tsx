"use client";
import React, { useState } from "react";
import Logo from "../Icons/Logo";
import Button from "./ui/Button";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const [social, setSocial] = useState([
    {
      link: "https://facebook.com",
      icon: <IoLogoLinkedin size={20} color="#a7adbe" />,
    },
    {
      link: "https://x.com",
      icon: <FaXTwitter size={20} color="#a7adbe" />,
    },
    {
      link: "https://instagram.com",
      icon: <IoLogoInstagram size={20} color="#a7adbe" />,
    },
  ]);

  const [home, setHome] = useState([
    { text: "About" },
    { text: "Services" },
    { text: "Pricings" },
    { text: "Tools" },
    { text: "Works" },
  ]);

  const [others, setOthers] = useState([
    { text: "Features" },
    { text: "Process" },
    { text: "Testimonials" },
    { text: "Privacy Policy" },
    { text: "404" },
  ]);

  const [contacts, setContacts] = useState([
    { text: "Contact" },
    { text: "FAQ's" },
  ]);
  return (
    <div className="border-t border-dark-blue-2 flex">
      <div className="flex flex-col md:flex-row w-full">
        <div className="border-r border-dark-blue-2 w-full md:w-2/5 pb-8 md:pb-20 pt-12 md:pr-12 px-8 md:pl-20">
          <Logo />
          <p className="text-white font-semibold text-xl mt-10">
            Book a Call For Free Consultation
          </p>
          <p className="text-neutral-dark text-lg mt-2">
            Experienced team delivering exceptional digital solutions tailored
            to your brand.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Button>Contact Us</Button>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-neutral-dark text-lg mt-8">Our Social Handels</p>
          <div className="flex gap-2 mt-3">
            {social.map((item) => {
              return (
                <motion.div
                  key={item.link}
                  whileTap={{ scale: 0.95 }}
                  whileDrag={{ scale: 0.9, rotate: 10 }}
                  drag
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ y: -5, scale: 1.1 }} // Moves the element up by 10px
                >
                  <a href={item.link}>
                    <div className="bg-dark-blue-2 hover:bg-dark-blue inline-flex p-3 rounded-lg">
                      {item.icon}
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
        <div className=" text-white w-full md:w-3/5 flex flex-col justify-between">
          <div className="flex justify-around p-8 md:p-14">
            <div>
              <p className="text-xl font-semibold">Home</p>
              <div className="mt-5 flex flex-col gap-4">
                {home.map((item) => (
                  <a
                  key={item.text}
                    href={`#${item.text}`}
                    className="text-lg  text-neutral-dark leading-relaxed"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xl">Other</p>
              <div className="mt-5 flex flex-col gap-4">
                {others.map((item) => (
                  <a key={item.text} className="text-lg  text-neutral-dark leading-relaxed">
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xl">Contact</p>
              <div className="mt-5 flex flex-col gap-4">
                {contacts.map((item) => (
                  <a key={item.text} className="text-lg  text-neutral-dark leading-relaxed">
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-dark-blue-2 flex justify-between items-center p-4 md:px-24">
            <p className="">Template by Ajay</p>
            <p className="text-neutral-dark">
              @{new Date().getFullYear()}, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
