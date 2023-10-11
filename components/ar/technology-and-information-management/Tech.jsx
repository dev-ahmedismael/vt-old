import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Tech = () => {
  const section = {
    title: "إدارة مركز تكنولوجيا المعلومات",
    description:
      "في عالم اليوم الذي يتسم بالتقنيات المتسارعة باستمرار، أصبحت إدارة مركز تكنولوجيا المعلومات (IT) أمرًا بالغ الأهمية للشركات والمؤسسات من جميع الأحجام. مركز تكنولوجيا المعلومات مسؤول عن توفير البنية التحتية والتطبيقات والدعم الفني الذي يحتاجه الموظفون والعملاء لإنجاز عملهم",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Tech;
