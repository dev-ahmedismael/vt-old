"use client";
import Section from "@/templates/Section";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const ContractSteps = () => {
  const path = usePathname();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Terms and Conditions",
      url: "/en/contract",
    },
    {
      id: 2,
      title: "Personal Information",
      url: "/en/contract/personal-information",
    },
    {
      id: 3,
      title: "Product Details",
      url: "/en/contract/product-details",
    },
    { id: 4, title: "Payment", url: "/en/contract/payment" },
    {
      id: 5,
      title: "Contract",
      url: "/en/contract/final-contract",
    },
  ];
  const currentStepObject = steps.find((e) => e.url === path);

  useEffect(() => {
    switch (path) {
      case "/en/contract":
        setCurrentStep(1);
        break;
      case "/en/contract/personal-information":
        setCurrentStep(2);
        break;
      case "/en/contract/product-details":
        setCurrentStep(3);
        break;
      case "/en/contract/payment":
        setCurrentStep(4);
        break;
      case "/en/contract/final-contract":
        setCurrentStep(5);
        break;
    }
  }, [path]);

  return (
    <Container>
      <Box
        border={"2px solid white"}
        borderRadius={5}
        bgcolor={"#0c1933"}
        py={2}
      >
        <Container>
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent={"space-between"}
          >
            {steps.map((step) => (
              <Box
                key={step.id}
                display={step.id === 5 ? "none" : "flex"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  border={"2px solid white"}
                  borderRadius={"100%"}
                  width={40}
                  height={40}
                  bgcolor={currentStep > step.id ? "#51a29d" : "#010e28"}
                >
                  {currentStep > step.id ? (
                    <DoneIcon sx={{ color: "white" }} />
                  ) : (
                    <Typography color={path === step.url && "white"}>
                      {step.id}
                    </Typography>
                  )}
                </Box>
                <Typography color={path === step.url && "white"} ml={2}>
                  {step.title}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            display={{ xs: "flex", sm: "none" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack spacing={2} direction="row">
              <CircularProgress
                sx={{ color: "#51a29d" }}
                variant="determinate"
                value={(currentStep - 1) * 25}
              />
            </Stack>
            <Typography>{currentStepObject.title}</Typography>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default ContractSteps;
