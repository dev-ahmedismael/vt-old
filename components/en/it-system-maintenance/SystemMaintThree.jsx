import RtlSection from "@/templates/RtlSection";
import React from "react";

const SystemMaintThree = () => {
  const section = {
    description:
      "IT system maintenance is an important part of any IT infrastructure. By performing regular maintenance, organizations can help to ensure that their IT systems are running smoothly and efficiently, and that their data is protected. IT system maintenance is the process of keeping IT systems in good working order. It includes tasks such as: Troubleshooting and repairing problems, Updating software and hardware, Performing backups and Monitoring performance.",
    imgUrl: "/images/maintenance.png",
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

export default SystemMaintThree;
