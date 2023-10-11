import Interested from "@/components/ar/interested/Interested";
import Vpn from "@/components/ar/vpn-site-linkage-services/Vpn";
import VpnAssociated from "@/components/ar/vpn-site-linkage-services/VpnAssociated";
import VpnFour from "@/components/ar/vpn-site-linkage-services/VpnFour";
import VpnThree from "@/components/ar/vpn-site-linkage-services/VpnThree";
import VpnTwo from "@/components/ar/vpn-site-linkage-services/VpnTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Vpn />
      <VpnTwo />
      <VpnThree />
      <VpnFour />
      <VpnAssociated />
      <Interested />
    </main>
  );
};

export default page;
