"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PublicIcon from "@mui/icons-material/Public";
import NavlinkWithMenu from "./NavlinkWithMenu";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPages } from "@/store/pagesSlice";
import urlsList from "@/public/data/urlsList.json";

const Navbar = () => {
  const servicesPages = useSelector((state) => state.pages.pages);

  // Use router
  const path = usePathname();
  const dispatch = useDispatch();
  const url = urlsList.nav_elements;

  useEffect(async () => {
    await axios.get(url).then((res) => {
      dispatch(setPages(res.data));
    });
  }, [pages]);

  return (
    <nav>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={75}
        >
          {/* Logo on large screen only*/}
          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </Box>

          {/* Pages on large screen only */}

          <Box display={{ xs: "none", sm: "none", md: "flex" }}>
            <Box mr={2}>
              <Link href={"/en"}>
                <Typography>Home</Typography>
              </Link>
            </Box>
            <Box mr={2}>
              <Link href={"/en/about-us"}>
                <Typography>About</Typography>
              </Link>
            </Box>
            {servicesPages.map((page) => (
              <Box
                key={page.id}
                mr={2}
                className={path === page.slug && "active-navlink"}
              >
                <NavlinkWithMenu title={page.tite_en} subPages={page.pages} />
              </Box>
            ))}

            <Link href={"/en/contact-us"}>
              <Typography>Contact us</Typography>
            </Link>
          </Box>

          {/* Language */}
          <Link href={"/ar"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Typography mr={1}>AR</Typography> <PublicIcon />
            </Box>
          </Link>

          {/* Logo on small screen only*/}
          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <Link href={"/en"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </Box>

          {/* Nav menu button on small screen only */}
          {/* <Box display={{ xs: "block", sm: "block", md: "none" }}>
            <NavMenu pages={pages} />
          </Box> */}
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
