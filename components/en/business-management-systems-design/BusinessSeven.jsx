import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const BusinessSeven = () => {
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
                In this step, the system is launched via the website, the
                application is added to the application library,or the system is
                uploaded to the client server Training, operation and
                maintenance The work team is trained on the system and its
                services, the distribution of powers, user names, passwords, and
                the system administrator account Ensuring that the system is
                working and monitoring the progress of work with the company
                until ensuring that the system is fully operational Finally,
                providing a maintenance system for companies in the event of any
                need for any modification, repair of any defect, or system
                update.
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

export default BusinessSeven;
