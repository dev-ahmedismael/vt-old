import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ARThree = () => {
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
                  هناك العديد من المجالات البحثية التي تركز على تطوير تقنيات
                  الواقع المعزز، بما في ذلك:
                </Typography>
              </Title>
              <ul>
                <li>
                  <Typography variant="h6">
                    تطوير أجهزة الواقع المعزز: يركز هذا البحث على تطوير أجهزة AR
                    أكثر راحة و خفيفة الوزن، ولها دقة ووضوح أفضل.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    تطوير تطبيقات الواقع المعزز: يركز هذا البحث على تطوير
                    تطبيقات الواقع المعزز المفيدة والمفيدة مفيدة للمستخدمين.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    تطوير تقنيات الواقع المعزز: يركز هذا البحث على تطوير تقنيات
                    الواقع المعزز التي تسمح للمستخدمين بالتفاعل بالمعلومات
                    الرقمية بطريقة أكثر طبيعية.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">
                    الواقع المعزز هي تقنية واعدة ذات إمكانات كبيرة. بواسطة ومن
                    خلال إجراء المزيد من الأبحاث في هذا المجال، يمكننا تطوير
                    الواقع المعزز التقنيات التي يمكن أن تحسن حياتنا بطرق عديدة.
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

export default ARThree;
