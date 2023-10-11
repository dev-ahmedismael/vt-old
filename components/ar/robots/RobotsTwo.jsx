import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const RobotsTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box
                height="100%"
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Typography variant="h6">
                  تطوير الذكاء الاصطناعي: اصطناعي الذكاء هو أحد أهم العوامل التي
                  تحديد تطور الروبوتات. يجب أن تكون الروبوتات قادرة على ذلك
                  التفكير والتعلم واتخاذ القرارات لتكون فعالة.
                </Typography>
                <Typography variant="h6">
                  تطوير الروبوتات المرنة: يجب أن تكون الروبوتات قادرة على ذلك
                  التكيف مع البيئات المتغيرة. على سبيل المثال، يجب أن يكونوا
                  قادرين للتنقل في بيئات مختلفة، مثل المصانع، المستشفيات،
                  والمنازل.
                </Typography>
                <Typography variant="h6">
                  تطوير روبوتات آمنة: يجب أن تكون الروبوتات آمنة للبشر والعالم
                  بيئة. ويجب أن تكون مصممة بحيث لا تسبب أي ضرر الإنسان أو
                  البيئة.
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

export default RobotsTwo;
