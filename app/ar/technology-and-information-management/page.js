import Interested from "@/components/ar/interested/Interested";
import Tech from "@/components/ar/technology-and-information-management/Tech";
import TechAssociated from "@/components/ar/technology-and-information-management/TechAssociated";
import TechFour from "@/components/ar/technology-and-information-management/TechFour";
import TechThree from "@/components/ar/technology-and-information-management/TechThree";
import TechTwo from "@/components/ar/technology-and-information-management/TechTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Tech />
      <TechTwo />
      <TechThree />
      <TechFour />
      <TechAssociated />
      <Interested />
    </main>
  );
};

export default page;
