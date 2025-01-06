import React from "react";
import codei from "../Assets/code.png";
import testing from "../Assets/unit-testing.png";
import database from "../Assets/database.png";
import tools from "../Assets/tools.png";
import ai from "../Assets/ai.png";
import analystics from "../Assets/analytics.png";
import plus from "../Assets/plus.png";

const Skills = () => {
    return (
      <div className="bg-white py-16">
        <div className="border-t-2 border-gray-300 w-full mb-8"></div>
  
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
        </div>
  
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 text-center">
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={codei}
                alt="Programming"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Programming</h3>
            <p className="text-gray-600">
              C, C# (.Net), Java, Python, JavaScript, Typescript, NodeJs
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={testing}
                alt="Testing"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Testing</h3>
            <p className="text-gray-600">
              Testcafe, CucumberJs, Specflow, Junit, Moqs
            </p>
          </div>
  
          {/* Database Section */}
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={database}
                alt="Database"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Database</h3>
            <p className="text-gray-600">
              SQL, MongoDb, MySQL, SQL Server, RDBMS
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={tools}
                alt="Library/Framework"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Library/Framework</h3>
            <p className="text-gray-600">
              .Net Framework, React, Springboot
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={ai}
                alt="Data and Machine Learning"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Data and Machine Learning</h3>
            <p className="text-gray-600">
              TensorFlow, Scikit-learn, Keras, Pytorch, Hugging Face, NLP, Data
              Visualization
            </p>
          </div>
           <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={analystics}
                alt="Monitoring Tools"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Monitoring Tools</h3>
            <p className="text-gray-600">
              Splunk, Dynatrace, Azure Application Insights.
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-center">
              <img
                src={plus}
                alt="Others"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Others</h3>
            <p className="text-gray-600 mb-8">
              Jira, Confluence, Git, Microservices, GitHub, Docker, Cloud, CI/CD,
              Azure, Kubernetes, DAPR, Event Driven Architecture, CQRS.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default Skills;
  