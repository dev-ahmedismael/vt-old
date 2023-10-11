import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const BusinessTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
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
                يمكن أن يكون تصميم أنظمة الأعمال مهمة صعبة ومعقدة، ولكن يمكن أن
                يكون له تأثير كبير على نجاح الأعمال. يمكن لنظام المعلومات
                المتكامل أن يساعد الشركات على تحسين الكفاءة وخفض التكاليف وتحسين
                رضا العملاء وزيادة الربحية
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
