import Interested from "@/components/ar/interested/Interested";
import Supply from "@/components/ar/supply-and-installing-technical-devices/Supply";
import SupplyAssociated from "@/components/ar/supply-and-installing-technical-devices/SupplyAssociated";
import SupplyThree from "@/components/ar/supply-and-installing-technical-devices/SupplyThree";
import SupplyTwo from "@/components/ar/supply-and-installing-technical-devices/SupplyTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Supply />
      <SupplyTwo />
      <SupplyThree />
      <SupplyAssociated />
      <Interested />
    </main>
  );
};

export default page;
