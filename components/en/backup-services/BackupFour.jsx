import React from "react";
import Section from "@/templates/Section";
import { Box, Container, Typography } from "@mui/material";

const BackupFour = () => {
  const paragraphs = [
    {
      id: 1,
      title: "Meet Veeam Backup & Replication",
      points: [
        "Cloud-native Backup built-in for AWS, Azure and Google",
        "Reliable Ransomware Protection",
        "Continuous Data Protection (CDP)",
        "Increased Cloud Security",
        "Increased Cloud Security",
      ],
      text: "",
    },
    {
      id: 2,
      title: "Veeam types",
      points: [
        "Cloud, Virtual, Physical, SaaS, Kubernetes, VMware, Hyper-V, Windows, Linux, UNIX, NAS, AWS, Azure, Enterprise Apps, and more.",
        "Veeam Availability Suite.",
        "Veeam Backup & Replication.",
        "This add-on for Veeam Backup & Replication provides one-click site recovery orchestration, DR testing, and documentation of your backups.",
      ],
      text: "",
    },
    {
      id: 3,
      title:
        "Veeam Backup & Replication is Veeam's flagship product and is a comprehensive data backup and recovery solution. It is widely used by companies and organizations to protect data and ensure quick and easy recovery. Here are some key features of Veeam Backup & Replication:",
      points: [
        "Advanced Backup: Veeam Backup & Replication provides complete, synchronous and progressive data backups. You can configure backup schedules, specify backup retention levels, and specify what data is copied.",
        "Fast Recovery: Veeam Backup & Replication enables fast and efficient data recovery. Easily and quickly restore files, folders, and virtual devices from backups.",
        "Compatibility and Integration: Veeam Backup & Replication supports a wide range of different environments and technologies. Supports VMware vSphere, Microsoft Hyper-V, Nutanix AHV, and many other technologies.",
        "Cost-effective recovery: Veeam Backup & Replication helps achieve cost-effective recovery with data compression, advanced storage, and capacity management. You can optimize storage space utilization and reduce storage costs.",
        "Comprehensive Protection: Veeam Backup & Replication provides options for comprehensive data protection, including multi-site backup, disaster recovery and high availability configurations.",
      ],
      text: "Veeam Backup & Replication is a powerful and reliable product that provides easy and effective data protection and recovery. Modernize your data protection and eliminate downtime with a simple, flexible, reliable, and robust solution to protect cloud, SaaS, virtual, and physical workloads. Veeam Backup for Microsoft 365 software. Eliminate the risk of losing access and control of Microsoft 365 data with scalable backup for large organizations.",
    },
    {
      id: 4,
      title:
        "Veeam Backup for Microsoft Office 365 is a product from Veeam that provides a backup and restore solution for Microsoft Office 365 mail, SharePoint and OneDrive for Business data. It aims to protect the data stored in the Microsoft Office 365 environment and provide fast and reliable recovery when needed. Here are some key features of Veeam Backup for Microsoft Office 365:",
      points: [
        "Comprehensive Backup: Veeam Backup for Microsoft Office 365 enables comprehensive backup of your Office 365 data, including email, attachments, contacts, calendars, tasks, and files in SharePoint and OneDrive for Business.",
        "Flexible recovery: You can restore precisely defined data according to your needs. Veeam Backup for Microsoft Office 365 provides multiple restore options, including individual restore of selected items, bulk restore, and full user restore.",
        "Comprehensive Protection: Veeam Backup for Microsoft Office 365 provides comprehensive data protection with multi-site backup, long-term backup retention, and saved data validation.",
        "Ease of use: Veeam Backup for Microsoft Office 365 features an intuitive and easy-to-use user interface. Configure backup schedules, define backup retention policies, and easily manage restores.",
        "Fast and reliable recovery: Veeam Backup for Microsoft Office 365 enables fast and reliable data recovery when needed. Accurately and quickly recover data for individual users, groups or the entire tenant.",
      ],
      text: "Veeam Backup for Microsoft Office 365 is a powerful and effective solution to protect and restore Microsoft Office 365 data easily and securely. Veeam Backup for Salesforce. Veeam Backup for Salesforce v2 is a data protection solution designed specifically for Salesforce environments. It provides comprehensive backup, recovery, and retention capabilities for Salesforce data, ensuring that critical business information is protected and can be easily restored if needed.",
    },
    {
      id: 5,
      title: "Key features of Veeam Backup for Salesforce v2 include:",
      points: [
        "Backup and recovery: The solution provides automatic daily backups of your Salesforce data, including standard and custom objects, attachments, and metadata. It enables accurate recovery of individual records, objects, or entire Salesforce instances, allowing organizations to quickly recover data in the event of accidental deletion, data corruption, or other issues.",
        "Retention Policies: Veeam Backup for Salesforce v2 allows organizations to define flexible retention policies for their Salesforce backups. This ensures that data is retained for the required period of time and meets compliance requirements.",
        "Data Export: The solution enables the export of Salesforce data to external storage locations, providing an additional layer of protection and allowing organizations to get a copy of their data outside of the Salesforce platform.",
        "Security and Compliance: Veeam Backup for Salesforce v2 ensures the security and integrity of backed data by utilizing encryption and secure access controls. Helps organizations meet regulatory compliance requirements by providing a reliable backup and recovery solution.",
        "Automation and Scheduling: The solution provides automation and scheduling capabilities, allowing organizations to set up regular backup jobs and define specific backup windows that align with their business needs.",
        "Reporting and Monitoring: Veeam Backup for Salesforce v2 provides detailed reporting and monitoring capabilities, giving organizations visibility into backup and recovery processes. This helps track the status of backups, identify any issues, and ensure data protection compliance.",
      ],
      text: "Veeam Backup for Salesforce v2 is designed to simplify and simplify the backup and recovery process for Salesforce environments, providing peace of mind and ensuring that critical business data is protected and restored. Veeam Data Platform is a comprehensive data management and protection solution offered by Veeam. It is designed to address the challenges of managing and protecting data across multiple cloud and hybrid cloud environments. The Veeam Data Platform provides a unified approach to data management, enabling organizations to securely back up, restore, and analyze their data.",
    },
  ];

  return (
    <Section>
      <Container>
        <Box py={5}>
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

export default BackupFour;
