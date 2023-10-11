import SectionWithCards from "@/templates/SectionWithCards";
import { Box } from "@mui/material";
import React from "react";

const HomeWhyChooseUs = () => {
  const section = {
    title: "لماذا اختار شركة رؤية الأشياء",
    description:
      "لماذا اختار شركة رؤية الأشياء لتوريد وتركيب وتشغيل المعدات التقنية في مجالات تكنولوجيا المعلومات والمعلومات بشكل عام؟",
    cards: [
      {
        id: 1,
        title: "توريد المعدات التقنية الجديدة",
        description:
          "توفر شركة رؤية الأشياء حلولاً تقنية جديدة تمامًا وأفضل دائمًا",
        boxColor: "linear-gradient(to bottom,#8B60ED,#B372BD)",
      },
      {
        id: 2,
        title: "تقديم الدعم الفني للمعدات التقنية",
        description: "كما نقدم الدعم الفني والمساعدة والزيارات لحل المشاكل",
        boxColor: "linear-gradient(to bottom,#21C8F6,#637BFF)",
      },
      {
        id: 3,
        title: "السعر أفضل من سعر السوق",
        description:
          "تقدم رؤية الأشياء دائما أفضل الأسعار مقارنة بالسوق المحلي والعالمي",
        boxColor: "linear-gradient(to bottom,#6EDCC4,#1AAB8B)",
      },
      {
        id: 4,
        title: "خبرة الشركة في المجال التقني",
        description:
          "تتمتع الشركة بالخبرة الكافية في مجالات تكنولوجيا المعلومات على أيدي مهندسينا",
        boxColor: "linear-gradient(to bottom,#F19A1A,#FFC73C)",
      },
      {
        id: 5,
        title: "تقديم الحلول التقنية المناسبة",
        description:
          "نحن دائمًا نختار ونوصي بالاختيار الأفضل والحلول المناسبة لعملائنا",
        boxColor: "linear-gradient(to bottom,#DB678D,#EC454F)",
      },
    ],
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <SectionWithCards
        title={section.title}
        description={section.description}
        cards={section.cards}
        hasBtn={section.hasBtn}
      />
    </Box>
  );
};

export default HomeWhyChooseUs;
