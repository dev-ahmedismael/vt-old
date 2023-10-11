import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const EquipmentTwo = () => {
  return (
    <section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Title>
                  <Typography color={"white"} variant="h4">
                    هناك العديد من الفوائد التي يمكن تحقيقها من خلال الاستخدام
                    من AR، بما في ذلك:
                  </Typography>
                </Title>
                <Typography variant="h6">
                  من المهم للشركات أن تحافظ على معدات تكنولوجيا المعلومات الخاصة
                  بها بواسطة فريق محترف من الفنيين. كمحترف الفنيين لديهم الخبرة
                  والمهارات اللازمة للحفاظ على الأجهزة بشكل صحيح وفعال. وأيضا
                  المهنية يمكن للفنيين تقديم المشورة للشركات حول كيفية استخدام
                  تكنولوجيا المعلومات بشكل صحيح المعدات وكيفية تجنب الأعطال .
                </Typography>
                <Typography variant="h6">
                  ومن خلال صيانة معدات تكنولوجيا المعلومات الخاصة بها بانتظام،
                  تستطيع الشركات ذلك التأكد من أن معداتهم تعمل بشكل صحيح و
                  بكفاءة. بالإضافة إلى الحفاظ على المعلومات يمكن للمعدات
                  التكنولوجية أن تساعد الشركات على تجنب الأعطال و مشاكل قد تؤدي
                  إلى التوقف عن العمل وتسبب مشاكل مالية خسائر للشركات.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/network_mangement.png"
                  alt="AI"
                  width={"100%"}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default EquipmentTwo;
