import React from "react";
import CenteredSection from "@/templates/CenteredSection";

const Business = () => {
  const section = {
    title: "تصميم أنظمة إدارة الأعمال",
    description:
      "تصميم أنظمة الأعمال التي تساعد المنشآت على أداء أعمالها سواء كانت برامج على الإنترنت أو تطبيقات الهاتف المحمول أو برامج على الشبكة الداخلية للشركة أو تصميم أنظمة الأعمال هو عملية إنشاء نظام معلومات متكامل يلبي احتياجات العمل. يتضمن ذلك تحديد متطلبات العمل، وتصميم النظام، وتطوير النظام، واختبار النظام، ونشر النظام",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Business;
