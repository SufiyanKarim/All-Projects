import React, { useState } from "react";
import currencyImage from '../assets/currencyImage.png'
import adminImage from '../assets/adminImage.png'

const initialProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image:adminImage,
    link: "https://admin-dashboardsyncfusion.vercel.app/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image:currencyImage,
    link: "https://currency-converterjs.vercel.app/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image:
      "https://images.unsplash.com/photo-1514195037031-83d60ed3b448?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
    image:
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of Project 5",
    image:
      "https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description of Project 6",
    image:
      "https://plus.unsplash.com/premium_photo-1661299203633-edbcbf8e50dd?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

const additionalProjects = [
  // {
  //   id: 7,
  //   title: "Project 7",
  //   description: "Description of Project 7",
  //   image: "https://via.placeholder.com/150",
  //   link: "#",
  // },
  // {
  //   id: 8,
  //   title: "Project 8",
  //   description: "Description of Project 8",
  //   image: "https://via.placeholder.com/150",
  //   link: "#",
  // },
  // {
  //   id: 9,
  //   title: "Project 9",
  //   description: "Description of Project 9",
  //   image: "https://via.placeholder.com/150",
  //   link: "#",
  // },
];

const RealTimeProjects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProjects((prevProjects) => [...prevProjects, ...additionalProjects]);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setProjects(initialProjects);
    setShowMore(false);
  };

  return (
    <div className="p-4 w-full bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl text-center font-semibold py-7">Real Time Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover p-2 rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <span className="text-blue-400 hover:text-blue-600 transition-colors">
                View Project
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {!showMore ? (
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            onClick={handleShowMore}
          >
            Show More Projects
          </button>
        ) : (
          <button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
            onClick={handleShowLess}
          >
            Show Less Projects
          </button>
        )}
      </div>
    </div>
  );
};

export default RealTimeProjects;
