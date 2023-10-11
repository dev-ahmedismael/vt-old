import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const VpnTwo = () => {
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
                The VPN network is the most used network to connect the branches
                of institutions, small and large companies, and the most secure,
                as it is a virtual private network, that is, it is a private
                network for the organization that enables it to connect branches
                in distant areas and transfer and exchange data securely and at
                a much lower cost than other networks. In addition to the fact
                that a network that uses a VPN to connect branches, Link
                branches is also for remote communication and to connect
                employees with the institution, and the latter is increasingly
                growing in the use of a VPN in the recent period, especially
                with the need to work remotely.
              </Typography>
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

export default VpnTwo;
