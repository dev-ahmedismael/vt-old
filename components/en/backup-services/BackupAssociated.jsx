import Associated from "@/templates/Associated";
import React from "react";

const BackupAssociated = () => {
  const images = [
    "/images/associated_5/acronis.svg",
    "/images/associated_5/alibabacloud.svg",
    "/images/associated_5/aws.svg",
    "/images/associated_5/azure.svg",
    "/images/associated_5/synology.svg",
    "/images/associated_5/veeam.svg",
  ];
  return <Associated images={images} />;
};

export default BackupAssociated;
