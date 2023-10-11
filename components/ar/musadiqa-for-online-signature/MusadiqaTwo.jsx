import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const MusadiqaTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
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
                هو عبارة عن إضافة نموذج التوقيع الذي يختاره المستخدم على المستند
                مع إضافة معلومات التحقق التي تمت عبر أبشر أو البريد الإلكتروني
                أو الجوال وتاريخ ووقت التحقق. لاحظ أنه سيتم الاحتفاظ بالوثائق
                والتحققات بشكل دائم.
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
