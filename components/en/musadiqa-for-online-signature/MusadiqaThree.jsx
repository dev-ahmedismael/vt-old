import React from "react";
import RtlSection from "@/templates/RtlSection";

const MusadiqaThree = () => {
  const section = {
    description:
      "Individuals will need to enter their National ID in order to register and it will be verified by a one time code sent to the mobile associated with Absher. Companies will need to enter the company's commercial registration number. After obtaining the company's information from the Ministry of Commerce, a verification code will be sent to the mobile of the company's manager registered with the Ministry of Commerce. Certified by the National Center for Digital Certification. Acceptable in courts and regular bodie. Records kept for more than 20 years. Possibility of linking via API.",
    imgUrl: "/images/book.png",
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

export default MusadiqaThree;
