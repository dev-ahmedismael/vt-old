import PrimaryBtn from "@/templates/PrimaryBtn";
import SOS from "@/templates/SOS";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <SOS>
      <header>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            height={500}
            sx={{ direction: "rtl" }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Title>
                <Typography variant="h2" color={"white"}>
                  رحلتك إلي <br /> الذكاء الإصطناعي
                </Typography>
              </Title>
              <Typography variant="h3" color={"#51a29d"} my={2}>
                تبدأ معنا من هنا...
              </Typography>
              <Link href={"/ar/contact-us"}>
                <PrimaryBtn>اتصل بنا</PrimaryBtn>
              </Link>
            </Box>
            <Box display={{ xs: "none", sm: "none", md: "block" }}>
              <img
                src="/images/home_brain.png"
                alt="Brain"
                width={700}
                height={500}
                className="reverse-img"
              />
            </Box>
          </Box>
        </Container>
      </header>
    </SOS>
  );
};

export default HomeHeader;
