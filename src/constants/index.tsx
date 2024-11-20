import CarouselIcon from "../Icons/CarouselIcon";
import CheckIcon from "../Icons/CheckIcon";
import ClipboardIcon from "../Icons/ClipboardIcon";
import CodeIcon from "../Icons/CodeIcon";
import ConceptIcon from "../Icons/ConceptIcon";
import DesignIcon from "../Icons/DesignIcon";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import FireIcon from "../Icons/FireIcon";
import LightningIcon from "../Icons/LightningIcon";
import MenuIcon from "../Icons/MenuIcon";
import PerformanceIcon from "../Icons/PerformanceIcon";
import RocketIcon from "../Icons/RocketIcon";
import SeoIcon from "../Icons/SeoIcon";
import StarIcon from "../Icons/StarIcon";
import { Feature } from "../types";

export const cardData = [
  {
    icon: <DesignIcon />,
    title: "Custom Designs",
    desc: "Tailored websites meticulously crafted to reflect your brand.",
  },
  {
    icon: <PerformanceIcon />,
    title: "Fast Performance",
    desc: "Optimized for lightning-fast speed to enhance user experience.",
  },
  {
    icon: <SeoIcon />,
    title: "SEO Friendly",
    desc: "Designed to improve SEO and increase visibility effortlessly.",
  },
];

export const features: Feature[] = [
  {
    icon: <StarIcon />,
    title: "Discovery Phase",
    description:
      "Understanding your brand, objectives, and target audience to define project goals.",
    tag: "Step 01",
  },
  {
    icon: <ConceptIcon />,
    title: "Design Concept",
    description:
      "Creating initial design concepts based on insights gathered during the discovery phase.",
    tag: "Step 02",
  },
  {
    icon: <CodeIcon />,
    title: "Development & Testing",
    description:
      "Building and refining the website, ensuring functionality and compatibility across devices.",
    tag: "Step 03",
  },
  {
    icon: <RocketIcon />,
    title: "Launch & Support",
    description:
      "Deploying the finalized website and providing ongoing support to ensure long-term success.",
    tag: "Step 04",
  },
];

