import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ARTwo = () => {
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
                  تحسين التعلم: يمكن استخدام الواقع المعزز لتحسين التعلم عن طريق
                  جعل المعلومات أكثر تفاعلية وواقعية. ل على سبيل المثال، يمكن
                  استخدام الواقع المعزز لعرض نماذج ثلاثية الأبعاد للكائنات أو
                  المخلوقات، أو لعرض أشرطة الفيديو التعليمية.
                </Typography>
                <Typography variant="h6">
                  زيادة الإنتاجية: يمكن استخدام الواقع المعزز لزيادة الإنتاجية
                  الإنتاجية في العديد من الصناعات، مثل التصنيع، اللوجستية،
                  والرعاية الصحية. على سبيل المثال، يمكن استخدام الواقع المعزز
                  لـ تدريب العمال على كيفية استخدام المعدات الجديدة، أو التوجيه
                  العاملين في مواقع العمل.
                </Typography>
                <Typography variant="h6">
                  الترفيه: يمكن استخدام الواقع المعزز لإنشاء أشياء جديدة ومثيرة
                  تجارب ترفيهية. على سبيل المثال، يمكن استخدام الواقع المعزز لـ
                  إنشاء ألعاب الواقع المعزز، أو عرض مسرحي ثلاثي الأبعاد إنتاجات.
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

export default ARTwo;
