import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const IOT = () => {
  const section = {
    title: "إنترنت الأشياء (IoT)",
    description:
      "إنترنت الأشياء (IoT) هو مفهوم يشير إلى اتصال الأجهزة والأنظمة والأشياء المادية بالإنترنت، حتى تتمكن من جمع البيانات وتبادلها ومعالجتها دون تدخل بشري. يتم استخدام إنترنت الأشياء في مجموعة متنوعة من التطبيقات، بما في ذلك التصنيع والرعاية الصحية والنقل والطاقة والمنازل الذكية",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default IOT;
