import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ARTwo = () => {
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
                  Improved learning: AR can be used to improve learning by
                  making information more interactive and realistic. For
                  example, AR can be used to display 3D models of objects or
                  creatures, or to show educational videos.
                </Typography>
                <Typography variant="h6">
                  Increased productivity: AR can be used to increase
                  productivity in many industries, such as manufacturing,
                  logistics, and healthcare. For example, AR can be used to
                  train workers on how to use new equipment, or to guide
                  employees in worksites.
                </Typography>
                <Typography variant="h6">
                  Entertainment: AR can be used to create new and exciting
                  entertainment experiences. For example, AR can be used to
                  create augmented reality games, or to show 3D theatrical
                  productions.
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

export default ARTwo;
