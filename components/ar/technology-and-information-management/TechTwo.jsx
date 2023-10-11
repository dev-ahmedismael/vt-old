import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const TechTwo = () => {
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
                توفر Vision Things خدمات إدارة تكنولوجيا المعلومات نيابة عن شركة
                ثالثة الأطراف مع صيانة ومراقبة فعالة على مدار الساعة طوال أيام
                الأسبوع للحفاظ عليها أنظمتك تعمل بشكل مستمر ومنتظم. خدمات
                تكنولوجيا المعلومات التي تمنع التوقف عن العمل، وتزيد من إنتاجية
                الموظفين، وتحل المشكلة المشاكل قبل حدوثها. مراقبة وتحديث وإدارة
                الأمن تصحيحات لتحسين الشبكة والخوادم وأجهزة الكمبيوتر وغيرها
                الأجهزة التقنية بكافة أنواعها.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/network_mangement.png"
                  alt="AI"
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

export default TechTwo;
