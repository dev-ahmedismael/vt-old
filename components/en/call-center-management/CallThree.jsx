import React from "react";
import RtlSection from "@/templates/RtlSection";

const CallThree = () => {
  const section = {
    description:
      "A network phone has many advantages over a traditional phone: Better Voice Quality: A mesh phone offers better voice quality than a traditional phone, due to the use of advanced audio compression protocols. More features: A network phone offers many features that a traditional phone does not, such as bulk transfer, auto attendant, voice messaging, and email. Greater Flexibility: A mesh phone can be used with any IP network, providing greater flexibility in portability and scaling Lower cost: A network phone can cost less than a conventional phone in the long run, due to the lower cost of calls and less need for maintenance",
    imgUrl: "/images/company_call_center.png",
    hasBtn: false,
  };
  return (
    <RtlSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
    />
  );
};

export default CallThree;
