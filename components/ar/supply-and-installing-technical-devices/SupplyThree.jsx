import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";
import React from "react";

const SupplyThree = () => {
  const section = {
    description:
      "قم بتأمين مستقبلك من خلال حلول الأمن السيبراني الخاصة بـ Vision Things في عصر تتواجد فيه تهديدات الأمن السيبراني بشكل دائم، فإن Vision Things هي درعك ضد الهجمات الرقمية. تم تصميم حلول الأمن السيبراني المتقدمة لدينا لحماية بياناتك وأنظمتك المهمة. معنا، يمكنك أن تطمئن إلى أن معلومات مؤسستك آمنة. إن التزامنا بالبقاء في مواجهة التهديدات الناشئة يضمن أن تكون إجراءات الأمن السيبراني الخاصة بك محدثة دائمًا، مما يوفر لك راحة البال التي تحتاجها للتركيز على ما هو أكثر أهمية - نجاح عملك.",
    imgUrl: "/images/device_installing.png",
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

export default SupplyThree;
