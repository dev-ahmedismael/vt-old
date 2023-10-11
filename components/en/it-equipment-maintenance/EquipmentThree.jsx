import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const EquipmentThree = () => {
  return (
    <Section>
      <Box py={3}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <img src="/images/ar.png" alt="AR" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Title>
                <Typography variant="h4" color={"white"}>
                  Here are some of the benefits of maintaining IT equipment :
                </Typography>
              </Title>
              <ul>
                <li>
                  <Typography variant="h6">
                    Reduce breakdowns: By maintaining IT equipment regularly,
                    companies can reduce the chances of breakdowns.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    Improve performance: Maintaining IT equipment can help
                    companies improve the performance of their equipment.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    Save Money: Maintaining IT equipment can help businesses
                    save money by reducing the need to purchase new hardware or
                    repair old hardware.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    Improve data security: Maintaining IT equipment can help
                    companies improve the security of their data by updating
                    device software and operating systems.
                  </Typography>
                </li>
              </ul>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default EquipmentThree;
