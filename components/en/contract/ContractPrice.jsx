"use client";
import { calcTotalPrice } from "@/store/contractSlice";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ContractPrice = () => {
  const productDetails = useSelector((state) => state.contract.productDetails);
  const camerasCount =
    parseInt(productDetails.indoor_cameras) +
    parseInt(productDetails.outdoor_cameras);
  const price = () => {
    if (camerasCount > 0 && camerasCount <= 10) {
      return 1000;
    } else if (camerasCount > 10 && camerasCount <= 15) {
      return 1500;
    } else if (camerasCount > 16 && camerasCount <= 20) {
      return 2000;
    } else if (camerasCount > 20 && camerasCount <= 30) {
      return 3000;
    } else if (camerasCount > 30 && camerasCount <= 40) {
      return 4000;
    } else if (camerasCount > 40 && camerasCount <= 50) {
      return 5000;
    } else if (camerasCount > 50 && camerasCount <= 60) {
      return 6000;
    } else if (camerasCount > 60 && camerasCount <= 70) {
      return 7000;
    } else if (camerasCount > 70 && camerasCount <= 80) {
      return 8000;
    } else if (camerasCount > 80 && camerasCount <= 90) {
      return 9000;
    } else if (camerasCount > 90 && camerasCount <= 100) {
      return 10000;
    } else return 10000;
  };

  const vat = price() * 0.15;

  const totalPrice = price() + vat;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotalPrice(totalPrice));
  }, []);

  const totalStatePrice = useSelector((state) => state.contract.totalPrice);
  const discount = useSelector((state) => state.contract.discount);

  return (
    <Section>
      <Box py={3}>
        <Box>
          <Container>
            <Typography variant="h5" color={"white"} mb={3}>
              Price
            </Typography>
          </Container>
        </Box>
        <Box bgcolor={"#010e28"} py={2}>
          <Container>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Price</Typography>
              <Typography>{price()}</Typography>
            </Box>
          </Container>
        </Box>
        <Box py={2}>
          <Container>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>VAT (15%)</Typography>
              <Typography>{vat}</Typography>
            </Box>
          </Container>
        </Box>
        <Box bgcolor={"#010e28"} py={2}>
          <Container>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Discount</Typography>
              <Typography>{discount}</Typography>
            </Box>
          </Container>
        </Box>
        <Box py={2}>
          <Container>
            <Box
              borderTop={"2px solid white"}
              display={"flex"}
              justifyContent={"space-between"}
              pt={2}
            >
              <Typography>Total Price</Typography>
              <Typography>{totalStatePrice} SAR</Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Section>
  );
};

export default ContractPrice;
