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
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
        }}
      />
      <WhyAriseStandsOut />
      <WhyUsSection
        data={{
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
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
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
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
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
          tag: "Services",
          heading: "Explore Our Core Services",
          description:
            "Discover our comprehensive range of services tailored to enhance your digital presence.",
          bgImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
        }}
      />
      {/* Services Component */}
      <WebDesignContainer />
      <WhyUsSection
        data={{
          tag: "Pricing",
          heading: "Transparent Pricing Options",
          description:
            "Explore our competitive pricing plans designed to meet diverse business needs and budgets.",
          bgImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
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
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
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
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e1162398d271588d8faaf6c2993016a91fe4aa45d0cba702b1cfb71a9b307?apiKey=5c8487259d2544f6b6ebf5c939fd2123&",
        }}
      />
      <FAQSection />
      <ProjectSection/>
      <Footer />
    </div>
  );
}

export default App;
