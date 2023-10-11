import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const NetworkFour = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        "There are many factors to consider when designing network extensions, including:",
      points: [
        "Inspection of the location, method and itinerary of the extensions.",
        "The network extension design must be able to support the current and future network size.",
        "Agreement on types of raw materials and devices.",
        "The type of applications that will be used.",
        "Budget.",
      ],
    },
    {
      id: 2,
      title:
        "There are many ways to maintain networks, and here are some of them:",
      points: [
        "Check cables: Cables should be checked for damage, such as breaks, scratches, or cuts. If any damage is found, the cable must be replaced.",
        "Cleaning appliances: Appliances should be cleaned regularly to remove dust and dirt that can cause overheating or malfunctions.",
        "Firmware Update: Device firmware should be updated regularly to fix any bugs and improve performance.",
        "Performance Monitor: Network performance should be monitored regularly to look for any problems. If any problems are found, they must be resolved immediately.",
        "Create a maintenance plan: A maintenance plan must be created that defines the periodic maintenance schedule for the network.",
        "Train staff on how to use the network safely and effectively: Staff should be trained on how to use the network safely and effectively, including how to report malfunctions.",
        "Create a system for reporting faults and problems: You must create a system for reporting faults and network problems so that they can be fixed immediately.",
        "Update hardware and software regularly: Hardware and software should be updated regularly to fix any bugs and improve performance.",
        "Back up your data regularly: You should back up your data regularly to protect against data loss in the event of a network failure.",
      ],
    },

    {
      id: 4,
      title: "Here are some of the benefits of network hardware maintenance:",
      points: [
        "Reduce breakdowns: By maintaining IT equipment regularly, companies can reduce the chances of breakdowns.",
        "Improve performance: Maintaining IT equipment can help companies improve the performance of their equipment.",
        "Save money: Maintaining IT equipment can help companies save money by reducing the need to purchase new hardware or repair old hardware.",
        "Improve data security: Maintaining IT equipment can help companies improve the security of their data by updating device software and operating systems.",
      ],
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          {paragraphs.map((p) => (
            <Box key={p.id}>
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
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default NetworkFour;
