import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Vpn = () => {
  const section = {
    title: "VPN Site Linkage Services",
    description:
      "We provide the latest web connectors by connecting all locations and branches into a single secure network. We can offer several options to connect branches in different cities into one strong network so that you can run a smooth system with ease and ease and save you the trouble of searching for a traditional and expensive way to connect branches.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Vpn;
