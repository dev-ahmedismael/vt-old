import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AR = () => {
  const section = {
    title: "الواقع المعزز",
    description:
      "الواقع المعزز (AR) هو تقنية تقوم بتركيب صورة تم إنشاؤها بواسطة الكمبيوتر على رؤية المستخدم للعالم الحقيقي، وبالتالي توفير رؤية مركبة. يمكن استخدام الواقع المعزز في مجموعة متنوعة من التطبيقات، بما في ذلك التعليم والصناعة والألعاب والترفيه",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default AR;
