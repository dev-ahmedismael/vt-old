import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";
import React from "react";

const CamerasThree = () => {
  const section = {
    description:
      "تمتد حلولنا المنزلية الذكية إلى ما هو أبعد من المراقبة، حيث تقدم مجموعة شاملة من خيارات الأتمتة والتحكم. بدءًا من إدارة الإضاءة وأجهزة تنظيم الحرارة عن بُعد وحتى تحسين استهلاك الطاقة، تعمل Vision Things على تحويل مساحات معيشتك إلى بيئات ذكية وسريعة الاستجابة. يتخصص الفنيون ذوو الخبرة لدينا في صيانة وخدمة مجموعة واسعة من أنظمة الكاميرات، مما يضمن بقائها وظيفية وفعالة مع مرور الوقت. سواء أكان الأمر يتعلق بفحوصات روتينية، أو استكشاف الأخطاء وإصلاحها، أو التحديثات، فإن فريقنا ملتزم بالحفاظ على تشغيل البنية التحتية للمراقبة لديك بسلاسة.س",
    imgUrl: "/images/connect.png",
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <RtlSection
        title={section.title}
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={section.hasBtn}
        btnUrl={section.btnUrl}
        btnContent={section.btnContent}
      />
    </Box>
  );
};

export default CamerasThree;
