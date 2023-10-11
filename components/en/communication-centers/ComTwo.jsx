import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const ComTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  Communication centers in the field of networking and
                  information technology play a vital role in supporting and
                  advancing modern businesses and projects. "Vision Things" is
                  one of the pioneers in this field, offering a comprehensive
                  range of services to meet the needs of its clients. These
                  services include designing and building network
                  infrastructure, developing custom software, system and
                  security management, and providing 24/7 technical support.
                  Thanks to its dedication to delivering innovative and
                  effective solutions to corporate needs, Vision Things empowers
                  companies to achieve their goals and increase their
                  productivity, making it a strategic partner for business
                  success in the age of technology.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/it_services.png" alt="IT" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ComTwo;
