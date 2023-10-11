"use client";
import Section from "@/templates/Section";

import { Box, Grid, Button, Typography, Container } from "@mui/material";
import React, { useState } from "react";

import * as yup from "yup";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToContract, savePersonalInformation } from "@/store/contractSlice";
import { redirect, useRouter } from "next/navigation";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Required"),
  company_name: yup.string().required("Required"),
  company_size: yup.string().required("Required"),
  message: yup.string().required("Required"),
});

const ContractPersonalInformation = () => {
  //
  const cities = [
    "Abha",
    "Al Ahsa",
    "Arar",
    "Baha",
    "Buraidah",
    "Dammam",
    "Dahran",
    "Hafr Al Batin",
    "Hail",
    "Jeddah",
    "Jizan",
    "Khobar",
    "Madinah",
    "Mekka",
    "Najaf",
    "Najran",
    "Qatif",
    "Rabigh",
    "Riyadh",
    "Sakaka",
    "Tabuk",
    "Taif",
    "Yanbu",
  ];

  const companyTypes = [
    "Not a company",
    "Oil & Gas companies",
    "Constructions & Real Estate",
    "Finance & Banking",
    "Technology & IT",
    "Retails & Consumer goods",
    "Health care & Hospitals",
    "Manufactoring & Heavy industries",
    "Tourism & Hospitality",
    "Education & Universities",
    "Transportation & Logistics",
    "Agriculture & Environmental farming",
    "Media & Communications",
    "Energy & Alternative energy sources",
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company_type: "",
    commercial_number: "",
    tax_number: "",
    address: "",
    city: "",
    building_number: "",
    street_name: "",
    second_number: "",
    district: "",
    zip_code: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    dispatch(savePersonalInformation(formData));
    router.push("/en/contract/product-details");
  };
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Section>
      <Container>
        <Box py={5}>
          <form className="contract-form">
            <Typography variant="h6" color="white" mb={3}>
              Personal Information
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <input
                  name="name"
                  placeholder="Your name | Company name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <select
                  name="company_type"
                  placeholder="Company Type"
                  type="text"
                  onChange={handleChange}
                >
                  {companyTypes.map((e, index) => (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="commercial_number"
                  placeholder="Commercial Registeration Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="tax_number"
                  placeholder="Tax Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  name="address"
                  placeholder="Address"
                  type="text"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" color="white" my={3}>
              National Address
            </Typography>

            {/* Address */}
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <select
                  name="city"
                  placeholder="City"
                  type="text"
                  onChange={handleChange}
                >
                  {cities.map((e, index) => (
                    <option key={index}>{e}</option>
                  ))}
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="building_number"
                  placeholder="Building Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="street_name"
                  placeholder="Street Name"
                  type="text"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="secondary_number"
                  placeholder="Secondary Number"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="district"
                  placeholder="District"
                  type="text"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="zip_code"
                  placeholder="Zip Code"
                  type="number"
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
            <Link href={"/en/contract"}>
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
              onClick={handleSubmit}
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundImage: "linear-gradient(to right,#21C8F6,#637BFF)",
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
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default ContractPersonalInformation;
