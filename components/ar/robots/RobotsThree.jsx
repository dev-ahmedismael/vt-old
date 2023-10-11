import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";
import React from "react";

const RobotsThree = () => {
  const section = {
    description:
      "الروبوتات هي آلات يمكنها أداء المهام تلقائيًا. يتم استخدامها في مجموعة متنوعة من التطبيقات، بما في ذلك التصنيع والرعاية الصحية والبحث العلمي والدفاع. الروبوتات هي تكنولوجيا واعدة ذات إمكانات كبيرة. ومن خلال إجراء المزيد من الأبحاث في هذا المجال، يمكننا تطوير الروبوتات التي يمكنها تحسين حياتنا بعدة طرق. وعلى الرغم من هذه التحديات، فإن الروبوتات مجال سريع التطور. ومع المزيد من الأبحاث، يمكننا تطوير الروبوتات التي يمكنها تحسين حياتنا في العديد من المجالات.",
    imgUrl: "/images/robot.png",
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

export default RobotsThree;
