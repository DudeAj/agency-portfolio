import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import HowWeHelp from "../components/HowWeHelp";
import OurMission from "../components/OurMission";
import Footer from "../components/Footer";
import WhyUsSection from "../components/WhyUsSection";
import WhyAriseStandsOut from "../components/WhyAriseStandsOut";
import CardSection from "../components/CardSection";
import { features, projects, tools } from "../constants";
import AboutUs from "../components/AboutUs";
import DesignProcessCard from "../components/DesignProcessCard";
import PortfolioCard from "../components/PortfolioCard";
import Insights from "../components/Insights";
import ComparisonSection from "../components/ComparisonSection";
import WebDesignContainer from "../components/WebDesign";
import PricingSection from "../components/PricingSection";
import Performance from "../components/Performance";
import Testimonials from "../components/Testimonials";
import { FAQSection } from "../components/FaqSection";
import ProjectSection from "../components/ProjectSection";

function App() {
  return (
    <div className="">
      <Header />
      <Dashboard />
      <HowWeHelp />
      <OurMission />
      <WhyUsSection
        data={{
          tag: "Why Us",
          heading: "Why Arise Stands Out",
          description:
            "Discover why Arise excels in delivering innovative, client-focused web design solutions.",
          bgImage:
            'https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg',
        }}
      />
      <WhyAriseStandsOut />
      <WhyUsSection
        data={{
          id:'design',
          tag: "Process",
          heading: "Our Design Process",
          description:
            "Explore our streamlined approach to creating bespoke websites that align with your goals.",
          bgImage:
            "https://framerusercontent.com/images/IJB1pgcBugatOTAc7yAHhqLQu0.svg",
        }}
      />
      <CardSection
        Card={DesignProcessCard}
        columns={2}
        gap={8}
        features={features}
      />
      <AboutUs />
      <WhyUsSection
        data={{
          tag: "Tools",
          heading: "Tools We Utilize for Excellence",
          description:
            "Discover the advanced tools and technologies we leverage to create cutting-edge websites.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />
      <CardSection
        Card={DesignProcessCard}
        titleWithIcon
        columns={3}
        gap={4}
        features={tools}
      />
      <WhyUsSection
        data={{
          id:'works',
          tag: "Works",
          heading: "Explore Our Recent Projects",
          description:
            "Browse through our portfolio showcasing diverse, innovative web design projects and client successes.",
          bgImage:
            "https://framerusercontent.com/images/IJB1pgcBugatOTAc7yAHhqLQu0.svg",
        }}
      />
      {/* Recent Projects Components */}
      <CardSection
        Card={PortfolioCard}
        titleWithIcon
        columns={2}
        gap={8}
        features={projects}
      />
      {/* insights */}
      <Insights
        data={{
          tag: "Industry Insights",
          heading: "Website Design Impacts Customer Retention",
          description:
            "Capture and retain more customers by optimizing your website's design for engagement.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />

      <WhyUsSection
        data={{
          tag: "Comparison",
          heading: "Choosing Arise Over Others",
          description:
            "See why Arise stands out with superior service, innovation, and client satisfaction benchmarks.",
          bgImage:
            "https://framerusercontent.com/images/IJB1pgcBugatOTAc7yAHhqLQu0.svg",
        }}
      />
      {/* Comparision Component */}
      <ComparisonSection />
      <WhyUsSection
        data={{
          id:'services',
          tag: "Services",
          heading: "Explore Our Core Services",
          description:
            "Discover our comprehensive range of services tailored to enhance your digital presence.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />
      {/* Services Component */}
      <WebDesignContainer />
      <WhyUsSection
        data={{
          id:'pricing',
          tag: "Pricing",
          heading: "Transparent Pricing Options",
          description:
            "Explore our competitive pricing plans designed to meet diverse business needs and budgets.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />
      <PricingSection />
      <Performance />
      {/* Results */}
      <WhyUsSection
        data={{
          tag: "Testimonials",
          heading: "Client Success Stories",
          description:
            "Discover what our clients say about their experiences and success working with us.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />
      <Testimonials />
      {/* Testimonials */}
      <WhyUsSection
        data={{
          tag: "FAQ's",
          heading: "Frequently Asked Questions",
          description:
            "Answers to common questions about our services, processes, and what sets us apart.",
          bgImage:
            "https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg",
        }}
      />
      <FAQSection />
      <ProjectSection/>
      <Footer />
    </div>
  );
}

export default App;
