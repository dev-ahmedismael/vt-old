import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Network = () => {
  const section = {
    title: "الشبكة والصيانة",
    description:
      "نحن شركة رؤية الأشياء متخصصون في إنشاء وتوسيع وصيانة شبكات الكمبيوتر والإنترنت لجميع القطاعات الحكومية والخاصة. لدينا فنيين محترفين في توسيع وصيانة الشبكة. يمكن أن تكون عمليات تركيب الشبكة وصيانتها معقدة وتتطلب معرفة تقنية جيدة. ولذلك، فمن المهم أن يتم تنفيذها من قبل المتخصصين ذوي الخبرة",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Network;
