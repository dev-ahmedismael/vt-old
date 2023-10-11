import Backup from "@/components/ar/backup-services/Backup";
import BackupAssociated from "@/components/ar/backup-services/BackupAssociated";
import BackupFour from "@/components/ar/backup-services/BackupFour";
import BackupThree from "@/components/ar/backup-services/BackupThree";
import BackupTwo from "@/components/ar/backup-services/BackupTwo";
import Interested from "@/components/ar/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <Backup />
      <BackupTwo />
      <BackupThree />
      <BackupFour />
      <BackupAssociated />
      <Interested />
    </main>
  );
};

export default page;
