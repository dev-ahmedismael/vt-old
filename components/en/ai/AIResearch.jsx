import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AIResearch = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        "There are many major research areas in the field of AI, including:",
      points: [
        "Machine learning: Machine learning is a branch of AI that deals with the creation of mathematical models that can learn from data without being explicitly programmed.",
        "Deep learning: Deep learning is a type of machine learning that relies on artificial neural networks. Artificial neural networks can learn complex representations of data, and can be used to perform a wide range of tasks, such as image recognition, machine translation, and creative text generation.",
        "Natural language processing (NLP): Natural language processing (NLP) is a field of AI that deals with the interaction of computers with human language. NLP can be used to understand human language, generate text, translate languages, and write different types of creative content.",
        "Computer vision: Computer vision is a field of AI that deals with the processing of images and videos. Computer vision can be used to identify objects in images, understand visual content, and create three-dimensional videos.",
      ],
      text: "",
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
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

export default AIResearch;
