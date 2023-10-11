import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Musadiqa = () => {
  const section = {
    title: "Musadiqa to online signture",
    description:
      "It is an electronic platform that helps individuals and companies issue letters and contracts and add their identities, seals and signatures to them easily and easily. All documents will be certified with a QR barcode for verification .",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Musadiqa;
