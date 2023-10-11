import Call from "@/components/ar/call-center-management/Call";
import CallAssociated from "@/components/ar/call-center-management/CallAssociated";
import CallFour from "@/components/ar/call-center-management/CallFour";
import CallThree from "@/components/ar/call-center-management/CallThree";
import CallTwo from "@/components/ar/call-center-management/CallTwo";
import Interested from "@/components/ar/interested/Interested";
import React from "react";

const page = () => {
  return (
    <main>
      <Call />
      <CallTwo />
      <CallThree />
      <CallFour />
      <CallAssociated />
      <Interested />
    </main>
  );
};

export default page;
