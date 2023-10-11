import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const SystemMaint = () => {
  const section = {
    title: "IT System Maintenance",
    description:
      "IT system maintenance is important for several reasons. First, it can help to prevent problems from occurring. Second, it can help to keep systems running smoothly. Third, it can help to extend the life of systems. Fourth, it can help to protect data.",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default SystemMaint;
