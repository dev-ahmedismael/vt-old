"use client";
import PrimaryBtn from "@/templates/PrimaryBtn";
import Section from "@/templates/Section";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PromoCode from "./PromoCode";
import ContractPrice from "./ContractPrice";
import { savePaymentDetails } from "@/store/contractSlice";

const ContractPayment = () => {
  const [formData, setFormData] = useState({
    credit_card_owner_name: "",
    credit_card_number: "",
    ccv: "",
    expriy_date: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    dispatch(savePaymentDetails(formData));

    router.push("/en/contract/final-contract");
  };
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Container>
      <Box py={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Section>
              <Container>
                <Box py={5}>
                  <Typography variant="h5" color={"white"} mb={3}>
                    Payment Details
                  </Typography>
                  <form className="contract-form">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <input
                          name="credit_card_owner_name"
                          placeholder="Credit card's owner name"
                          type="text"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          name="credit_card_number"
                          placeholder="Credit Card Number"
                          type="number"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <input
                          name="ccv"
                          placeholder="CCV"
                          type="number"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <input
                          name="expiry_date"
                          placeholder="Expiry Date"
                          type="text"
                          pattern="\d{1,2}/\d{1,2}"
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </form>
                  <Box
                    borderTop={"2px solid white"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    mt={5}
                    pt={5}
                  >
                    <Link href={"/en/contract/product-details"}>
                      <Button
                        variant="outlined"
                        sx={{
                          "&:hover": {
                            backgroundImage:
                              "linear-gradient(to right,#21C8F6,#637BFF)",
                            border: "none",
                          },
                          height: 60,
                          borderRadius: 2,
                          px: 5,
                          borderColor: "#21C8F6",
                          color: "white",
                        }}
                      >
                        Previous
                      </Button>
                    </Link>
                    <Button
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          backgroundImage:
                            "linear-gradient(to right,#21C8F6,#637BFF)",
                          border: "none",
                        },
                        height: 60,
                        borderRadius: 2,
                        px: 5,
                        borderColor: "#21C8F6",
                        color: "white",
                      }}
                      onClick={handleSubmit}
                    >
                      Proceed
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Section>
          </Grid>
          <Grid item xs={12} sm={5}>
            <ContractPrice />
            <PromoCode />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContractPayment;
