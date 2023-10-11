import React from "react";
import RtlSection from "@/templates/RtlSection";

const ComThree = () => {
  const section = {
    description:
      "A network phone (IP phone) is a phone that connects to the Internet Protocol (IP) network from the traditional telephone network (network phone usually in companies and organizations that have their own Internet Protocol network). A network phone has many advantages over a traditional phone, including: Better Voice Quality: A network telephone provides better voice quality than a traditional telephone, due to the use of advanced audio compression protocols, More features: A network phone offers many features that a traditional phone does not, such as group transfer, auto-answer, and messaging, Greater Flexibility: A mesh phone can be used with any IP network, providing greater flexibility in portability and scaling, Lower cost: A network phone can cost less than a traditional phone in the long run, due to its lower cost of calls and lower maintenance.",
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

export default ComThree;
