import Section from "@/templates/Section";
import Title from "@/templates/Title";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AIResearch = () => {
  const paragraphs = [
    {
      id: 1,
      title:
        "هناك العديد من المجالات البحثية الرئيسية في مجال الذكاء الاصطناعي، بما في ذلك:",
      points: [
        "التعلم الآلي: التعلم الآلي هو أحد فروع الذكاء الاصطناعي الذي يتعامل مع إنشاء نماذج رياضية يمكنها التعلم من البيانات دون برمجتها بشكل صريح.",
        "التعلم العميق: التعلم العميق هو نوع من التعلم الآلي الذي يعتمد على الشبكات العصبية الاصطناعية. يمكن للشبكات العصبية الاصطناعية أن تتعلم تمثيلات معقدة للبيانات، ويمكن استخدامها لأداء مجموعة واسعة من المهام، مثل التعرف على الصور، والترجمة الآلية، وتوليد النص الإبداعي.",
        "معالجة اللغة الطبيعية (NLP): معالجة اللغة الطبيعية (NLP) هي أحد مجالات الذكاء الاصطناعي التي تتعامل مع تفاعل أجهزة الكمبيوتر مع اللغة البشرية. يمكن استخدام البرمجة اللغوية العصبية لفهم اللغة البشرية وإنشاء النصوص وترجمة اللغات وكتابة أنواع مختلفة من المحتوى الإبداعي.",
        "رؤية الكمبيوتر: رؤية الكمبيوتر هي أحد مجالات الذكاء الاصطناعي التي تتعامل مع معالجة الصور ومقاطع الفيديو. يمكن استخدام الرؤية الحاسوبية لتحديد الأشياء في الصور وفهم المحتوى المرئي وإنشاء مقاطع فيديو ثلاثية الأبعاد.",
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
        </Box>
      </Container>
    </Section>
  );
};

export default AIResearch;
