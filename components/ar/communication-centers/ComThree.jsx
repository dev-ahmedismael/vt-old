import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const ComThree = () => {
  const section = {
    description:
      "هاتف الشبكة (هاتف IP) هو هاتف يتصل بشبكة بروتوكول الإنترنت (IP) من شبكة الهاتف التقليدية (هاتف الشبكة عادة في الشركات والمؤسسات التي لديها شبكة بروتوكول الإنترنت الخاصة بها). يتمتع هاتف الشبكة بالعديد من المزايا مقارنة بالهاتف التقليدي، بما في ذلك: جودة صوت أفضل: يوفر هاتف الشبكة جودة صوت أفضل من الهاتف التقليدي، وذلك بسبب استخدام بروتوكولات ضغط الصوت المتقدمة، المزيد من الميزات: يوفر هاتف الشبكة العديد من الميزات التي الهاتف التقليدي لا يفعل ذلك، مثل النقل الجماعي والرد التلقائي والمراسلة. مرونة أكبر: يمكن استخدام الهاتف الشبكي مع أي شبكة IP، مما يوفر مرونة أكبر في قابلية النقل والقياس. تكلفة أقل: يمكن أن يكلف هاتف الشبكة أقل من تكلفة هاتف شبكي. الهاتف التقليدي على المدى الطويل، وذلك بسبب انخفاض تكلفة المكالمات وانخفاض الصيانة.",
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

export default ComThree;
