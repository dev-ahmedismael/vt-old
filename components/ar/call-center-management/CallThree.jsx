import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const CallThree = () => {
  const section = {
    description:
      "يتمتع هاتف الشبكة بالعديد من المزايا مقارنة بالهاتف التقليدي: جودة صوت أفضل: يوفر الهاتف الشبكي جودة صوت أفضل من الهاتف التقليدي، وذلك بسبب استخدام بروتوكولات ضغط الصوت المتقدمة. المزيد من الميزات: يوفر هاتف الشبكة العديد من الميزات التي لا يوفرها الهاتف التقليدي، مثل النقل المجمع والرد الآلي والرسائل الصوتية والبريد الإلكتروني. مرونة أكبر: يمكن استخدام الهاتف الشبكي مع أي شبكة IP، مما يوفر مرونة أكبر في قابلية النقل والتوسع. تكلفة أقل: يمكن أن يكلف هاتف الشبكة أقل من الهاتف التقليدي على المدى الطويل، بسبب انخفاض تكلفة المكالمات وقلة الحاجة إلى صيانة",
    imgUrl: "/images/company_call_center.png",
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

export default CallThree;
