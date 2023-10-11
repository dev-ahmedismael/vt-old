import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const NetworkThree = () => {
  const section = {
    description:
      "إذا كنت تبحث عن شركة متخصصة في تمديد الشبكات وصيانتها، فمن المهم أن تختار رؤية Vision Things التي لديها خبرة في مجال الشبكات وتقدم خدمات عالية الجودة.",
    imgUrl: "/images/wireless.png",
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

export default NetworkThree;
