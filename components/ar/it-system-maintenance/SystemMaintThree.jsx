import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";
import React from "react";

const SystemMaintThree = () => {
  const section = {
    description:
      "تعد صيانة نظام تكنولوجيا المعلومات جزءًا مهمًا من أي بنية تحتية لتكنولوجيا المعلومات. ومن خلال إجراء الصيانة الدورية، يمكن للمؤسسات المساعدة في ضمان عمل أنظمة تكنولوجيا المعلومات الخاصة بها بسلاسة وكفاءة، وحماية بياناتها. صيانة نظام تكنولوجيا المعلومات هي عملية الحفاظ على أنظمة تكنولوجيا المعلومات في حالة عمل جيدة. ويتضمن مهام مثل: استكشاف الأخطاء وإصلاحها وإصلاح المشكلات، وتحديث البرامج والأجهزة، وإجراء النسخ الاحتياطية، ومراقبة الأداء.",
    imgUrl: "/images/maintenance.png",
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

export default SystemMaintThree;
