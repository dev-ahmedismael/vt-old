import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const SupplyTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  Elevating Network Connectivity with Vision Things Vision
                  Things takes pride in its expertise in extending networks and
                  creating non-wired hotspots. Our solutions ensure that you can
                  stay connected, whether you're in the office or out in the
                  field. We understand the importance of seamless connectivity
                  for your team, clients, and customers. With our services, you
                  can expand your network coverage to the farthest reaches,
                  guaranteeing fast and reliable connections wherever you go.
                </Typography>
              </Box>
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

export default SupplyTwo;
