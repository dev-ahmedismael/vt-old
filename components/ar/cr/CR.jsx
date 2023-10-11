import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const CR = () => {
  const section = {
    title: "رؤية الكمبيوتر",
    description:
      "رؤية الكمبيوتر (CV) هي مجال الذكاء الاصطناعي (AI) الذي يتعامل مع معالجة المعلومات المرئية من العالم الحقيقي وإنشاء نماذج للعالم المادي. يمكن استخدام رؤية الكمبيوتر لإنشاء مجموعة متنوعة من التطبيقات، مثل التعرف على الوجه، والتعرف على الأشياء، وتتبع الحركة",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default CR;
