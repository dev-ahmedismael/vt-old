"use client";
import Section from "@/templates/Section";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import SecBtn from "@/templates/SecBtn";

const validationSchema = yup.object({
  contract_number: yup
    .string()
    .required("من فضلك ادخل رقم العقد")
    .matches(/^[0-9]+$/, "ادخل رقم عقد صالح"),
});

const ContractRenew = () => {
  const search = () => {};
  //  Form validation

  const formik = useFormik({
    initialValues: {
      contract_number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formData) => {
      search(formData);
    },
  });
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          <Typography textAlign={"center"} variant="h4" mb={5}>
            تجديد عقد كاميرات
          </Typography>
          <Box id="contract-renew" className="ar-form">
            <form>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="contract_number"
                      variant="standard"
                      label="ابحث برقم العقد"
                      sx={{
                        borderBottom: "1px solid aqua",
                        borderRadius: "4px",
                      }}
                      value={formik.values.contract_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.contract_number &&
                      Boolean(formik.errors.contract_number) && (
                        <Typography color={"error"}>
                          {formik.errors.contract_number}
                        </Typography>
                      )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        "&:hover": {
                          backgroundImage:
                            "linear-gradient(to right,#21C8F6,#637BFF)",
                          border: "none",
                        },
                        height: 60,
                        width: "100%",
                        borderRadius: 2,
                        px: 5,
                        borderColor: "#21C8F6",
                        color: "white",
                      }}
                    >
                      بحث
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default ContractRenew;
