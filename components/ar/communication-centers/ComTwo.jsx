import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const ComTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  مراكز الاتصال في مجال الشبكات و تلعب تكنولوجيا المعلومات دورًا
                  حيويًا في دعم و تطوير الأعمال والمشاريع الحديثة. "أشياء
                  الرؤية" هو واحدة من الشركات الرائدة في هذا المجال، وتقدم شاملة
                  مجموعة من الخدمات لتلبية احتياجات عملائها. هؤلاء تشمل الخدمات
                  تصميم وبناء الشبكات البنية التحتية، وتطوير البرمجيات المخصصة
                  والنظام و إدارة الأمن، وتقديم الدعم الفني على مدار الساعة طوال
                  أيام الأسبوع. وذلك بفضل تفانيها في تقديم مبتكرة و حلول فعالة
                  لاحتياجات الشركات، وتمكين الرؤية الأشياء الشركات لتحقيق
                  أهدافها وزيادة الإنتاجية، مما يجعلها شريكا استراتيجيا للأعمال
                  النجاح في عصر التكنولوجيا.
                </Typography>
              </Box>
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

export default ComTwo;
