import React from "react";
import RtlSection from "@/templates/RtlSection";

const BackupThree = () => {
  const section = {
    description:
      "In this article, the importance of cloud storage and its advantages over traditional forms of data backup are highlighted. Veeam Backup & Replication v11 delivers industry‑leading Modern Data Protection for your growing enterprise, including some great NEW cloud and security capabilities in the latest V11A release. Whether you're seeking the most flexible hybrid cloud capabilities or the most robust ransomware protection and recovery options, Veeam is ready, Veeam brings hardened immutable storage options, dependable cloud‑native backup options, Continuous Data Protection and much more all under one platform, with a single portable license for all workloads.",
    imgUrl: "/images/backup.png",
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

export default BackupThree;
