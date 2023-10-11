import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Network = () => {
  const section = {
    title: "Network and Maintenance",
    description:
      "We are a Vision Things specialize in establishing, extending and maintaining computer networks and the Internet for all governmental and private sectors. We have professional technicians in extending and maintaining the network. Network installations and maintenance can be complex and require good technical knowledge. Therefore, it is important that it be performed by experienced professionals.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Network;
