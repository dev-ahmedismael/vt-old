import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const SupplyTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">
                  رفع مستوى الاتصال بالشبكة من خلال رؤية الأشياء الرؤية الأشياء
                  تفخر بخبرتها في توسيع الشبكات و إنشاء نقاط اتصال غير سلكية.
                  حلولنا تضمن لك ذلك ابق على اتصال، سواء كنت في المكتب أو في
                  الخارج مجال. نحن ندرك أهمية الاتصال السلس لفريقك، والعملاء،
                  والعملاء. مع خدماتنا أنت يمكن توسيع تغطية شبكتك إلى أبعد مدى،
                  ضمان اتصالات سريعة وموثوقة أينما ذهبت.
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

export default SupplyTwo;
