"use client";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Box,
  Grid,
  FormControl,
  OutlinedInput,
  TextareaAutosize,
  Button,
  Typography,
  Container,
  Skeleton,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { saveProductDetails } from "@/store/contractSlice";
import { useRouter } from "next/navigation";

const ContractProductDetails = () => {
  //
  const periods = [
    "1 Month",
    "2 Months",
    "3 Months",
    "4 Months",
    "5 Months",
    "6 Months",
    "7 Months",
    "8 Months",
    "9 Months",
    "10 Months",
    "11 Months",
    "12 Months",
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
    indoor_cameras: "",
    outdoor_cameras: "",
    storage_device: "",
    period_of_record: "",
    show_screens: "",
    camera_type: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch(saveProductDetails(formData));
    router.push("/en/contract/payment");
  };
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Section>
      <Container>
        <Box py={5}>
          <form className="contract-form">
            <Typography variant="h6" color="white" mb={3}>
              Product Details
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <input
                  name="indoor_cameras"
                  placeholder="Number of indoor cameras"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="outdoor_cameras"
                  placeholder="Number of Outdoor cameras"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <select
                  name="storage_device"
                  placeholder="Storage Device Type"
                  onChange={handleChange}
                >
                  <option disabled>Select Storage Device Type</option>
                  <option value={"NVR"}>NVR</option>
                  <option value={"CCTV"}>CCTV</option>
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <select
                  name="period_of_record"
                  placeholder="Period of Record"
                  onChange={handleChange}
                >
                  <option disabled>Select Period of Record</option>
                  {periods.map((e, index) => (
                    <option key={index} value={parseInt(e)}>
                      {e}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  name="show_screens"
                  placeholder="Number of Show Screens"
                  type="number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <select
                  name="camera_type"
                  placeholder="Camera Type"
                  onChange={handleChange}
                >
                  <option disabled>Select Camera Type</option>
                  <option value={"EZVIZ"}>EZVIZ</option>
                  <option value={"Hikvision"}>Hikvision</option>
                  <option value={"Dahua"}>Dahua</option>
                </select>
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
                Previous
              </Button>
            </Link>
            <Button
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
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default ContractProductDetails;
