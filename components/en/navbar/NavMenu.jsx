"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { blue, indigo, lime } from "@mui/material/colors";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NavMenu = ({ pages }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Button onClick={() => setIsMenuActive(!isMenuActive)}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </Button>

      <Box
        position={"absolute"}
        zIndex={10}
        top={70}
        left={0}
        width={"100%"}
        bgcolor={"#010e28"}
      >
        <Container>
          <Box
            className={isMenuActive ? "open-navmenu" : "close-navmenu"}
            borderRadius={2}
            overflow={"hidden"}
          >
            {pages.map((page) => (
              <Box key={page.id} my={4}>
                {page.subPages.length === 0 ? (
                  <Box
                    borderRadius={1}
                    onClick={() => setIsMenuActive(!isMenuActive)}
                  >
                    <Container>
                      <Link href={page.url}>
                        <Typography>{page.title}</Typography>
                      </Link>
                    </Container>
                  </Box>
                ) : (
                  <Accordion
                    sx={{
                      boxShadow: 0,
                      bgcolor: "transparent",
                      color: "inherit",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#9fb3c8" }} />}
                      aria-controls="panel1a-content"
                      id={page.id}
                    >
                      <Typography>{page.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {page.subPages.map((subPage) => (
                        <Box
                          key={subPage.id}
                          display={"flex"}
                          mb={2}
                          onClick={() => setIsMenuActive(!isMenuActive)}
                        >
                          <Link href={subPage.url}>
                            <Typography ml={2}>{subPage.name.en}</Typography>
                          </Link>
                        </Box>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NavMenu;
