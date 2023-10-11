import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const TechFour = () => {
  const paragraphs = [
    "أهمية إدارة مركز تكنولوجيا المعلومات حتى تركز المؤسسة على عملها الأصلي.",
    "يمكن للشركات والمؤسسات التركيز على أعمالها الأساسية من خلال إدارة مركز تكنولوجيا المعلومات من قبل فريق محترف. يمكن أن تؤدي الإدارة الفعالة لمراكز تكنولوجيا المعلومات إلى العديد من الفوائد التي يمكن أن تساعد الشركات والمؤسسات على زيادة الإنتاجية وتحسين الجودة وخفض التكاليف وتحسين الامتثال وتحسين رضا العملاء.",
  ];
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          {paragraphs.map((paragraph, index) => (
            <Typography key={index} mb={1}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default TechFour;
