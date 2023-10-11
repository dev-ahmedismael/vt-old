import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const BusinessFive = () => {
  const section = {
    description:
      "سيقوم فريق البرمجة والتصميم بالبدء بالعمل على النظام وتنفيذ النظام حسب الواجهات التي تم الاتفاق عليها والمتطلبات التي تطلبها الجهة المنفذة للنظام. سيقوم الفريق باستخدام أي لغات برمجة تناسب تلك المتطلبات وبناء قواعد البيانات التي ستساعد النظام على العمل في المستقبل. كما سيقوم فريق العمل بتطوير أنظمة الأمان وجدار الحماية اللازمة لحماية النظام من الاختراقات وضمان سلامة النظام وقاعدة البيانات.",
    imgUrl: "/images/development.png",
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

export default BusinessFive;
