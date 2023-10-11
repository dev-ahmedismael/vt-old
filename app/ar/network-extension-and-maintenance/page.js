import Interested from "@/components/ar/interested/Interested";
import Network from "@/components/ar/network-extension-and-maintenance/Network";
import NetworkAssociated from "@/components/ar/network-extension-and-maintenance/NetworkAssociated";
import NetworkFour from "@/components/ar/network-extension-and-maintenance/NetworkFour";
import NetworkThree from "@/components/ar/network-extension-and-maintenance/NetworkThree";
import NetworkTwo from "@/components/ar/network-extension-and-maintenance/NetworkTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Network />
      <NetworkTwo />
      <NetworkThree />
      <NetworkFour />
      <NetworkAssociated />
      <Interested />
    </main>
  );
};

export default page;
