import React from "react";
import elRetiro from "../Assets/ElRetiro.jpg";
import Contact from "./Contact";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="bg-white">
      <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800">About Me</h3>
      </div>
    <div className="flex p-8">
      <div className="container mx-auto flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="md:w-2/3">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Hi, I’m <strong>Agna Parikh</strong>, a passionate software developer, problem solver, and eager learner based in Delaware, USA. With a strong foundation in machine learning and full-stack development, I specialize in building scalable and efficient software solutions that serve a purpose. My passion lies in exploring how AI and machine learning can revolutionize industries.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I currently work as a Software Engineer II at GEICO, where I contribute to building scalable and reliable software solutions across a range of domains, including microservices, frontend development, and cloud-based architectures. My work involves solving complex technical challenges, enhancing system performance, and delivering innovative solutions that align with business and user needs.    
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">

I currently work as a Software Engineer II at GEICO, where I contribute to building scalable and reliable software solutions across a range of domains, including microservices, frontend development, and cloud-based architectures. My work involves solving complex technical challenges, enhancing system performance, and delivering innovative solutions that align with business and user needs.

I am also pursuing a Master of Science in Computer Science at Georgia Tech, specializing in Machine Learning. My studies focus on mastering data analytics, artificial intelligence, and machine learning algorithms, empowering me to drive innovation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond my work, I am a creative and curious individual. In my free time, I love watching Netflix, cooking, and traveling. The diversity of traditions, languages, and perspectives fascinates me, and I find inspiration in learning about the world’s rich heritage.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={elRetiro}
            alt="Agna Parikh"
            className="rounded-lg shadow-lg w-full max-w-[400px] h-auto aspect-square object-cover"
          />
        </div>
      </div>
    </div>
    <Contact/>
    <Skills />
    </div>
  );
};

export default About;
