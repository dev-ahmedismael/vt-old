import React from "react";
import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";

const BusinessFour = () => {
  const section = {
    description:
      "وتعتبر هذه أهم خطوات العمل، حيث يتم ترتيب عدة اجتماعات بين شركة رؤية الأشياء لتقنية المعلومات والجهة المنفذة للنظام من أجل شرح كافة المتطلبات وطريقة سير العمل بكل التفاصيل وتحديد الأساليب للتواصل بين الطرفين.",
    imgUrl: "/images/business_systems.png",
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <LtrSection
        title={section.title}
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={section.hasBtn}
      />
    </Box>
  );
};

export default BusinessFour;
