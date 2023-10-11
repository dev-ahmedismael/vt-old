import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const RobotsFour = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        " There are many benefits that can be achieved through the use of robots, including:",
      points: [
        "Increased productivity: Robots can perform tasks faster and more accurately than humans.",
        "Improved safety: Robots can accomplish tasks that may be dangerous or difficult for humans.",

        "Reduced costs: Robots can help to reduce costs by replacing human labor.",

        "Innovation: Robots can help to develop new products and services.",
      ],
      text: "",
    },
    {
      id: 1,
      title:
        "There are many research areas that focus on the development of robot technologies, including:",
      points: [
        "Development of intelligent robots: These studies focus on the development of robots that are able to think, learn, and make decisions. ",
        "Development of flexible robots: These studies focus on the development of robots that are able to adapt to changing environments.",

        "  Development of safe robots: These studies focus on the development of robots that do not cause harm to humans or the environment.",
      ],
      text: "Robots are a promising technology with great potential. By conducting more research in this field, we can develop robots that can improve our lives in many ways. The most prominent research challenges in the field of robotics.",
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

export default RobotsFour;
