import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Supply = () => {
  const section = {
    title: "توريد وتركيب الأجهزة التقنية",
    description:
      "Vision Things شريكك الموثوق به لخدمات تكنولوجيا المعلومات المتطورة عندما يتعلق الأمر بخدمات تكنولوجيا المعلومات، تبرز Vision Things كاسم يمكنك الوثوق به. نحن نقدم مجموعة واسعة من الحلول المبتكرة المصممة لتحويل عمليات عملك. بدءًا من توسيع الشبكات وضمان الأمن السيبراني من الدرجة الأولى وحتى توصيل جميع أجهزتك تحت التحكم بالمجال، فإن Vision Things تغطي كل ما تحتاجه. معنا، يمكنك رفع مستوى أداء شبكتك وتعزيز أمان بياناتك، مما يضمن بقاء مؤسستك قادرة على المنافسة والمرونة في المشهد الرقمي سريع الخطى اليوم",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Supply;
