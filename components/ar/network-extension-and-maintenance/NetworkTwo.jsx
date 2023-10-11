import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const NetworkTwo = () => {
  const points = [
    "تحسين الإنتاجية: يمكن للشبكات الفعالة تحسين الإنتاجية من خلال تسهيل مشاركة المعلومات والتعاون على الموظفين.",
    "تحسين الأمان: يمكن للشبكات الفعالة أن تساعد في تحسين الأمان من خلال توفير طبقة إضافية من الحماية ضد الهجمات الإلكترونية.",
    "تحسين رضا العملاء: يمكن للشبكات الفعالة أن تساعد في تحسين رضا العملاء من خلال توفير تجربة أفضل للمستخدم.",
  ];
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
              <Typography variant="h6" mb={1} color={"white"}>
                هناك العديد من الفوائد التي يمكن أن تعود على الشركات و المؤسسات
                من تمديدات الشبكات وصيانتها: تحسين إنتاجية:
              </Typography>
              <ul>
                {points.map((point, index) => (
                  <li key={index}>
                    <Typography mb={1}>{point}</Typography>
                  </li>
                ))}
              </ul>
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

export default NetworkTwo;
