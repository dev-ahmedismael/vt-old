import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MusadiqaTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5}>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Typography variant="h6" mb={3}>
                It is adding the form of the signature that the user chooses to
                the document with the addition of the verification information
                that was done through Absher, e-mail or mobile, and the date and
                time of verification. Note that documents and verifications will
                be kept permanently.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/light.png" alt="AI" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default MusadiqaTwo;
