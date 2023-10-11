import Interested from "@/components/en/interested/Interested";
import EquipmentAssociated from "@/components/en/it-equipment-maintenance/EquipmentAssociated";
import SystemMaint from "@/components/en/it-system-maintenance/SystemMaint";
import SystemMaintThree from "@/components/en/it-system-maintenance/SystemMaintThree";
import SystemMaintTwo from "@/components/en/it-system-maintenance/SystemMaintTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <SystemMaint />
      <SystemMaintTwo />
      <SystemMaintThree />
      <EquipmentAssociated />
      <Interested />
    </main>
  );
};

export default page;
