import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const BusinessTwo = () => {
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
                Designing business systems can be a challenging and complex
                task, but it can have a significant impact on the success of a
                business. An integrated information system can help companies
                improve efficiency, reduce costs, improve customer satisfaction,
                and increase profitability
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/launch.png" alt="Rocket" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default BusinessTwo;
