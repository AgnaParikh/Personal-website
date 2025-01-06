import React from "react";

const Contact = () => {
  return (
    <div className="bg-white p-8">
      <hr className="border-gray-300 mb-8" />
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact</h3>
        <p className="text-lg text-gray-700 mb-6">
          Let us connect!
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="agnaparikh2103@gmail.com"
              className="text-blue-500 hover:underline"
            >
              agnaparikh2103@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AgnaParikh"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/agnaparikh/"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@agnaparikh2103"
              className="text-blue-500 hover:underline"
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
