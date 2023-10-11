import Interested from "@/components/ar/interested/Interested";
import Equipment from "@/components/ar/it-equipment-maintenance/Equipment";
import EquipmentAssociated from "@/components/ar/it-equipment-maintenance/EquipmentAssociated";
import EquipmentThree from "@/components/ar/it-equipment-maintenance/EquipmentThree";
import EquipmentTwo from "@/components/ar/it-equipment-maintenance/EquipmentTwo";
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
