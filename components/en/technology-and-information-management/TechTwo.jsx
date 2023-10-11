import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const TechTwo = () => {
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
              <Typography variant="h6" mb={3}>
                Vision Things provides IT management services on behalf of third
                parties with efficient maintenance and monitoring 24/7 to keep
                your systems running continuously and regularly. IT services
                that prevent downtime, increase employee productivity, and solve
                problems before they happen. Monitor, update and manage security
                patches to optimize your network, servers, computers and other
                technical devices of all kinds.
              </Typography>
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

export default TechTwo;
