import React from "react";
import RtlSection from "@/templates/RtlSection";

const VpnThree = () => {
  const section = {
    description:
      "This means that the VPN is a more secure and virtual private network, in addition to the method of transmission, such as the public network, and is not limited to use by an institution and its branches only, but is used to connect to the home or office, for example, with the surveillance camera system or VOIP technology and others.",
    imgUrl: "/images/connect.png",
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

export default VpnThree;
