import PrimaryBtn from "@/templates/PrimaryBtn";
import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CRResearch = () => {
  const paragraphs = [
    {
      id: 1,
      title: "من أهم المجالات البحثية في مجال الرؤية الحاسوبية ما يلي:",
      points: [
        "التعرف على الوجه: يُستخدم التعرف على الوجه في العديد من التطبيقات، مثل أنظمة التحكم في الوصول، وأنظمة التعرف على الزوار.",
        "التعرف على الأشياء: يستخدم التعرف على الأشياء في العديد من التطبيقات، مثل أنظمة الخروج الذاتي في المتاجر وأنظمة التحكم في السيارات.",
        "تتبع الحركة: يستخدم تتبع الحركة في العديد من التطبيقات، مثل أنظمة تتبع الأشخاص وأنظمة تحليل الفيديو.",
      ],
      text: "",
    },
    {
      id: 2,
      title:
        "يمكن استخدام الرؤية الحاسوبية في العديد من المجالات المختلفة، بما في ذلك:",
      points: [
        "الطب: يمكن استخدام الرؤية الحاسوبية لتشخيص الأمراض ومراقبة المرضى وإجراء العمليات الجراحية.",
        "الصناعة: يمكن استخدام الرؤية الحاسوبية في مراقبة الجودة ومراقبة الإنتاج وإدارة سلسلة التوريد.",
        "النقل: يمكن استخدام الرؤية الحاسوبية في السيارات ذاتية القيادة، وأنظمة مساعدة السائق، وتحسين السلامة على الطرق.",
        "الأمان: يمكن استخدام الرؤية الحاسوبية لمراقبة الحدود والكشف عن المتفجرات ومكافحة الجريمة.",
      ],
      text: "",
    },
    {
      id: 3,
      title: "ومن أبرز المجالات البحثية في مجال الرؤية الحاسوبية:",
      points: [
        "التعلم العميق",
        "الرؤية الحسابية رؤية متعددة",
        "رؤية ثلاثية الأبعاد",
        "الرؤية تحت الماء",
      ],
      text: "",
    },
    {
      id: 4,
      title:
        "الرؤية في الفضاء أهمية الرؤية الحاسوبية تحت الماء هناك العديد من التطبيقات المحتملة للرؤية الحاسوبية تحت الماء، ومنها:",
      points: [
        "الكشف عن التلوث البحري.",
        "مراقبة الحياة البحرية.",
        "البحث و الإنقاذ.",
        "الزراعة البحرية.",
      ],
      text: "",
    },
    {
      id: 5,
      title:
        "التنقيب عن النفط والغاز يواجه الباحثون عدة تحديات عند تطوير تقنيات الرؤية الحاسوبية تحت الماء، مثل:",
      points: [
        "جودة الصورة سيئة بسبب الحيود في الماء.",
        "تغيير ظروف الإضاءة.",
        "وجود ضوضاء في الصورة وعلى الرغم من هذه التحديات، فإن الرؤية الحاسوبية تحت الماء لديها القدرة على إحداث ثورة في العديد من المجالات المتعلقة بالمحيطات.",
      ],
      text: "",
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5} sx={{ direction: "rtl" }}>
          {paragraphs.map((p) => (
            <Box key={p.id} mb={5}>
              <Typography variant="h5" color={"white"}>
                {p.title}
              </Typography>
              <ul>
                {p.points.map((point, index) => (
                  <li key={index}>
                    <Typography>{point}</Typography>
                  </li>
                ))}
              </ul>
              <Typography>{p.text}</Typography>
            </Box>
          ))}
          <Typography variant="h5" color={"white"} mb={5}>
            ومن هذه الأبحاث البحث الذي نشره مؤسس شركة رؤية الأشياء م. هتان عاشور
            تحت عنوان "التعرف على الاسماك الحجرية من الفيديو تحت الماء" الذي
            نشرته IEEE
          </Typography>
          <Link
            href={"https://ieeexplore.ieee.org/document/7275746"}
            target="_blank"
          >
            <PrimaryBtn>اقرأ البحث</PrimaryBtn>
          </Link>
        </Box>
      </Container>
    </Section>
  );
};

export default CRResearch;
