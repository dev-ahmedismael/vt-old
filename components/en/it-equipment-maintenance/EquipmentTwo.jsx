import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const EquipmentTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Title>
                  <Typography color={"white"} variant="h4">
                    There are many benefits that can be achieved through the use
                    of AR, including:
                  </Typography>
                </Title>
                <Typography variant="h6">
                  It is important for companies to maintain their IT equipment
                  by a professional team of technicians. As professional
                  technicians have the experience and skills to maintain the
                  devices properly and effectively. Also, professional
                  technicians can advise companies on how to properly use IT
                  equipment and how to avoid malfunctions .
                </Typography>
                <Typography variant="h6">
                  By maintaining their IT equipment regularly, companies can
                  ensure that their equipment is working properly and
                  efficiently. In addition, the maintenance of information
                  technology equipment can help companies avoid breakdowns and
                  problems, which may lead to work stoppages and cause financial
                  losses to companies.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/network_mangement.png"
                  alt="AI"
                  width={"100%"}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default EquipmentTwo;
