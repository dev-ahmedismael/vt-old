import Associated from "@/templates/Associated";
import React from "react";

const TechAssociated = () => {
  const images = [
    "/images/associated_2/cisco.svg",
    "/images/associated_2/hpe.svg",
    "/images/associated_2/ubiquiti.svg",
    "/images/associated_2/vmware.svg",
  ];
  return <Associated images={images} />;
};

export default TechAssociated;
