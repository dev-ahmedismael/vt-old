import Interested from "@/components/ar/interested/Interested";
import EquipmentAssociated from "@/components/ar/it-equipment-maintenance/EquipmentAssociated";
import SystemMaint from "@/components/ar/it-system-maintenance/SystemMaint";
import SystemMaintThree from "@/components/ar/it-system-maintenance/SystemMaintThree";
import SystemMaintTwo from "@/components/ar/it-system-maintenance/SystemMaintTwo";
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
