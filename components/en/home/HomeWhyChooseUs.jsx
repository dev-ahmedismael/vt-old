import SectionWithCards from "@/templates/SectionWithCards";
import React from "react";

const HomeWhyChooseUs = () => {
  const section = {
    title: "Why choose Vision Things",
    description:
      "Why choose Vision Things to supply, install and operate technical equipment in the fields of IT and information in general?",
    cards: [
      {
        id: 1,
        title: "Supplying new technical equipment",
        description:
          "A vision of things company provides completely new and always better technical solutions",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
      },
      {
        id: 2,
        title: "Providing technical support for technical equipment",
        description:
          "We also provide technical support, assistance and visits to solve problems",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
      },
      {
        id: 3,
        title: "The price is better than market price",
        description:
          "Vision of Things always offers the best prices compared to the local and international market",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
      },
      {
        id: 4,
        title: "The company's experience in the field of technical",
        description:
          "The company has sufficient experience in the fields of IT by our engineers",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
      },
      {
        id: 5,
        title: "Providing the appropriate technical solutions",
        description:
          "We always choose and recommend the best choice and suitable solutions for our customers",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
      },
    ],
    hasBtn: false,
  };
  return (
    <SectionWithCards
      title={section.title}
      description={section.description}
      cards={section.cards}
      hasBtn={section.hasBtn}
    />
  );
};

export default HomeWhyChooseUs;
