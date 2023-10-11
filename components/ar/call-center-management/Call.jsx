import React from "react";
import CenteredSection from "@/templates/CenteredSection";
import { Box } from "@mui/material";

const Call = () => {
  const section = {
    title: " إدارة مركز الاتصال",
    description:
      "يعد نظام مركز الاتصال أحد الأصول التجارية المفيدة لجميع المؤسسات التي تواجه حجمًا كبيرًا من المكالمات، وهو أمر ضروري في بيئة الأعمال التنافسية اليوم. يمكن أن يساعد عملك على تقديم خدمة أفضل للعملاء، والاستجابة لاستفسارات العملاء، وزيادة إمكانية الوصول.",
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <CenteredSection
        title={section.title}
        description={section.description}
      />
    </Box>
  );
};

export default Call;
