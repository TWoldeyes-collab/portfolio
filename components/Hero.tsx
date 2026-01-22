"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <div className="mb-6 flex justify-center">
    <img 
      src="/profile.jpg" 
      alt="Tey Profile" 
      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-blue-600"
    />
  </div>
  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-600 dark:text-blue-400">Teshome Woldeyes</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6">
        Senior Data Engineer | 8+ Years Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Results-driven Data Engineer specializing in building scalable ETL pipelines and cloud-based analytics solutions. Expert in <span className="font-semibold text-gray-700 dark:text-gray-200">Microsoft Fabric, Azure Data Factory (ADF), Azure Synapse Analytics, Azure Automation Runbook</span>, and large-scale data migration with proven success in high-volume data workflows.
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Expertise in <span className="font-semibold text-gray-700 dark:text-gray-200">Data Analysis, SQL, SSIS, SSRS</span>, and creating comprehensive BI solutions using <span className="font-semibold text-gray-700 dark:text-gray-200">Power BI</span>. Skilled in <span className="font-semibold text-gray-700 dark:text-gray-200">Spark and Python</span> orchestration with a track record of automating solutions with 100% success rate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
            Get In Touch
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/TWoldeyes-collab" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/teshome-woldeyes-81647414b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:teshomewoldeyes@outlook.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}