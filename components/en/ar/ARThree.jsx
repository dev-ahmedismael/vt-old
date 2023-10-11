import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ARThree = () => {
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
                  There are many research areas that focus on the development of
                  AR technologies, including:
                </Typography>
              </Title>
              <ul>
                <li>
                  <Typography variant="h6">
                    Development of AR devices: This research focuses on the
                    development of AR devices that are more comfortable and
                    lightweight, and have better resolution and clarity.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    Development of AR applications: This research focuses on the
                    development of AR applications that are useful and
                    beneficial for users.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    Development of AR technologies: This research focuses on the
                    development of AR technologies that allow users to interact
                    with digital information in a more natural way.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    AR is a promising technology with great potential. By
                    conducting more research in this field, we can develop AR
                    technologies that can improve our lives in many ways.
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

export default ARThree;
