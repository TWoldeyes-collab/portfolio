export default function Experience() {
    const experiences = [
    {
      role: "Azure Data Engineer",
      company: "Oswald Companies",
      period: "May 2024 - Present",
      location: "Cleveland, OH (Remote)",
      responsibilities: [
        "Led the integration of data from six acquired companies into a unified Microsoft Fabric OneLake architecture, establishing a single source of truth across all subsidiaries",
        "Developed large-scale ETL workflows using Spark and Python orchestrated via Apache Airflow within Microsoft Fabric, processing over 60 GB of big data in single parquet loads",
        "Designed data ingestion and transformation frameworks for multi-domain data (financial, operational, regulatory) to support enterprise analytics and risk management insights",
        "Optimized Fabric Lakehouse pipelines for performance and cost efficiency through partitioning, caching, and schema evolution strategies",
        "Implemented CI/CD pipelines using Azure DevOps and Terraform for automated deployment of Fabric and Synapse data assets",
      ],
      tech: ["Microsoft Fabric", "OneLake", "Apache Airflow", "Spark", "Python", "Azure DevOps", "Terraform"],
    },
    {
      role: "Data Engineer",
      company: "Quantum Health",
      period: "Dec 2021 - May 2024",
      location: "Dublin, OH",
      responsibilities: [
        "Designed and optimized complex T-SQL stored procedures and performance-tuned queries for analytical workloads",
        "Developed ADF and SSIS pipelines to orchestrate ingestion from APIs and databases into Azure SQL and Synapse environments",
        "Built Power BI dashboards and paginated SSRS reports to support cross-functional business decisions",
        "Automated API-driven data syncs between Azure and Dynamics 365 using Python and Azure Automation Runbooks",
      ],
      tech: ["Azure Data Factory", "SSIS", "T-SQL", "Azure Synapse", "Power BI", "SSRS", "Python", "Dynamics 365"],
    },
    {
      role: "Data Integration Specialist",
      company: "Web Presented LLC",
      period: "July 2020 - Sept 2021",
      location: "Grandview, OH",
      responsibilities: [
        "Developed SSIS workflows and Azure Data Factory pipelines to consolidate multi-source datasets for BI reporting",
        "Created Power BI dashboards for real-time KPI tracking and analytics",
        "Performed data profiling and mapping to ensure consistency across systems",
      ],
      tech: ["SSIS", "Azure Data Factory", "Power BI", "SQL Server"],
    },
    {
      role: "ETL/BI Developer",
      company: "Questline Inc.",
      period: "Feb 2018 - July 2020",
      location: "Dublin, OH",
      responsibilities: [
        "Designed and maintained T-SQL queries, stored procedures, and optimized indexing for OLAP and OLTP systems",
        "Developed and deployed SSRS dashboards and enterprise BI reports across business units",
        "Created SSIS pipelines integrating SQL Server, Oracle, and cloud data platforms",
        "Implemented security and data governance practices ensuring compliance and privacy",
      ],
      tech: ["T-SQL", "SSIS", "SSRS", "SQL Server", "Oracle"],
    },
    {
      role: "ETL Developer",
      company: "The Cincinnati Insurance Companies",
      period: "May 2016 - Nov 2017",
      location: "Cincinnati, OH",
      responsibilities: [
        "Participated in R/S retirement project migrating legacy mainframe data into modern ETL architecture",
        "Documented business rules, transformation logic, and data mapping for migration workflows",
        "Developed ETL jobs for data movement from staging to integration layers using SSIS",
        "Authored ETL test plans, validation scripts, and QA documentation for data migration",
      ],
      tech: ["SSIS", "SQL Server", "ETL", "Data Migration"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p className="font-semibold">{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {idx < experiences.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-1 h-8 bg-blue-600 dark:bg-blue-400 rounded"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">Arba Minch University</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Associate of Science in Business Programming & System Analysis
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">Cincinnati State Technical & Community College</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <a 
              href="https://www.coursera.org/account/accomplishments/verify/E1EMUX3ONO0J" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-green-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Introduction to TensorFlow for AI, ML, and Deep Learning</h4>
              <p className="text-sm text-green-600 dark:text-green-400">DeepLearning.AI - Coursera</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to verify →</p>
            </a>

            <a 
              href="https://www.coursera.org/account/accomplishments/verify/LWLYHU6BADUH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Natural Language Processing in TensorFlow</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">DeepLearning.AI - Coursera</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to verify →</p>
            </a>

            <a 
              href="https://www.coursera.org/account/accomplishments/verify/ZTOYO2AH5B2U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-blue-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Convolutional Neural Networks in TensorFlow</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">DeepLearning.AI - Coursera</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to verify →</p>
            </a>

            <a 
              href="/Databricks - Generic.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Databricks Fundamentals Accreditation</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">Databricks Academy</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to view certificate →</p>
            </a>

            <a 
              href="/ModelingDatain PBI.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Modeling Data in Power BI</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">Pluralsight</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to view certificate →</p>
            </a>

            <a 
              href="/Desining Data Warehouse.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Desining Data Warehouse on Microsoft SQL Server Platform</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">Pluralsight</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to view certificate →</p>
            </a>

            <a 
              href="/Understanding Machine learning with Python.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Understanding Machine learning with Python</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">Pluralsight</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to view certificate →</p>
            </a>

            <a 
              href="/How to think about Machine learning Algorithms.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-purple-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">How to think about Machine learning Algorithms</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">Pluralsight</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Click to view certificate →</p>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}