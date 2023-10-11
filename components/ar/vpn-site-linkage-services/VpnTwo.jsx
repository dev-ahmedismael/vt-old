import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const VpnTwo = () => {
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
                شبكة VPN هي الشبكة الأكثر استخدامًا لربط الفروع للمؤسسات
                والشركات الصغيرة والكبيرة والأكثر أمانا، لأنها شبكة خاصة
                افتراضية، أي أنها خاصة شبكة للمنظمة تمكنها من ربط الفروع في
                المناطق البعيدة ونقل وتبادل البيانات بشكل آمن وفي بتكلفة أقل
                بكثير من الشبكات الأخرى. بالإضافة إلى الحقيقة أن الشبكة التي
                تستخدم VPN لربط الفروع، رابط الفروع أيضًا للتواصل عن بعد
                والاتصال الموظفين مع المؤسسة، وهذا الأخير بشكل متزايد تزايد
                استخدام VPN في الفترة الأخيرة، خاصة مع ضرورة العمل عن بعد.
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
