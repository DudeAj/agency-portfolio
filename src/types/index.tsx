export interface cardBodyProps {
  title: string;
  desc: string;
  icon?: JSX.Element;
}

export interface Feature {
  icon: JSX.Element | string;
  title: string;
  description: string;
  tag?: string | JSX.Element;
  isLink?: string;
}

export interface WebDesignCardProps {
  features: Array<{
    icon: JSX.Element;
    text: string;
  }>;
  title: string;
  description: string;
  buttonText: string;
}

export interface BrandLogoProps {
  src: string;
  alt: string;
}

export interface SectionTitleProps {
  label: string;
  className?: string;
}

export interface StarRatingProps {
  count: number;
}

export interface TestimonialAuthorProps {
  image: string;
  name: string;
  role: string;
  company: string;
}

export interface TestimonialProps {
  quote: string;
  rating: number;
  author: TestimonialAuthorProps;
}

export interface FAQItemProps {
  question: string;

  answer: string;
}

export interface QuestionButtonProps {
  iconSrc: string;
  text: string;
}

export interface FeatureCardProps {
  icon: string;
  text: string;
}

export interface ProjectSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  leftImage: string;
  rightImage: string;
  features: FeatureCardProps[];
}
