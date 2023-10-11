import Interested from "@/components/en/interested/Interested";
import Vpn from "@/components/en/vpn-site-linkage-services/Vpn";
import VpnAssociated from "@/components/en/vpn-site-linkage-services/VpnAssociated";
import VpnFour from "@/components/en/vpn-site-linkage-services/VpnFour";
import VpnThree from "@/components/en/vpn-site-linkage-services/VpnThree";
import VpnTwo from "@/components/en/vpn-site-linkage-services/VpnTwo";
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
