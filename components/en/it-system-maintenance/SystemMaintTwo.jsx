import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SystemMaintTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  There are a number of ways to maintain IT systems. One way is
                  to hire a qualified IT professional to perform the
                  maintenance. Another way is to use an IT management software
                  solution. IT management software solutions can help to
                  automate many of the tasks involved in IT system maintenance.
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

export default SystemMaintTwo;
