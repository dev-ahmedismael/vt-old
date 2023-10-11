import React from "react";
import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";

const BusinessSix = () => {
  const section = {
    description:
      "يتم في هذه الخطوة اختبار النظام قبل تسليمه للعميل، حيث يتم اختبار جميع الميزات الممكنة والتأكد من نتائج العمل والتقارير وتأثيرها على باقي النظام. ويتم ذلك بشكل عام للنظام بأكمله وبشكل خاص لكل نموذج أو خدمة في حد ذاته.",
    imgUrl: "/images/system_test.png",
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

export default BusinessSix;
