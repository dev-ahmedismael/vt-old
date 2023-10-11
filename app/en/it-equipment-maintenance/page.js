import Interested from "@/components/en/interested/Interested";
import Equipment from "@/components/en/it-equipment-maintenance/Equipment";
import EquipmentAssociated from "@/components/en/it-equipment-maintenance/EquipmentAssociated";
import EquipmentThree from "@/components/en/it-equipment-maintenance/EquipmentThree";
import EquipmentTwo from "@/components/en/it-equipment-maintenance/EquipmentTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Equipment />
      <EquipmentTwo />
      <EquipmentThree />
      <EquipmentAssociated />
      <Interested />
    </main>
  );
};

export default page;
