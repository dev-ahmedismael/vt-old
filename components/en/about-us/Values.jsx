import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { SiAdobecreativecloud } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import SOS from "@/templates/SOS";
const Values = () => {
  const cards = [
    {
      id: 1,
      title: "Creativity",
      icon: <SiAdobecreativecloud color="#1AAB8B" fontSize={70} />,
    },
    {
      id: 2,
      title: "Win Win Situation",
      icon: <GiTrophyCup color="#1AAB8B" fontSize={70} />,
    },
    {
      id: 3,
      title: "Continuous Development",
      icon: <BiNetworkChart color="#1AAB8B" fontSize={70} />,
    },
    {
      id: 4,
      title: "Efficiency",
      icon: <GiNetworkBars color="#1AAB8B" fontSize={70} />,
    },
    {
      id: 5,
      title: "Discipline",
      icon: <FaHandsHelping color="#1AAB8B" fontSize={70} />,
    },
  ];
  return (
    <SOS>
      <section>
        <Container>
          <Box py={5}>
            <Box display={"flex"} justifyContent={"center"} mb={10}>
              <Title>
                <Typography variant="h3" textAlign={"center"} color="white">
                  Values
                </Typography>
              </Title>
            </Box>

            <Grid container spacing={5} justifyContent={"center"}>
              {cards.map((card) => (
                <Grid key={card.id} item xs={12} sm={4}>
                  <SOS>
                    <Box
                      bgcolor={"#0c1933"}
                      borderRadius={5}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      p={3}
                      sx={{
                        "&:hover": {
                          background:
                            "linear-gradient(to bottom,#DB678D,#EC454F)",
                          transform: "scale(1.1)",
                          transition: "0.3s all",
                        },
                      }}
                    >
                      <Box>{card.icon}</Box>
                      <Typography variant="h5"> {card.title}</Typography>
                    </Box>
                  </SOS>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </SOS>
  );
};

export default Values;
