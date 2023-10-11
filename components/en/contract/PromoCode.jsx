"use client";
import { applyDiscount, setDiscount } from "@/store/contractSlice";
import SOS from "@/templates/SOS";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const PromoCode = () => {
  const promoRef = useRef();
  const dispatch = useDispatch();
  const checkDiscount = () => {
    if (promoRef.current.value === "vt2023") {
      dispatch(applyDiscount());
      dispatch(setDiscount("2%"));
    } else {
      return;
    }
  };

  return (
    <SOS>
      <Container>
        <Box bgcolor={"#0c1933"} borderRadius={5}>
          <Container>
            <Box py={3}>
              <Typography variant="h5" color={"white"} mb={3}>
                Promo Code
              </Typography>
              <Box className="contract-form" mb={3}>
                <input
                  ref={promoRef}
                  name="promo_code"
                  placeholder="Promo Code"
                  type="text"
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundImage: "linear-gradient(to right,#21C8F6,#637BFF)",
                  width: "100%",
                  height: 60,
                  borderRadius: 2,
                  px: 5,
                }}
                onClick={checkDiscount}
              >
                Apply
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </SOS>
  );
};

export default PromoCode;
