"use client";
import Section from "@/templates/Section";
import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Title from "@/templates/Title";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { redirect } from "next/navigation";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

const ContractTerms = () => {
  const points = [
    "A contract is electronic, issued within a single step after payment of a contract and can be verified through QR.",
    "The customer or second party is responsible for the data entered into the contract.",
    "The contract was issued by a facility licensed to provide maintenance service to security agencies by the High Industrial Security Authority.",
    "Refund cannot be requested if the contract is printed or the contract is loaded.",
    "There will be additional charges if the customer requests a visit.",
  ];

  const [itemOne, setItemOne] = useState(false);
  const [itemTwo, setItemTwo] = useState(false);
  const handleItemOneChange = () => {
    setItemOne(!itemOne);
  };
  const handleItemTwoChange = () => {
    setItemTwo(!itemTwo);
  };
  return (
    <Section>
      <Container>
        <Box py={5}>
          <Title>
            <Typography variant="h5" color={"white"}>
              Welcome to the Electronic Contract Service for the maintenance of
              security cameras
            </Typography>
          </Title>
          <Typography variant="h6" my={3}>
            Terms and Conditions:
          </Typography>
          <ol>
            {points.map((point, index) => (
              <li key={index}>
                <Typography mb={1}>{point}</Typography>
              </li>
            ))}
          </ol>
          <Box py={5}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to these Terms and Conditions and the rest of the Terms and Conditions."
                onChange={handleItemOneChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the return and privacy policy."
                onChange={handleItemTwoChange}
              />
            </FormGroup>
          </Box>
          <Box
            borderTop={"2px solid white"}
            display={"flex"}
            justifyContent={"space-between"}
            pt={5}
          >
            <Button
              variant="outlined"
              disabled
              sx={{
                height: 60,
                borderRadius: 2,
                px: 5,
                borderColor: "lightgray",
                color: "white",
                "&.Mui-disabled": {
                  color: "#c0c0c0",
                  border: "1px solid #c0c0c0",
                },
              }}
            >
              Previous
            </Button>
            {itemOne === true && itemTwo === true ? (
              <Link href={"/en/contract/personal-information"}>
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
                  Next
                </Button>
              </Link>
            ) : (
              <Tooltip
                placement="top-end"
                title="You've to agree to our terms & conditions first"
              >
                <Box>
                  <Button
                    variant="outlined"
                    disabled
                    sx={{
                      height: 60,
                      borderRadius: 2,
                      px: 5,
                      borderColor: "lightgray",
                      color: "white",
                      "&.Mui-disabled": {
                        color: "#c0c0c0",
                        border: "1px solid #c0c0c0",
                      },
                    }}
                  >
                    Next
                  </Button>{" "}
                </Box>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default ContractTerms;
