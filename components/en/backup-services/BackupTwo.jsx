import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const BackupTwo = () => {
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
                What does it mean to back up data? Backing up data means
                creating and storing additional copies of data separately. The
                idea of backing up data is to ensure that in the event of an
                accident, one has an additional copy of the data. Research has
                shown that a lot of businesses have had problems because they
                haven't backed up the data they've lost. Damage from data loss
                or theft can be better controlled when the organization has an
                additional copy of the lost data that enables it to continue its
                operations. There are various factors that cause data loss, data
                backup protects data from harmful effects of data loss. Since
                backing up data simply means creating an additional copy of the
                data, backing up data can be done in a variety of ways ranging
                from scanning a document to storing the document in the cloud.
                Data backup methods are generally divided into traditional and
                unconventional methods. Traditional methods involve storing data
                on an external drive. Non-traditional methods of data backup
                include cloud storage.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/it_services.png"
                  alt="it_services"
                  width={"100%"}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default BackupTwo;
