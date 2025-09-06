import React, { useState } from "react";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import MediumText from "../components/MediumText";
import RegularText from "../components/RegularText";
import { motion } from "framer-motion";

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
    <motion.section
      className="bg-light-gray pb-16 px-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto">
        <motion.div
          className="text-center flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <TitleText> PRICING</TitleText>
          <LargeTitleText className="max-w-[627px]">
            Flexible Plans for Every Stage of Growth
          </LargeTitleText>
        </motion.div>

        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <div className="bg-mid-green text-white rounded-full flex gap-2 p-1 shadow-inner">
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
        </motion.div>

        <motion.div
          className="grid font-poppins grid-cols-1 md:px-20 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 + idx * 0.1 }}
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
              <motion.button
                className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full font-medium text-text-green transition ${
                  hoveredIdx === idx ? "bg-light-green text-white" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
