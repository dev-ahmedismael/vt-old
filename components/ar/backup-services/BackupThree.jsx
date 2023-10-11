import React from "react";
import RtlSection from "@/templates/RtlSection";
import { Box } from "@mui/material";

const BackupThree = () => {
  const section = {
    description:
      "في هذه المقالة، يتم تسليط الضوء على أهمية التخزين السحابي ومزاياه مقارنة بالأشكال التقليدية للنسخ الاحتياطي للبيانات. يوفر Veeam Backup & Replication v11 حماية حديثة للبيانات رائدة في الصناعة لمؤسستك المتنامية، بما في ذلك بعض الإمكانات السحابية والأمان الجديدة الرائعة في أحدث إصدار V11A. سواء كنت تبحث عن إمكانات السحابة الهجينة الأكثر مرونة أو أقوى خيارات الحماية والاسترداد من برامج الفدية، فإن Veeam جاهز، Veeam يقدم خيارات تخزين صلبة غير قابلة للتغيير، وخيارات نسخ احتياطي سحابية يمكن الاعتماد عليها، وحماية مستمرة للبيانات وغير ذلك الكثير تحت منصة واحدة. مع ترخيص محمول واحد لجميع أحمال العمل.",
    imgUrl: "/images/backup.png",
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

export default BackupThree;
