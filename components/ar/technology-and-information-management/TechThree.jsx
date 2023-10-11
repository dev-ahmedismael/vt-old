import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const TechThree = () => {
  const section = {
    description:
      "مراقبة وتحديث وإدارة تصحيحات الأمان لتحسين الشبكة والخوادم وأجهزة الكمبيوتر والأجهزة التقنية الأخرى بجميع أنواعها. الحفاظ على البيانات من أخطاء المستخدم. حافظ على أمان أنظمة عملك وبياناتك من خلال المراقبة في الوقت الفعلي واستمرارية الأعمال وحلول التعافي من الكوارث. قم بملء الفجوات وتوسيع خبرتك التقنية من خلال الدعم الفني المصمم خصيصًا لتلبية احتياجات عملك المحددة. دعنا نساعدك في العثور على مزود الإنترنت المناسب وإدارة شبكتك بشكل مثالي.",
    imgUrl: "/images/it_mangement.png",
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

export default TechThree;
