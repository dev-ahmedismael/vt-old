import Interested from "@/components/ar/interested/Interested";
import Musadiqa from "@/components/ar/musadiqa-for-online-signature/Musadiqa";
import MusadiqaThree from "@/components/ar/musadiqa-for-online-signature/MusadiqaThree";
import MusadiqaTwo from "@/components/ar/musadiqa-for-online-signature/MusadiqaTwo";
import React from "react";

const page = () => {
  return (
    <main>
      <Musadiqa />
      <MusadiqaTwo />
      <MusadiqaThree />
      <Interested />
    </main>
  );
};

export default page;
