import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const RobotsTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  Development of artificial intelligence: Artificial
                  intelligence is one of the most important factors that
                  determine the development of robots. Robots need to be able to
                  think, learn, and make decisions in order to be effective.
                </Typography>
                <Typography variant="h6">
                  Development of flexible robots: Robots need to be able to
                  adapt to changing environments. For example, they must be able
                  to move around in different environments, such as factories,
                  hospitals, and homes.
                </Typography>
                <Typography variant="h6">
                  Develop safe robots: Robots must be safe for humans and the
                  environment. It must be designed not to cause any harm to
                  humans or the environment.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/ai_2.png"
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

export default RobotsTwo;
