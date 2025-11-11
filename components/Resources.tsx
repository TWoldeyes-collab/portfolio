import { FaBook, FaVideo, FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function Resources() {
  const resources = [
    {
      title: "Microsoft Fabric Best Practices",
      description: "A comprehensive guide on implementing medallion architecture and optimizing data pipelines in Microsoft Fabric.",
      category: "Guide",
      icon: <FaBook className="text-4xl text-blue-600 dark:text-blue-400" />,
      link: "#",
      tags: ["Microsoft Fabric", "Data Engineering", "Best Practices"],
    },
    {
      title: "PySpark Performance Optimization",
      description: "Tips and techniques for optimizing PySpark jobs, reducing processing time, and handling large-scale data efficiently.",
      category: "Tutorial",
      icon: <FaCode className="text-4xl text-green-600 dark:text-green-400" />,
      link: "#",
      tags: ["PySpark", "Performance", "Optimization"],
    },
    {
      title: "Azure Data Factory CI/CD Pipeline",
      description: "Step-by-step guide on setting up continuous integration and deployment for Azure Data Factory using Azure DevOps.",
      category: "Tutorial",
      icon: <FaVideo className="text-4xl text-purple-600 dark:text-purple-400" />,
      link: "#",
      tags: ["Azure", "CI/CD", "DevOps"],
    },
    {
      title: "Delta Lake Deep Dive",
      description: "Understanding Delta Lake architecture, ACID transactions, time travel, and how to implement CDC patterns effectively.",
      category: "Guide",
      icon: <FaBook className="text-4xl text-yellow-600 dark:text-yellow-400" />,
      link: "#",
      tags: ["Delta Lake", "Data Lakehouse", "CDC"],
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Resources and Knowledge Share
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Guides, tutorials, and insights from my experience in data engineering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div>{resource.icon}</div>
                <div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">
                    {resource.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={resource.link} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold">
                <span>Read More</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}