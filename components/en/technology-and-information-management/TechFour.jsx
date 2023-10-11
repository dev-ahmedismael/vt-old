import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const TechFour = () => {
  const paragraphs = [
    "The importance of managing the information technology center in order for the establishment to focus on its original work.",
    "Companies and organizations can focus on their core business by managing the IT center by a professional team. Effective IT center management can lead to many benefits that can help companies and organizations increase productivity, improve quality, reduce costs, improve compliance, and improve customer satisfaction.",
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
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
