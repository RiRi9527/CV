import React from "react";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInternetExplorer, FaLeftLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const mySkills = [
  "Mandarin and English",
  "HTML/CSS",
  "JavaScript",
  "Typescript",
  "React",
  "SQL",
  "Expressjs",
  "Node.js",
  "API Design Knowledge",
  "Microsoft Office Skills",
  "Self Starter",
  "Customer Service Excellence",
];

const App = () => {
  return (
    <div className="w-full flex justify-center bg-sky-600 font-mono">
      <div className="custom-dimensions bg-white flex">
        <div className="sidebar bg-gray-300 rounded-xl py-4 px-4">
          <h1 className="text-4xl">Hao Zhou</h1>
          <div className="mt-12 mb-7 border-b-2 py-1 border-solid border-white">
            <h2 className="text-xl">CONTACT</h2>
          </div>
          <div className="text-sm">
            <div className="flex mb-5">
              <FaPhoneAlt className="mr-3" />
              <p className="inline-block leading-3">(810)-818-7391</p>
            </div>
            <div className="flex mb-5">
              <MdEmail className="mr-3" />
              <p className="inline-block leading-3">hzhou129527@gmail.com</p>
            </div>
            <div className="flex mb-5">
              <FaInternetExplorer className="mr-3" />
              <p className="inline-block leading-3 border-b border-black">
                https://hzweb.netlify.app/
              </p>
            </div>
            <div className="flex mb-5">
              <IoLocationSharp className="mr-3" />
              <p className="inline-block leading-3">Mt.Morris, MI 48458</p>
            </div>
          </div>
          <div className="mt-12 mb-7 border-b-2 py-1 border-solid border-white">
            <h2 className="text-xl">SKILLS</h2>
          </div>
          <ul className="list-disc px-5 text-sm">
            {mySkills.map((skill, index) => (
              <li key={index} className="my-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 py-5 px-4">
          <div>
            <div className="border-b-2 py-1 mb-4 border-solid border-grvy">
              <h2 className="text-xl">LEGAL WORK STATUS</h2>
            </div>
            <h2 className=" mb-7 text-sm">
              U.S. Permanent Resident (Green Card Holder)
            </h2>
          </div>
          <div className="border-b-2 py-1 mb-4 border-solid border-grvy">
            <h2 className="text-xl">EXPERIENCE</h2>
          </div>
          <div>
            <div>
              <h2 className="text-sm text-gray-400 my-1">
                September 2023 - Present
              </h2>
              <h2 className="text-sm font-bold my-1">
                Bilingual Customer Service Representative
              </h2>
              <h2 className="text-sm text-gray-400 my-1">
                Paul Lee Agency, Livonia, MICHIGAN
              </h2>
            </div>
            <ul className="list-disc px-5 text-sm text-gray-400 my-1 mb-5">
              <li>
                Answered incoming calls promptly, professionally greeting each
                caller.
              </li>
              <li>
                Utilized strong bilingual communication skills to successfully
                assist customers.
              </li>
              <li>
                Managed customer insurance accounts in both Chinese and English
              </li>
            </ul>
          </div>
          <div className=" border-b-2 py-1 mb-4 border-solid border-grvy">
            <h2 className="text-xl">EDUCATION</h2>
          </div>
          <div className="mb-4">
            <h2 className="text-sm text-gray-400 my-1">May 2020</h2>
            <h2 className="text-sm font-bold my-1">
              Bachelor of Arts in Criminal justice & Business{" "}
              <span className="text-gray-400 ml-3">GPA 3.64</span>
            </h2>
            <h2 className="text-sm text-gray-400 my-1">
              Saginaw Valley State University
            </h2>
          </div>
          <div className="mb-5">
            <h2 className="text-sm text-gray-400 my-1">May 2022</h2>
            <h2 className="text-sm font-bold my-1">
              Master of Science in Information Systems
            </h2>
            <h2 className="text-sm text-gray-400 my-1">
              Central Michigan University
            </h2>
          </div>
          <div>
            <div className=" border-b-2 py-1 mb-4 border-solid border-grvy">
              <h2 className="text-xl">PROJECTS</h2>
            </div>
            <div className="mb-4">
              <h2 className="text-sm text-gray-400 my-1">
                EzCheck - A react simple website for recording employee
                clock-ins and clock-outs, generating time reports.
              </h2>
              <p className="inline-block text-sm text-gray-300 font-bold my-1 ">
                https://github.com/RiRi9527/RiRi9527.github.io
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-sm text-gray-400 my-1">
                Nike Websitre - Tailwind CSS base project
              </h2>
              <p className="inline-block text-sm text-gray-300 font-bold my-1 ">
                https://github.com/RiRi9527/Tailwind-CSS-Nike-Websitre
              </p>
            </div>
            <h2 className="text-sm font-bold my-1 text-gray-500">
              More Portfolio please vist my website
            </h2>
          </div>
          <div>
            <div className="border-b-2 py-1 mb-4 border-solid border-grvy">
              <h2 className="text-xl mt-10">CAREER OBJECTIVE</h2>
            </div>
            <p className=" mb-7 text-sm">
              Highly motivated individual with experience in providing
              exceptional customer service. Adept at resolving customer
              complaints in a timely and professional manner. Proven ability to
              build strong customer relationships and provide effective customer
              service solutions. Ambitious individual with strong organizational
              and multitasking skills, as well as an aptitude for technology.
              Ready to apply knowledge and skills to any challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
