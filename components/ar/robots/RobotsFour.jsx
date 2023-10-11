import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const RobotsFour = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        "هناك العديد من الفوائد التي يمكن تحقيقها من خلال استخدام الروبوتات، ومنها:",
      points: [
        "زيادة الإنتاجية: يمكن للروبوتات أداء المهام بشكل أسرع وأكثر دقة من البشر.",
        "تحسين السلامة: يمكن للروبوتات إنجاز المهام التي قد تكون خطرة أو صعبة على البشر.",

        "خفض التكاليف: يمكن للروبوتات أن تساعد في خفض التكاليف عن طريق استبدال العمالة البشرية.",

        "الابتكار: يمكن للروبوتات أن تساعد في تطوير منتجات وخدمات جديدة.",
      ],
      text: "",
    },
    {
      id: 1,
      title:
        "هناك العديد من المجالات البحثية التي تركز على تطوير تقنيات الروبوت، بما في ذلك:",
      points: [
        "تطوير الروبوتات الذكية: تركز هذه الدراسات على تطوير الروبوتات القادرة على التفكير والتعلم واتخاذ القرارات.",
        "تطوير الروبوتات المرنة: تركز هذه الدراسات على تطوير الروبوتات القادرة على التكيف مع البيئات المتغيرة.",

        "تطوير الروبوتات الآمنة: تركز هذه الدراسات على تطوير الروبوتات التي لا تسبب ضرراً للإنسان أو البيئة.",
      ],
      text: "الروبوتات هي تكنولوجيا واعدة ذات إمكانات كبيرة. ومن خلال إجراء المزيد من الأبحاث في هذا المجال، يمكننا تطوير الروبوتات التي يمكنها تحسين حياتنا بعدة طرق. أبرز التحديات البحثية في مجال الروبوتات.",
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          {paragraphs.map((p) => (
            <Box key={p.id} mb={5}>
              <Typography variant="h5" color={"white"}>
                {p.title}
              </Typography>
              <ul>
                {p.points.map((point, index) => (
                  <li key={index}>
                    <Typography>{point}</Typography>
                  </li>
                ))}
              </ul>
              <Typography>{p.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default RobotsFour;
