import RtlSection from "@/templates/RtlSection";
import React from "react";

const SupplyThree = () => {
  const section = {
    description:
      "Secure Your Future with Vision Things' Cybersecurity Solutions In an era where cybersecurity threats are ever-present, Vision Things is your shield against digital attacks. Our advanced cybersecurity solutions are tailored to safeguard your critical data and systems. With us, you can rest easy knowing that your organization's information is secure. Our commitment to staying ahead of emerging threats ensures that your cybersecurity measures are always up to date, providing you with the peace of mind you need to focus on what matters most – your business's success.",
    imgUrl: "/images/device_installing.png",
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

export default SupplyThree;
