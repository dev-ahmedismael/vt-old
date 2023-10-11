import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const VpnThree = () => {
  const section = {
    description:
      "وهذا يعني أن VPN هي شبكة خاصة أكثر أمانًا وافتراضية، بالإضافة إلى طريقة الإرسال مثل الشبكة العامة، ولا يقتصر استخدامها من قبل مؤسسة وفروعها فقط، بل تستخدم للاتصال بالمنزل أو مكتب مثلاً مزود بنظام كاميرات المراقبة أو تقنية VOIP وغيرها.",
    imgUrl: "/images/connect.png",
    hasBtn: false,
  };
  return (
    <Box sx={{ direction: "rtl" }}>
      <RtlSection
        title={section.title}
        description={section.description}
        imgUrl={section.imgUrl}
        hasBtn={section.hasBtn}
      />
    </Box>
  );
};

export default VpnThree;
