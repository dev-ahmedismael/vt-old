import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const IOTThree = () => {
  const section = {
    description:
      "تطوير أجهزة إنترنت الأشياء: يركز هذا البحث على تطوير أجهزة إنترنت الأشياء الأكثر كفاءة وفعالية من حيث التكلفة والصديقة للبيئة. تطوير بروتوكولات إنترنت الأشياء: يركز هذا البحث على تطوير بروتوكولات إنترنت الأشياء التي تسمح للأجهزة بالتواصل مع بعضها البعض وتبادل البيانات بكفاءة. تطوير تطبيقات إنترنت الأشياء: يركز هذا البحث على تطوير تطبيقات إنترنت الأشياء التي يمكنها تحسين حياتنا في العديد من المجالات.",
    imgUrl: "/images/iot.png",
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <RtlSection
        title={section.title}
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={section.hasBtn}
      />
    </Box>
  );
};

export default IOTThree;
