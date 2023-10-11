import React from "react";
import CenteredSection from "@/templates/CenteredSection";
import { Box } from "@mui/material";

const Vpn = () => {
  const section = {
    title: "خدمات ربط موقع VPN",
    description:
      "نحن نقدم أحدث موصلات الويب من خلال ربط جميع المواقع والفروع بشبكة واحدة آمنة. يمكننا تقديم عدة خيارات لربط الفروع في مدن مختلفة في شبكة واحدة قوية حتى تتمكن من تشغيل نظام سلس بكل سهولة ويسر وتوفر عليك عناء البحث عن طريقة تقليدية ومكلفة لربط الفروع",
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <CenteredSection
        title={section.title}
        description={section.description}
      />
    </Box>
  );
};

export default Vpn;
