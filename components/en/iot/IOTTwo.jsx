import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const IOTTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h4" color={"white"} mb={3}>
                  There are many benefits that can be achieved by using IoT,
                  including:
                </Typography>
                <Typography variant="h6">
                  Increased productivity: IoT can help to increase productivity
                  by improving efficiency, monitoring processes, and making
                  decisions automatically.
                </Typography>
                <Typography variant="h6">
                  Improved safety: IoT can help to improve safety by tracking
                  risks and preventing accidents.
                </Typography>
                <Typography variant="h6">
                  Reduced costs: IoT can help to reduce costs by reducing the
                  need for human labor and improving the efficiency of
                  operations. Innovation: IoT can help to develop new products
                  and services.
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

export default IOTTwo;
