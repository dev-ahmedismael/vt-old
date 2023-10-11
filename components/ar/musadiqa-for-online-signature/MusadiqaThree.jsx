import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const MusadiqaThree = () => {
  const section = {
    description:
      "سيحتاج الأفراد إلى إدخال بطاقة الهوية الوطنية الخاصة بهم من أجل التسجيل وسيتم التحقق منها من خلال رمز لمرة واحدة يتم إرساله إلى الهاتف المحمول المرتبط بأبشر. ستحتاج الشركات إلى إدخال رقم السجل التجاري للشركة. بعد الحصول على معلومات الشركة من وزارة التجارة سيتم إرسال رمز التحقق على جوال مدير الشركة المسجل لدى وزارة التجارة. معتمدة من المركز الوطني للتصديق الرقمي. مقبول في المحاكم والهيئات العادية. تم الاحتفاظ بالسجلات لأكثر من 20 عامًا. إمكانية الربط عبر API.",
    imgUrl: "/images/book.png",
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

export default MusadiqaThree;
