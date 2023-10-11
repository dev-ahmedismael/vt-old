import Backup from "@/components/en/backup-services/Backup";
import BackupAssociated from "@/components/en/backup-services/BackupAssociated";
import BackupFour from "@/components/en/backup-services/BackupFour";
import BackupThree from "@/components/en/backup-services/BackupThree";
import BackupTwo from "@/components/en/backup-services/BackupTwo";
import Interested from "@/components/en/interested/Interested";
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
