import Associated from "@/templates/Associated";
import React from "react";

const NetworkAssociated = () => {
  const images = [
    "/images/associated_3/apc1.svg",
    "/images/associated_3/cisco.svg",
    "/images/associated_3/hewlett.svg",
    "/images/associated_3/hpe.svg",
    "/images/associated_3/ubiquiti.svg",
    "/images/associated_3/vmware.svg",
  ];
  return <Associated images={images} />;
};

export default NetworkAssociated;
