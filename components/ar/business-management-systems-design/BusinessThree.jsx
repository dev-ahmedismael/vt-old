import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const BusinessThree = () => {
  const section = {
    description:
      "تصميم أنظمة الأعمال هي عملية مستمرة. مع تطور الأعمال، سيحتاج النظام إلى التغيير والتطور ليظل محدثًا. ومن المهم أن تكون الشركات جاهزة للتغيير والتطوير، وأن يكون لديها فريق من المحترفين المؤهلين لإدارة عملية تصميم أنظمة الأعمال.",
    imgUrl: "/images/ui.png",
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

export default BusinessThree;
