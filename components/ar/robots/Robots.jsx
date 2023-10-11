import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Robots = () => {
  const section = {
    title: "الروبوتات",
    description:
      "الروبوتات هي آلات يمكنها أداء المهام تلقائيًا. يتم استخدامها في مجموعة متنوعة من التطبيقات، بما في ذلك التصنيع والرعاية الصحية والبحث العلمي والدفاع. الروبوتات هي تكنولوجيا واعدة ذات إمكانات كبيرة. ومن خلال إجراء المزيد من الأبحاث في هذا المجال، يمكننا تطوير الروبوتات التي يمكنها تحسين حياتنا بعدة طرق",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Robots;
