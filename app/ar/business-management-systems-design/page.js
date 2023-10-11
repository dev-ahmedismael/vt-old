import Business from "@/components/ar/business-management-systems-design/Business";
import BusinessEight from "@/components/ar/business-management-systems-design/BusinessEight";
import BusinessFive from "@/components/ar/business-management-systems-design/BusinessFive";
import BusinessFour from "@/components/ar/business-management-systems-design/BusinessFour";
import BusinessSeven from "@/components/ar/business-management-systems-design/BusinessSeven";
import BusinessSix from "@/components/ar/business-management-systems-design/BusinessSix";
import BusinessThree from "@/components/ar/business-management-systems-design/BusinessThree";
import BusinessTwo from "@/components/ar/business-management-systems-design/BusinessTwo";
import Interested from "@/components/ar/interested/Interested";
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
