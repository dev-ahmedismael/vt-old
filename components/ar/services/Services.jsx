"use client";
import { setPages } from "@/store/pagesSlice";
import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import urlsList from "@/public/data/urlsList.json";
import axios from "axios";
import CenteredSection from "@/templates/CenteredSection";
import RtlSection from "@/templates/RtlSection";
import LtrSection from "@/templates/LtrSection";
import Title from "@/templates/Title";

const Services = () => {
  const pathname = usePathname();
  const [page, setPage] = useState([]);
  const url = urlsList.pages;

  useEffect(() => {
    axios.get(url).then((res) => {
      let pages = res.data;
      let foundPage = pages.find(
        (page) => `/ar/services/${page.slug}` == pathname
      );
      setPage(foundPage);
    });
  }, []);

  const contents = page?.contents;

  const primaryContent = contents?.find(
    (content) => content.content_type === "primary"
  );
  const secondaryContent = contents?.find(
    (content) => content.content_type === "secondary"
  );

  const textContent = contents?.filter(
    (content) => content.content_type === "text_only"
  );
  const textWithImgContent = contents?.filter(
    (content) => content.content_type === "text_with_image"
  );
  return (
    <Box py={5} sx={{ direction: "rtl" }}>
      {primaryContent && (
        <CenteredSection
          title={primaryContent.title_ar}
          description={primaryContent.content_ar}
        />
      )}
      {secondaryContent && (
        <section>
          <Container>
            <Box py={5} sx={{ direction: "rtl" }}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <img
                      src={`http://localhost:8000/${secondaryContent.image}`}
                      alt="AI"
                      width={"100%"}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Title>
                      <Typography color={"white"} variant="h4">
                        {secondaryContent.title_ar}
                      </Typography>
                    </Title>
                    <Typography variant="h6" whiteSpace={"pre"}>
                      {secondaryContent.content_ar}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      )}
      {textWithImgContent?.length !== 0 &&
        textWithImgContent?.map((content) => (
          <Box key={content.id}>
            <LtrSection
              title={content.title_ar}
              description={content.content_ar}
              imgUrl={`http://localhost:8000/${content.image}`}
            />
          </Box>
        ))}
      {textContent?.length !== 0 &&
        textContent?.map((content) => (
          <Box key={content.id}>
            <Section>
              <Container>
                <Box py={5}>
                  <Typography variant="h5" color={"white"} mb={5}>
                    {content.title_ar}
                  </Typography>
                  <Typography whiteSpace={"pre"}>
                    {content.content_ar}
                  </Typography>
                </Box>
              </Container>
            </Section>
          </Box>
        ))}
    </Box>
  );
};

export default Services;
