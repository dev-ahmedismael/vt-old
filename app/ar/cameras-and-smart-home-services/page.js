import Cameras from "@/components/ar/cameras-and-smart-home-services/Cameras";
import CamerasAssociated from "@/components/ar/cameras-and-smart-home-services/CamerasAssociated";
import CamerasThree from "@/components/ar/cameras-and-smart-home-services/CamerasThree";
import CamerasTwo from "@/components/ar/cameras-and-smart-home-services/CamerasTwo";
import Interested from "@/components/ar/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <Cameras />
      <CamerasTwo />
      <CamerasThree />
      <CamerasAssociated />
      <Interested />
    </main>
  );
};

export default page;
