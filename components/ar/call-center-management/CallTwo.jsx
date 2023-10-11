import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const CallTwo = () => {
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
                الجامعات أو الشبكة أو الفروع داخل نفس الشبكة عبر الشبكة نقوم
                بتثبيت وتوسيع وتكوين هواتف الشبكة للتواصل مع أعضاء الشبكة أو
                الشركة أو الفروع داخل الشبكة نفسها عبر شبكة الهاتف الشبكة هاتف.
                هاتف IP هو هاتف يتصل بالإنترنت شبكة بروتوكول (IP) بدلاً من
                الهاتف التقليدي شبكة (الأواني). عادةً ما يتم استخدام هاتف الشبكة
                من قبل الشركات و المنظمات التي لديها شبكة بروتوكول الإنترنت
                الخاصة بها.
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
