import CenteredSection from "@/templates/CenteredSection";
import { Box } from "@mui/material";
import React from "react";

const SystemMaint = () => {
  const section = {
    title: "صيانة نظام تكنولوجيا المعلومات",
    description:
      "تعد صيانة نظام تكنولوجيا المعلومات مهمة لعدة أسباب. أولاً، يمكن أن يساعد في منع حدوث المشاكل. ثانيًا، يمكن أن يساعد في الحفاظ على تشغيل الأنظمة بسلاسة. ثالثًا، يمكن أن يساعد في إطالة عمر الأنظمة. رابعا، يمكن أن يساعد في حماية البيانات.",
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

export default SystemMaint;
