import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const NetworkTwo = () => {
  const points = [
    "Improve productivity: Effective networks can improve productivity by making it easier for employees to share information and collaborate.",
    "Improved security: Effective networks can help improve security by providing an extra layer of protection against cyberattacks.",
    "Improve customer satisfaction: Effective networks can help improve customer satisfaction by providing a better user experience.",
  ];
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography variant="h6" mb={1} color={"white"}>
                There are many benefits that can accrue to companies and
                institutions from network extensions and maintenance: Improve
                productivity:
              </Typography>
              <ul>
                {points.map((point, index) => (
                  <li key={index}>
                    <Typography mb={1}>{point}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/it_services.png" alt="AI" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default NetworkTwo;
