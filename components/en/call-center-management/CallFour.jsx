import React from "react";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";

const CallFour = () => {
  const paragraphs = [
    {
      id: 1,
      purpleText: "Installing and extending network phones",
      title: "The most important features of the call center:",
      points: [
        "Improved Call Quality: A network phone provides better voice quality than a traditional phone, which improves communication between employees and customers.",
        "Reduce costs: A network telephone can help reduce costs by reducing the cost of calls and reducing the need for maintenance.",
        "Increase Productivity: A network phone can help increase productivity by providing features such as bulk transfer, auto attendant, voice messaging, and email.",
        "Waiting list: It provides an arranged and scheduled list for the current supplements, meaning if the number of contacts now is more than the number of current employees, then the rest of the calls will be entered into the waiting stage, and as soon as an employee becomes available, the calls will be entered in an orderly manner.",
        "Improve security: A network phone can help improve security by providing features such as encryption and two-factor identification.",
        "Improve flexibility: Network telephony can help improve flexibility by allowing employees to work from anywhere.",
      ],
      text: "The network phone is a great alternative to the traditional corporate phone. Network telephony offers several benefits that can help companies improve the quality of communication between members of the system, reduce costs, increase productivity, improve security, and improve resilience.",
    },
    {
      id: 2,
      purpleText: "Call center service",
      title: "The most important features of the call center:",
      points: [
        "IVR system",
        "Determine working times",
        "Division of working hours",
        "Call forwarding feature",
        "Speech evaluation feature",
      ],
      text: "",
    },
    {
      id: 3,
      purpleText: "",
      title:
        "Provides a set of tools and features to improve the management and performance of call centers. Among these tools:",
      points: [
        "Automatic answering of calls: The automatic answering feature includes the ability to automatically direct incoming calls to the appropriate department or worker in the center.",
        "Smart Call Forwarding: Smart Call Forwarding allows calls to be routed based on pre-set priorities or rules, improving callers' experience and directing them to the right person to assist them.",
        "Analytics and reports: Analytics and reporting tools provide detailed reports on the center's performance and the performance of employees, which helps in identifying strengths and points of improvement and making strategic decisions.",
        "Personnel Management: Personnel management includes tools for planning and scheduling work schedules, distributing calls among employees, and monitoring and evaluating employee performance.",
        "Integration with Other Systems: CCaaS allows integration with other systems in the organization, such as customer relationship management (CRM) systems and data management systems, to provide an integrated and efficient experience for callers.",
        "Call center management service in the cloud provides many advantages, such as low cost, flexibility and high availability, and allows organizations to improve the efficiency and performance of call centers and improve the experience of callers.",
      ],
      text: "",
    },
    {
      id: 4,
      purpleText: "",
      title: "The most important features of the call center:",
      points: [
        "Improve efficiency: Call center management can help improve efficiency by automating repetitive tasks, such as answering calls and routing to the right staff.",
        "Save time and money: Call center management can help save time and money by reducing the need for personnel and physical infrastructure.",
        "Improve customer experience: Call center management can help improve customer experience by providing more responsive and efficient customer service.",
        "Increase customer satisfaction: Call center management can help increase customer satisfaction by providing more responsive and efficient customer service.",
      ],
      text: "",
    },
    {
      id: 5,
      purpleText: "",
      title:
        "The management of call centers by a professional team with experience and competence is of great importance, for the following reasons:",
      points: [
        "Improving the experience of callers: The professional call center management team helps to improve the experience of callers. Team members are trained on how to deal with callers in a professional and friendly manner, and to provide the required support and assistance efficiently and effectively.",
        "Increase efficiency and productivity: The professional call center management team works to increase efficiency and productivity in the center. The work is organized and tasks are distributed appropriately, and the processes of answering calls, transfers and time management are improved, which contributes to increasing efficiency and achieving the goals of the center.",
        "Improve the quality of service: The professional call center management team works to improve the quality of service provided to customers. Team members are trained in effective communication skills, problem-solving and handling of difficult situations, which helps in providing high quality service and customer satisfaction.",
        "Achieving commercial objectives: The professional call center management team works to achieve the commercial objectives of the organization. Team members collaborate with senior management and other departments in the organization to achieve sales, marketing, customer service, and other goals, and contribute to achieving positive results and increasing revenues.",
        "Analysis and evaluation: The professional call center management team analyzes and evaluates the performance of the center and the employees. Data is collected and analyzed to identify strengths and points of improvement, and to take the necessary actions to improve performance and achieve set goals.",
      ],
      text: "",
    },
  ];
  return (
    <Section>
      <Container>
        <Box py={5}>
          {paragraphs.map((p) => (
            <Box key={p.id} mb={5}>
              <Typography variant="h4" color={"secondary"}>
                {p.purpleText}
              </Typography>
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

export default CallFour;
