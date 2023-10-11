import Associated from "@/templates/Associated";
import React from "react";

const VpnAssociated = () => {
  const images = [
    "/images/associated_4/dray.svg",
    "/images/associated_4/fortinet.svg",
    "/images/associated_4/mikrotek.svg",
    "/images/associated_4/sophos.svg",
  ];
  return <Associated images={images} />;
};

export default VpnAssociated;
