import React from "react";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const mySkills = [
  "HTML/CSS",
  "JavaScript",
  "Typescript",
  "React",
  "Redux",
  "Express.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "REST API",
  "GraphQL",
  "Python",
  "Token",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "Jest",
  "Webpack",
  "Java",
  "Spring Boot",
  "WebSocket",
  "Microsoft Office Skills",
  "Mandarin and English",
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
              <FaGithub className="mr-3" />
              <p className="inline-block leading-3 border-b border-black">
                https://github.com/RiRi9527
              </p>
            </div>
            <div className="flex mb-5">
              <FaInternetExplorer className="mr-3" />
              <p className="inline-block leading-3 border-b border-black">
                https://hzweb.netlify.app
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
            <div className="border-b-2 py-1 mb-4 border-solid border-gray">
              <h2 className="text-xl">LEGAL WORK STATUS</h2>
            </div>
            <h2 className=" mb-3 text-sm">
              U.S. Permanent Resident (Green Card Holder)
            </h2>
          </div>
          <div>
            <div className=" border-b-2 py-1 mb-4 border-solid border-gray">
              <h2 className="text-xl">PROJECTS</h2>
            </div>
            <div className="mb-4">
              <h2 className="text-sm text-gray-600 my-1">
                <span className="font-bold ">EzCheck</span> - a project I
                developed using the MERN (MongoDB, Express.js, React, and
                Node.js) stack. It's a powerful application designed to help
                users manage their tasks and schedules effortlessly.
              </h2>
              <p className="inline-block text-sm text-gray-300 font-bold my-1 ">
                <span className="text-gray-600">Front-end Introduction:</span>{" "}
                https://github.com/RiRi9527/mern-ezcheck-app-frontend
              </p>

              <ul className="list-disc px-5 text-sm text-gray-600 my-1 mb-5">
                <li>
                  Utilizes <span className="font-bold"> Tailwind CSS </span>for
                  styling to ensure a
                  <span className="font-bold"> responsive layout</span>,
                  ensuring the page displays well on various devices.
                </li>
                <li>
                  Using{" "}
                  <span className="font-bold">
                    {" "}
                    React Query/TanStack Query{" "}
                  </span>{" "}
                  to fetch data and handle caching.
                </li>
                <li>
                  Utilizes 'react-big-calendar' library to create functionality
                  similar to<span className="font-bold"> Google Calendar</span>,
                  enabling users to create, manage, and delete tasks.
                </li>
              </ul>

              <p></p>
              <p className="inline-block text-sm text-gray-300 font-bold my-1 ">
                <span className="text-gray-600">Back-End Introduction:</span>{" "}
                https://github.com/RiRi9527/mern-ezcheck-app-frontend
              </p>
              <ul className="list-disc px-5 text-sm text-gray-600 my-1 mb-5">
                <li>
                  User authentication and authorization are implemented using
                  JSON Web Tokens <span className="font-bold">(JWT)</span>.
                </li>
                <li>
                  API Design: services through a{" "}
                  <span className="font-bold">RESTful API</span>. API endpoints
                  include user registration, login, task creation, task
                  retrieval, etc.
                </li>
                <li>
                  <span className="font-bold">Real-time Communication</span>:
                  Real-time messaging between users is implemented using
                  WebSocket. This allows users to communicate instantly within
                  the application, such as sending messages for task updates or
                  discussing task details.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 py-1 mb-4 border-solid border-gray">
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
                Utilized strong bilingual communication skills to successfully
                assist customers.
              </li>
            </ul>
          </div>
          <div className=" border-b-2 py-1 mb-4 border-solid border-gray">
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
              <span className="text-gray-400 ml-3">(1yr completed)</span>
            </h2>
            <h2 className="text-sm text-gray-400 my-1">
              Central Michigan University
            </h2>
          </div>

          {/* <div>
            <div className="border-b-2 py-1 mb-4 border-solid border-gray">
              <h2 className="text-xl mt-6">CAREER OBJECTIVE</h2>
            </div>
            <p className="text-sm">
              Highly motivated individual with experience in providing
              exceptional customer service. Adept at resolving customer
              complaints in a timely and professional manner. Proven ability to
              build strong customer relationships and provide effective customer
              service solutions. Ambitious individual with strong organizational
              and multitasking skills, as well as an aptitude for technology.
              Ready to apply knowledge and skills to any challenge.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
