import React from "react";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";

const VpnFour = () => {
  const paragraphs = [
    {
      id: 1,
      title: "Features of the VPN branch service",
      points: [
        "Providing the best and appropriate information and proposals.",
        "Technical support around the clock.",
        "Linking all branches of the institution on one network.",
        "There are no medication fees in addition to reducing the service provider's fees.",
        "Budget.",
        "One-way or two-way communication between management and branches.",
        "The possibility of using all types of connections to connect (FTTH/ADSL/VDSL/4G/3G).",
        "The possibility of adding a backup internet line to ensure continuity of work and no interruption with the possibility of merging the speed.",
        "The possibility of linking all employees to the main server of the institution and working on all programs.",
        "Connecting all employees' devices to each other in all branches and sharing files and printers among them.",
        "Distribution of speeds and powers to employees.",
        "Connecting the central network to all branches (ip-Phone).",
        "Using one of the establishment's phones from outside.",
        "Using the phone of any branch with another branch and vice versa.",
        "Connecting surveillance cameras and follow-up from anywhere.",
      ],
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          <Typography variant="h5" color={"white"} mb={2}>
            The importance of connecting branches to VPN
          </Typography>
          <Typography mb={5}>
            Since our topic is to connect branches using VPN with the increasing
            expansion of companies and the urgent need to share enterprise
            resources such as files, data and enterprise information, especially
            the possibility of remote access, here the paramount importance of
            using a VPN also appears as it is more secure and less expensive
            compared to Static IP.
          </Typography>
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

export default VpnFour;
