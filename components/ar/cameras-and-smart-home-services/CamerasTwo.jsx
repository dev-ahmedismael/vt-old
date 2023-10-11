import SecBtn from "@/templates/SecBtn";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CamerasTwo = () => {
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
                في شركة رؤية الأشياء، نتصور عالمًا متصلاً حيث يتم تمكين المنازل
                والشركات من خلال التكامل السلس للتكنولوجيا الذكية. تضمن مجموعتنا
                من الكاميرات الأمنية المتقدمة إمكانية مراقبة الممتلكات الخاصة بك
                من أي مكان وفي أي وقت، مما يمنحك راحة البال والتحكم الكامل.
              </Typography>
              <Link href={"/ar/contract"}>
                <SecBtn>انشاء عقد كاميرات</SecBtn>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/images/smart_home.png"
                  alt="Connect"
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

export default CamerasTwo;
