import React from "react";
import AboutUsContent from "./AboutUsContent";
import TeamMember from "./TeamMember";
import Tag from "./ui/Tag";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Ryan Matthews",
      role: "Co Founder",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a024c50c1caf18ebc223bc409e9cedc4e91739c9383eb13312bfa96d93ed77f?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
    },
    {
      name: "David Parker",
      role: "Co Founder",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/68a4f0ab6fab538fdad133c243e29ee8010768ba9b3d5eca84aa6ed0a8caef0f?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123",
    },
  ];

  return (
    <section className="flex justify-center mt-32">
      <div className="flex w-10/12 gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab94dee6c647b6db4cfda9cc764a2a905396bf195e1be1b3e1cd15fb9bef067?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
            alt="About Us illustration"
            className="object-contain grow w-full rounded-3xl aspect-[1.19] max-md:mt-10 "
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 ">
            <Tag className="text-lg">About Us</Tag>
            <AboutUsContent />
            <div className="flex flex-col mt-8 w-full text-base rounded-2xl bg-slate-950 ">
              <div className="flex flex-wrap gap-5 justify-between items-start px-3.5 py-3 w-full rounded-2xl border border-solid border-slate-900">
                {teamMembers.map((member, index) => (
                  <React.Fragment key={member.name}>
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      imageSrc={member.imageSrc}
                    />
                    {index === 0 && (
                      <>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4da3fc1492d78bfc0b219b2bb1834a4a9e5e2a73049de86e0eeeb2c7268633c?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
                          alt=""
                          className="object-contain shrink-0 rounded-xl aspect-square"
                        />
                        <div className="flex shrink-0 self-stretch w-px bg-indigo-950 " />
                      </>
                    )}
                  </React.Fragment>
                ))}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a384170466bef078698526e66691f2e4319f653cc1da78b576a5f9aee7e08359?placeholderIfAbsent=true&apiKey=5c8487259d2544f6b6ebf5c939fd2123"
                  alt=""
                  className="object-contain shrink-0 rounded-xl aspect-square w-[42px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
