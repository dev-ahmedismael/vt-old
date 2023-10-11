import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AI = () => {
  const section = {
    title: "الذكاء الاصطناعي",
    description:
      "الذكاء الاصطناعي (AI) هو أحد مجالات علوم الكمبيوتر الذي يتعامل مع إنشاء كيانات ذكية، وهي أنظمة يمكنها التفكير والتعلم والتصرف بشكل مستقل. يتضمن الذكاء الاصطناعي مجموعة واسعة من التقنيات، بما في ذلك التعلم الآلي، والتعلم العميق، ومعالجة اللغة الطبيعية، ورؤية الكمبيوتر ",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default AI;