export const tools: Feature[] = [
  {
    icon: <StarIcon />,
    title: "Figurative",
    description: "Collaborative design and prototyping tool online.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: <DesignIcon />,
    title: "FrameX",
    description: "Interactive prototypes for advanced animations website.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: <CodeIcon />,
    title: "Shopty",
    description: "E-commerce platform for online shopping websites.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: <RocketIcon />,
    title: "Idease",
    description: "All-in-one workspace for notes and project tasks.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: <CodeIcon />,
    title: "Webflew",
    description: "Design and develop websites visually with ease.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: <RocketIcon />,
    title: "Pyflow",
    description: "Online payment processing platform for business.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
];

export const projects: Feature[] = [
  {
    icon: "https://framerusercontent.com/images/WtqxqF0rU8Wuwz43erARYa8rL8.png",
    title: "Sap - SaaS Website Template",
    description:
      "SAP is a landing page template designed to showcase SaaS and app information effectively.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: "https://framerusercontent.com/images/MIzYyZDtkQR2vF30r6pG3uFj8GM.png",
    title: "Waitlisty — Waitlist Landing Page",
    description:
      "The ideal template for crafting a sleek and efficient waitlist landing page.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: "https://framerusercontent.com/images/k3f4MBMigsjVRczeZEvwoQniMc.png",
    title: "Waitlista — Waitlist Landing Page",
    description:
      "A dark-themed landing page template designed specifically for waitlist launches.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
  {
    icon: "https://framerusercontent.com/images/S2bhNxC7MgcubwiI8Ky2y5ifrw.png",
    title: "Pix - Portfolio Landing Page",
    description:
      "Pix is the ultimate Framer portfolio template for designers and developers.",
    tag: <ExternalLinkIcon />,
    isLink: "http://facebook.com",
  },
];

export const services = [
  {
    title: "Web Design",
    description:
      "Crafting visually captivating websites that resonate with your audience and elevate your brand identity.",
    buttonText: "Contact Us",
    features: [
      {
        icon: <CheckIcon />,
        text: "Customized visual aesthetics.",
      },
      {
        icon: <CheckIcon />,
        text: "User-centric design approach.",
      },
      {
        icon: <CheckIcon />,
        text: "Responsive and mobile-friendly.",
      },
      {
        icon: <CheckIcon />,
        text: "Intuitive user interface (UI).",
      },
      {
        icon: <CheckIcon />,
        text: "Interactive and engaging layouts.",
      },
    ],
  },
  {
    title: "Web Development",
    description:
      "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
    buttonText: "Contact Us",
    features: [
      {
        icon: <CheckIcon />,
        text: "Custom backend development.",
      },
      {
        icon: <CheckIcon />,
        text: "Ongoing maintenance and support.",
      },
      {
        icon: <CheckIcon />,
        text: "Security and data protection.",
      },
      {
        icon: <CheckIcon />,
        text: "Content management systems (CMS).",
      },
      {
        icon: <CheckIcon />,
        text: "API integration and development.",
      },
    ],
  },
];

export const otherServices = [
  { title: "Logo Design", icon: <ConceptIcon /> },
  { title: "Social Post Design", icon: <CarouselIcon /> },
  { title: "Branding", icon: <LightningIcon /> },
  { title: "Packaging Design", icon: <FireIcon /> },
  { title: "SEO", icon: <MenuIcon /> },
  { title: "Content Writing", icon: <ClipboardIcon /> },
  { title: "Logo Design", icon: <ConceptIcon /> },
  { title: "Social Post Design", icon: <CarouselIcon /> },
  { title: "Branding", icon: <LightningIcon /> },
  { title: "Packaging Design", icon: <FireIcon /> },
  { title: "SEO", icon: <MenuIcon /> },
  { title: "Content Writing", icon: <ClipboardIcon /> },
  { title: "Logo Design", icon: <ConceptIcon /> },
  { title: "Social Post Design", icon: <CarouselIcon /> },
  { title: "Branding", icon: <LightningIcon /> },
  { title: "Packaging Design", icon: <FireIcon /> },
  { title: "SEO", icon: <MenuIcon /> },
  { title: "Content Writing", icon: <ClipboardIcon /> },
  { title: "Logo Design", icon: <ConceptIcon /> },
  { title: "Social Post Design", icon: <CarouselIcon /> },
  { title: "Branding", icon: <LightningIcon /> },
  { title: "Packaging Design", icon: <FireIcon /> },
  { title: "SEO", icon: <MenuIcon /> },
  { title: "Content Writing", icon: <ClipboardIcon /> },
];

export const testimonialData = [
  {
    quote:
      "Choosing Arise was the best decision we made for our digital strategy. They listened to our needs and delivered a website that surpassed all our goals.",
    rating: 5,
    author: {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc95cead66fb6d465288f392b78e4f927f56041824c1ee2a3e5f86475c5b346?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      name: "Sarah Adams",
      role: "CEO",
      company: "Apex",
    },
  },
  {
    quote:
      "The team at Arise completely transformed our online presence. Their expertise and creativity exceeded our expectations.",
    rating: 5,
    author: {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc95cead66fb6d465288f392b78e4f927f56041824c1ee2a3e5f86475c5b346?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      name: "James Carter",
      role: "Marketing Director",
      company: "BrightPath",
    },
  },
  {
    quote:
      "Arise's team took our vision and turned it into reality. The process was seamless, and the results speak for themselves.",
    rating: 5,
    author: {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc95cead66fb6d465288f392b78e4f927f56041824c1ee2a3e5f86475c5b346?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      name: "Emily White",
      role: "Founder",
      company: "InnovateX",
    },
  },
  {
    quote:
      "Working with Arise was a game changer for our business. They provided excellent service and a website that truly stands out.",
    rating: 5,
    author: {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc95cead66fb6d465288f392b78e4f927f56041824c1ee2a3e5f86475c5b346?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      name: "Michael Johnson",
      role: "Operations Manager",
      company: "Skyline Solutions",
    },
  },
  {
    quote:
      "Arise delivered beyond our expectations. Their attention to detail and customer-focused approach were outstanding.",
    rating: 5,
    author: {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9bc95cead66fb6d465288f392b78e4f927f56041824c1ee2a3e5f86475c5b346?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
      name: "Sophia Green",
      role: "CTO",
      company: "TechWave",
    },
  },
];
