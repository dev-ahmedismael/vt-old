import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Backup = () => {
  const section = {
    title: "Backup Services",
    description:
      "Our belief in the importance of our clients' information, we provide them with a secure copying service both within their local network and the cloud network. With the digitization of so many processes, data is becoming an increasingly precious commodity. There is much more digital data than analog, meaning it can easily fall into the wrong hands. Thus, data security is a topic that needs to be looked at aggressively. A selfie in the wrong hands is like customer information in the wrong hands. To ensure data security, procedures such as data backup and encryption are implemented.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Backup;
