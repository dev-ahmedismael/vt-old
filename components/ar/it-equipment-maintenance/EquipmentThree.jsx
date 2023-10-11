import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const EquipmentThree = () => {
  return (
    <Section>
      <Box py={3} sx={{ direction: "rtl" }}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <img src="/images/ar.png" alt="AR" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <Title>
                <Typography variant="h4" color={"white"}>
                  فيما يلي بعض فوائد صيانة معدات تكنولوجيا المعلومات:
                </Typography>
              </Title>
              <ul>
                <li>
                  <Typography variant="h6">
                    تقليل الأعطال: من خلال صيانة معدات تكنولوجيا المعلومات
                    بانتظام، يمكن للشركات تقليل فرص الأعطال.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    تحسين الأداء: يمكن أن تساعد صيانة معدات تكنولوجيا المعلومات
                    تقوم الشركات بتحسين أداء معداتها.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    توفير المال: يمكن أن تساعد صيانة معدات تكنولوجيا المعلومات
                    الشركات توفير المال عن طريق تقليل الحاجة إلى شراء أجهزة
                    جديدة أو إصلاح الأجهزة القديمة.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    تحسين أمان البيانات: يمكن أن تساعد صيانة معدات تكنولوجيا
                    المعلومات تقوم الشركات بتحسين أمان بياناتها عن طريق التحديث
                    برامج الجهاز وأنظمة التشغيل.
                  </Typography>
                </li>
              </ul>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default EquipmentThree;
