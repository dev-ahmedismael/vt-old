import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const CallTwo = () => {
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
                Universities, network or branches within the same network across
                the networkWe install, extend and configure network telephones
                to communicate with members of the network, company or branches
                within the network itself via the network telephone network
                phone. An IP phone is a phone that connects to an Internet
                Protocol (IP) network rather than a traditional telephone
                network (POTS). A network phone is usually used by companies and
                organizations that have their own Internet Protocol network.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/contact.png" alt="Mobile" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default CallTwo;
