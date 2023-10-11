import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const Cameras = () => {
  const section = {
    title: "الكاميرات والمنازل الذكية",
    description:
      "رؤية الأشياء هي شركة رائدة في مجال حلول المنزل الذكي وتكنولوجيا المراقبة. مع التزامنا العميق بالابتكار، نحن متخصصون في تقديم أحدث كاميرات المراقبة وأجهزة المنزل الذكية المتطورة لتعزيز الأمن والراحة",
  };
  return (
    <CenteredSection title={section.title} description={section.description} />
  );
};

export default Cameras;
