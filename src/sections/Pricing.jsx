import React, { useState } from "react";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import MediumText from "../components/MediumText";
import RegularText from "../components/RegularText";

const plans = [
  {
    title: "BASIC",
    price: "$19",
    period: "/month",
    description:
      "Affordable entry point to get started with essential resources.",
    features: [
      "Monthly funding tips newsletter",
      "Starter tools to track opportunities",
      "Access to free templates and guides",
      "Email support",
    ],
    button: "Get Started Free",
    border: true,
  },
  {
    title: "MOBILE APP ACCESS",
    price: "$49",
    period: "/month",
    description:
      "Core features on-the-go, built for flexibility and productivity.",
    features: [
      "Full mobile app access",
      "Save & track grant opportunities",
      "Notifications and reminders for deadlines",
      "Priority customer support",
    ],
    button: "Go Mobile",
    border: false,
  },
  {
    title: "FULL SAAS WEB APP",
    price: "$99",
    period: "/month",
    description: "Advanced features for growing organizations ready to scale.",
    features: [
      "Full web dashboard & analytics",
      "Team collaboration tools",
      "Custom reporting and exports",
      "CRM & project tool integration",
    ],
    button: "Scale with Us",
    border: true,
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("Monthly");

  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="bg-light-gray pb-16 px-2">
      <div className="mx-auto">
        <div className="text-center flex flex-col items-center mb-8">
          <TitleText> PRICING</TitleText>
          <LargeTitleText className="max-w-[627px]">
            Flexible Plans for Every Stage of Growth
          </LargeTitleText>
        </div>

        <div className="flex justify-center mb-10">
          <div className=" bg-mid-green text-white rounded-full flex gap-2 p-1 shadow-inner">
            {["Monthly", "Annual"].map((type) => (
              <button
                key={type}
                className={`px-6 py-2 cursor-pointer rounded-full font-medium transition ${
                  billing === type
                    ? "bg-white text-mid-green"
                    : "bg-transparent text-white"
                }`}
                onClick={() => setBilling(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid font-poppins grid-cols-1 px-20 md:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl shadow-sm flex flex-col justify-between ${
                plan.border
                  ? "border-2 bg-transparent border-dashed border-mid-green/50"
                  : "bg-white"
              }`}
            >
              <div>
                <div className="flex border-b mt-4 border-[#D0D0D0] pb-4 space-y-2 flex-col">
                  <MediumText className="font-medium text-text-green text-[20px]">
                    {plan.title}
                  </MediumText>
                  <RegularText className="text-text-green-fade">
                    {plan.description}
                  </RegularText>
                  <div className="text-4xl font-bold text-mid-green mb-2">
                    {plan.price}
                    <span className="text-base text-text-green-fade font-normal">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="mb-6 pt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-text-green-fade"
                    >
                      <img src="/icons/check.svg" alt="Check icon" />
                      <RegularText className="text-text-green-fade text-[16px] font-normal">
                        {feature}
                      </RegularText>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full font-medium text-text-green transition ${
                  hoveredIdx === idx ? "bg-light-green text-white" : ""
                }`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img
                  src="/icons/go.svg"
                  className={`transition-transform ${
                    hoveredIdx === idx ? "rotate-45" : ""
                  }`}
                  alt="Arrow Right"
                />
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
