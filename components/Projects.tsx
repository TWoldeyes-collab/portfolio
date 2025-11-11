import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Microsoft Fabric Enterprise Data Integration",
      description: "Led the integration of data from six acquired companies into a unified Microsoft Fabric OneLake architecture, establishing a single source of truth across all subsidiaries. Developed large-scale ETL workflows using Spark and Python orchestrated via Apache Airflow, processing over 60 GB of big data in single parquet loads.",
      tech: ["Microsoft Fabric", "OneLake", "Apache Airflow", "PySpark", "Python", "Parquet"],
      highlights: [
        "Integrated data from 6 acquired companies",
        "Processed 60+ GB files in single loads",
        "Implemented medallion architecture (Bronze-Silver)",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Azure Data Factory ETL Pipeline Optimizer",
      description: "Designed and implemented CI/CD pipelines for Azure Data Factory using Azure DevOps. Built comprehensive data processing solutions handling 700+ tables with automated schema management and DDL-based revisions.",
      tech: ["Azure Data Factory", "Azure Data Factory", "C#", "Azure DevOps", "SQL Server"],
      highlights: [
        "300+ tables automated",
        "Implemented OAuth authentication",
        "Reduced manual deployment by 90%",
      ],
      github: "#",
      demo: "#",
    },
     {
      title: "Azure Data Factory CI/CD Automation",
      description: "Implemented comprehensive CI/CD pipelines using Azure DevOps and Terraform for automated deployment of Fabric and Synapse data assets. Optimized Fabric Lakehouse pipelines for performance and cost efficiency through partitioning, caching, and schema evolution strategies.",
      tech: ["Azure DevOps", "Terraform", "Azure Data Factory", "Azure Synapse", "CI/CD"],
      highlights: [
        "Automated deployment pipelines",
        "Reduced deployment time by 80%",
        "Implemented infrastructure as code",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Multi-Domain Data Ingestion Framework",
      description: "Designed data ingestion and transformation frameworks for multi-domain data (financial, operational, regulatory) to support enterprise analytics and risk management insights. Built scalable ETL workflows handling diverse data sources including REST APIs, Dynamics 365, and on-prem SQL Servers.",
      tech: ["Azure Data Factory", "SSIS", "Python", "REST APIs", "Dynamics 365", "SQL Server"],
      highlights: [
        "Integrated financial, operational, and regulatory data",
        "Automated API-driven data syncs",
        "Built self-service analytics models",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "S3 to Delta Lake Integration System",
      description: "Built a scalable data integration system for processing S3 data into Delta Lake format, supporting both cumulative baseline loads and daily incremental changes with proper change data capture operations.",
      tech: ["PySpark", "Delta Lake", "AWS S3", "Python", "Azure"],
      highlights: [
        "Real-time CDC processing",
        "Automated baseline and incremental loads",
        "Scalable medallion architecture",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Power BI Enterprise Analytics Solution",
      description: "Developed comprehensive ADF and SSIS pipelines to orchestrate ingestion from APIs and databases into Azure SQL and Synapse environments. Built Power BI dashboards and paginated SSRS reports to support cross-functional business decisions with real-time KPI tracking.",
      tech: ["Power BI", "SSRS", "Azure Data Factory", "SSIS", "Azure Synapse", "T-SQL"],
      highlights: [
        "Created interactive dashboards for executives",
        "Real-time KPI tracking and analytics",
        "Supported cross-functional business decisions",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "HIPAA-Compliant Healthcare Data Pipeline",
      description: "Developed SFTP-to-Azure automation system for healthcare data integration with comprehensive security measures ensuring HIPAA compliance. Implemented end-to-end encryption and audit logging.",
      tech: ["Python", "Azure", "SFTP", "SQL Server", "Security"],
      highlights: [
        "100% HIPAA compliant",
        "Automated data validation",
        "End-to-end encryption",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Legacy Data Migration to Modern ETL",
      description: "Participated in R/S retirement project migrating legacy mainframe data into modern ETL architecture. Documented business rules, transformation logic, and data mapping for migration workflows. Developed ETL jobs for data movement from staging to integration layers using SSIS.",
      tech: ["SSIS", "SQL Server", "ETL", "Data Migration", "Legacy Systems"],
      highlights: [
        "Migrated mainframe data to modern architecture",
        "Documented complex business rules",
        "Created comprehensive QA validation scripts",
      ],
      github: "#",
      demo: "#",
    },

  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {project.highlights.map((highlight, highlightIdx) => (
                    <li key={highlightIdx} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaGithub size={20} />
                  <span>Code</span>
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaExternalLinkAlt size={18} />
                  <span>Details</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}