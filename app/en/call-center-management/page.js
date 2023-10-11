import Call from "@/components/en/call-center-management/Call";
import CallAssociated from "@/components/en/call-center-management/CallAssociated";
import CallFour from "@/components/en/call-center-management/CallFour";
import CallThree from "@/components/en/call-center-management/CallThree";
import CallTwo from "@/components/en/call-center-management/CallTwo";
import Interested from "@/components/en/interested/Interested";
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
