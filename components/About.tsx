export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a Senior Data Engineer with over 8 years of experience designing, building, and optimizing end-to-end data solutions across cloud and on-prem environments. Currently at Oswald Companies, I lead enterprise data integration initiatives using Microsoft Fabric and Azure. My expertise lies in developing scalable data pipelines, integrating APIs, and modernizing analytics platforms that empower data-driven decisions.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I have deep hands-on experience with Microsoft Fabric, Azure Data Factory, Synapse Analytics, and Databricks, leveraging these tools to orchestrate complex ETL workflows and automate data ingestion from diverse sources — including REST APIs, Dynamics 365, and on-prem SQL Servers. I am skilled in Python, T-SQL, and PySpark, with proven success processing high-volume datasets (60+ GB single file loads) and integrating data from multiple acquired companies into unified architectures.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My projects often involve data integration, schema evolution, and delta lake design, with a strong focus on query performance tuning and data governance. I take pride in translating business requirements into robust technical architectures — ensuring data accuracy, traceability, and scalability.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              Beyond technical delivery, I am passionate about continuous learning and staying ahead in the cloud data ecosystem. Whether it is implementing new Fabric features, optimizing Spark clusters, or building self-service analytics solutions, I bring both curiosity and precision to every solution I build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Migration Projects</p>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">75%</h3>
              <p className="text-gray-600 dark:text-gray-400">Performance Improvement</p>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-400">Project Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}