import PrimaryBtn from "@/templates/PrimaryBtn";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CRResearch = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        "Some of the most important research areas in the field of computer vision include:",
      points: [
        "Facial recognition: Facial recognition is used in many applications, such as access control systems and visitor recognition systems.",
        "Object recognition: Object recognition is used in many applications, such as self-checkout systems in stores and car control systems.",
        "Motion tracking: Motion tracking is used in many applications, such as people tracking systems and video analysis systems.",
      ],
      text: "",
    },
    {
      id: 2,
      title: "Computer vision can be used in many different fields, including:",
      points: [
        "Medicine: Computer vision can be used to diagnose diseases, monitor patients, and perform surgery.",
        "Industry: Computer vision can be used in quality control, production control, and supply chain management.",
        "Transportation: Computer vision can be used in self-driving cars, driver assistance systems, and improving road safety.",
        "Security: Computer vision can be used to border surveillance, explosive detection, and crime fighting.",
      ],
      text: "",
    },
    {
      id: 3,
      title:
        "Among the most prominent research areas in the field of computer vision are:",
      points: [
        "Deep learning",
        "Computational vision Multiple vision",
        "Three-dimensional vision",
        "Underwater vision",
      ],
      text: "",
    },
    {
      id: 4,
      title:
        "Vision in space The importance of computer vision underwater There are many potential applications for computer vision underwater, including:",
      points: [
        "Detection of marine pollution.",
        "Observing marine life.",
        "Search and rescue.",
        "Marine farming.",
      ],
      text: "",
    },
    {
      id: 5,
      title:
        "Exploration for oil and gas Researchers face several challenges when developing underwater computer vision technologies, such as:",
      points: [
        "Poor image quality due to diffraction in water.",
        "Changing lighting conditions.",
        "The presence of noise in the image Despite these challenges, underwater computer vision has the potential to revolutionize many areas related to the oceans.",
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
          <Typography variant="h5" color={"white"} mb={5}>
            One of this research is the research published by the founder of the
            Vision of Things Company Eng. Hattan Ashour called " Recognition of
            stonefish from underwater video" published by IEEE
          </Typography>
          <Link
            href={"https://ieeexplore.ieee.org/document/7275746"}
            target="_blank"
          >
            <PrimaryBtn>Read Research</PrimaryBtn>
          </Link>
        </Box>
      </Container>
    </Section>
  );
};

export default CRResearch;
