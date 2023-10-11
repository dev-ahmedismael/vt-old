import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";
import React from "react";

const CRTwo = () => {
  const section = {
    description:
      "تعتمد الرؤية الحاسوبية على معالجة الصور والفيديو. ويتم ذلك عن طريق تحويل الصور إلى بيانات رقمية، ومن ثم تطبيق خوارزميات الرؤية الحاسوبية على هذه البيانات لتحديد الأشياء والأحداث في الصورة. تعتمد الرؤية الحاسوبية على معالجة الصور والفيديو. ويتم ذلك عن طريق تحويل الصور إلى بيانات رقمية، ومن ثم تطبيق خوارزميات الرؤية الحاسوبية على هذه البيانات لتحديد الأشياء والأحداث في الصورة",
    imgUrl: "/images/about_eye.png",
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <LtrSection
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={false}
      />
    </Box>
  );
};

export default CRTwo;
