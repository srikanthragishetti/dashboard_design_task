import React, { useState } from "react";
import {
  FiHome,
  FiMessageSquare,
  FiCheckSquare,
  FiUsers,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function Sidebar() {
  // track active nav + project
  const [activeNav, setActiveNav] = useState("Home");
  const [activeProject, setActiveProject] = useState("Mobile App");

  const navItems = [
    { name: "Home", icon: <FiHome /> },
    { name: "Messages", icon: <FiMessageSquare /> },
    { name: "Tasks", icon: <FiCheckSquare /> },
    { name: "Members", icon: <FiUsers /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  const projects = [
    "Mobile App",
    "Website Redesign",
    "Design System",
    "Wireframes",
  ];

  return (
    <aside className="w-72 border-r bg-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4 text-xl font-bold border-b">Project M.</div>

      {/* Navigation */}
      <nav className="px-6 py-6 space-y-5 text-gray-700">
        {navItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setActiveNav(item.name)}
            className={`flex items-center gap-3 cursor-pointer ${
              activeNav === item.name
                ? "text-primary font-semibold"
                : "hover:text-primary"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* My Projects */}
      <div className="px-6 mt-2">
        <div className="text-xs uppercase text-gray-400 font-semibold mb-3">
          My Projects
        </div>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li
              key={project}
              onClick={() => setActiveProject(project)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                activeProject === project
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {project}
              {activeProject === project && <FiMoreHorizontal />}
            </li>
          ))}
        </ul>
      </div>

      {/* Thoughts Time */}
      <div className="mt-auto p-6">
        <div className="rounded-lg bg-gradient-to-b from-yellow-50 to-white p-4 text-center shadow-sm">
          <div className="text-yellow-500 text-2xl mb-2">💡</div>
          <div className="font-semibold mb-2">Thoughts Time</div>
          <p className="text-sm text-gray-600 mb-4">
            We don’t have any notice for you, till then you can share your thoughts
            with your peers.
          </p>
          <button className=" px-3 py-2 bg-white border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">
            <input type="text"
            placeholder="Write a message" />
          </button>
        </div>
      </div>
    </aside>
  );
}
