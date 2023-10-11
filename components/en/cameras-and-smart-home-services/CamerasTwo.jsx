import SecBtn from "@/templates/SecBtn";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CamerasTwo = () => {
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
                At Vision Things, we envision a connected world where homes and
                businesses are empowered by seamless integration of intelligent
                technology. Our range of advanced security cameras ensures that
                you can monitor your property from anywhere at any time,
                granting peace of mind and complete control.
              </Typography>
              <Link href={"/en/contract"}>
                <SecBtn>Create Cameras Contract</SecBtn>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/smart_home.png"
                  alt="Connect"
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

export default CamerasTwo;
