import Business from "@/components/en/business-management-systems-design/Business";
import BusinessEight from "@/components/en/business-management-systems-design/BusinessEight";
import BusinessFive from "@/components/en/business-management-systems-design/BusinessFive";
import BusinessFour from "@/components/en/business-management-systems-design/BusinessFour";
import BusinessSeven from "@/components/en/business-management-systems-design/BusinessSeven";
import BusinessSix from "@/components/en/business-management-systems-design/BusinessSix";
import BusinessThree from "@/components/en/business-management-systems-design/BusinessThree";
import BusinessTwo from "@/components/en/business-management-systems-design/BusinessTwo";
import Interested from "@/components/en/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <Business />
      <BusinessTwo />
      <BusinessThree />
      <BusinessFour />
      <BusinessFive />
      <BusinessSix />
      <BusinessSeven />
      <BusinessEight />
      <Interested />
    </main>
  );
};

export default page;
