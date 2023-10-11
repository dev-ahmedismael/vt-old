import Associated from "@/templates/Associated";
import React from "react";

const CamerasAssociated = () => {
  const images = [
    "/images/associated/dahua 1.svg",
    "/images/associated/ezviz.svg",
    "/images/associated/google.svg",
    "/images/associated/hikvision.svg",
    "/images/associated/notion.svg",
    "/images/associated/ptz.svg",
    "/images/associated/ring.svg",
    "/images/associated/simplisafe.svg",
  ];
  return <Associated images={images} />;
};

export default CamerasAssociated;
