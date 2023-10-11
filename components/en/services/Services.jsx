"use client";
import { setPages } from "@/store/pagesSlice";
import Section from "@/templates/Section";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const pages = useSelector((state) => state.pages.pages);
  const pathname = usePathname();
  const [page, setPage] = useState([]);
  useEffect(() => {
    pages.forEach((page) => {
      page.category.forEach((cat) => {
        let foundPage = page.category.find(
          (cat) => `/en/services/${cat.slug}` == pathname
        );
        if (foundPage) {
          setPage(foundPage);
        }
      });
    });
  }, []);

  return (
    <Section>
      <Container>
        <Box py={5}>
          {page?.contents?.map((content) => (
            <Box mb={5}>
              <Typography>{content.title.en}</Typography>
              <Typography>{content.content.en}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Services;
