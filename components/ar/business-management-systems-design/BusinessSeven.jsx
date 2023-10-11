import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const BusinessSeven = () => {
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
                في هذه الخطوة يتم إطلاق النظام عبر الموقع الإلكتروني، أو إضافة
                التطبيق إلى مكتبة التطبيقات، أو رفع النظام على خادم العميل
                التدريب والتشغيل والصيانة، ويتم تدريب فريق العمل على النظام
                وخدماته، وتوزيع الصلاحيات وأسماء المستخدمين وكلمات المرور وحساب
                مسؤول النظام التأكد من عمل النظام ومراقبة سير العمل مع الشركة
                حتى التأكد من تشغيل النظام بكامل طاقته وأخيرا توفير نظام صيانة
                للشركات في حالة الحاجة إلى أي تعديل أو إصلاح أي خلل أو تحديث
                النظام.
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

export default BusinessSeven;
