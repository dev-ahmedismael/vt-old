import Title from "@/templates/Title";
import { Box, Typography } from "@mui/material";
import React from "react";

const BusinessEight = () => {
  return (
    <section>
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <Title>
          <Typography variant="h3" color={"white"}>
            Software Development Steps
          </Typography>
        </Title>
      </Box>
      <img src="/images/steps.png" alt="Steps" width={"100%"} />
    </section>
  );
};

export default BusinessEight;
