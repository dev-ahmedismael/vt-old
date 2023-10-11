import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Musadiqa = () => {
  const section = {
    title: "المصدقة للتوقيع على الانترنت",
    description:
      "هي منصة إلكترونية تساعد الأفراد والشركات على إصدار الخطابات والعقود وإضافة هوياتهم وأختامهم وتواقيعهم إليها بسهولة ويسر. سيتم تصديق جميع المستندات باستخدام رمز الاستجابة السريعة  للتحقق منها",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Musadiqa;
