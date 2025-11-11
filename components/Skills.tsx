import { FaCloud, FaPython, FaDatabase, FaCode } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud & Big Data",
      icon: <FaCloud className="text-4xl text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Microsoft Fabric", level: 95 },
        { name: "Azure Data Factory", level: 95 },
        { name: "Azure Synapse Analytics", level: 90 },
        { name: "Databricks", level: 85 },
        { name: "Apache Spark", level: 80 },
        { name: "Snowflake", level: 60 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <FaCode className="text-4xl text-green-600 dark:text-green-400" />,
      skills: [
        { name: "T-SQL", level: 95 },
        { name: "Python", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "PowerShell", level: 85 },
      ],
    },
    {
      title: "Databases & ETL",
      icon: <FaDatabase className="text-4xl text-purple-600 dark:text-purple-400" />,
      skills: [
        { name: "SQL Server", level: 95 },
        { name: "SSIS", level: 80 },
        { name: "OneLake", level: 90 },
        { name: "Delta Lake", level: 90 },
        { name: "Azure Blob Storage", level: 90 },
      ],
    },
    {
      title: "BI & DevOps Tools",
      icon: <FaPython className="text-4xl text-yellow-600 dark:text-yellow-400" />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "SSRS", level: 90 },
        { name: "Azure DevOps", level: 85 },
        { name: "Databricks", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Terraform", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}