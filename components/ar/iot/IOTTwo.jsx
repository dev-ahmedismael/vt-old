import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const IOTTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h4" color={"white"} mb={3}>
                  هناك العديد من الفوائد التي يمكن تحقيقها باستخدام إنترنت
                  الأشياء، بما في ذلك:
                </Typography>
                <Typography variant="h6">
                  زيادة الإنتاجية: يمكن أن يساعد إنترنت الأشياء في زيادة
                  الإنتاجية من خلال تحسين الكفاءة وعمليات المراقبة والتصنيع
                  القرارات تلقائيا.
                </Typography>
                <Typography variant="h6">
                  تحسين السلامة: يمكن لإنترنت الأشياء أن يساعد في تحسين السلامة
                  من خلال التتبع المخاطر ومنع الحوادث.
                </Typography>
                <Typography variant="h6">
                  خفض التكاليف: يمكن لإنترنت الأشياء أن يساعد في خفض التكاليف عن
                  طريق تقليل الحاجة إلى العمالة البشرية وتحسين كفاءة عمليات.
                  الابتكار: يمكن لإنترنت الأشياء أن يساعد في تطوير منتجات جديدة
                  والخدمات.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/ai_2.png"
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

export default IOTTwo;
