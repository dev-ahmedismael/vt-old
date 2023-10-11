import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SystemMaintTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  هناك عدة طرق لصيانة أنظمة تكنولوجيا المعلومات. طريقة واحدة هي
                  لتوظيف متخصص مؤهل في مجال تكنولوجيا المعلومات لأداء صيانة.
                  هناك طريقة أخرى وهي استخدام برنامج إدارة تكنولوجيا المعلومات
                  حل. يمكن لحلول برامج إدارة تكنولوجيا المعلومات أن تساعد في ذلك
                  أتمتة العديد من المهام المتعلقة بصيانة نظام تكنولوجيا
                  المعلومات.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img src="/images/it_services.png" alt="AI" width={"100%"} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default SystemMaintTwo;
