import React, { useState } from "react";
import { FaPython, FaHtml5, FaNodeJs, FaJava, FaCuttlefish, FaReact, FaPhp, FaJs, FaCode, FaHeart, FaTerminal } from "react-icons/fa";
import { SiCplusplus, SiCsharp } from "react-icons/si";

const templates = [
  {
    name: "Python",
    icon: <FaPython className="text-2xl text-blue-400" />,
    description: "Python is a high-level, interpreted, general-purpose programming language.",
    likes: "5.2K",
    users: "41.8M",
    provider: "scriptify",
    favorite: true,
  },
  {
    name: "HTML, CSS, JS (Static)",
    icon: <FaHtml5 className="text-2xl text-orange-400" />,
    description: "Static site with HTML, CSS, and JavaScript.",
    likes: "2.8K",
    users: "12.8M",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-2xl text-green-400" />,
    description: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    likes: "829",
    users: "7.7M",
    provider: "scriptify",
    favorite: true,
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-2xl text-blue-300" />,
    description: "C++ is a general-purpose programming language created as an extension of the C programming language.",
    likes: "959",
    users: "6.3M",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "C",
    icon: <FaCuttlefish className="text-2xl text-gray-300" />,
    description: "C is a general-purpose, procedural computer programming language.",
    likes: "604",
    users: "5.7M",
    provider: "scriptify",
    favorite: true,
  },
  {
    name: "Java",
    icon: <FaJava className="text-2xl text-orange-300" />,
    description: "Java is a high-level, class-based, object-oriented programming language.",
    likes: "934",
    users: "5.5M",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "C#",
    icon: <SiCsharp className="text-2xl text-purple-400" />,
    description: "C# is a modern, object-oriented programming language developed by Microsoft.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "Bash",
    icon: <FaTerminal className="text-2xl text-green-200" />,
    description: "Bash is a Unix shell and command language.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "PHP Web",
    icon: <FaPhp className="text-2xl text-indigo-400" />,
    description: "PHP is a popular general-purpose scripting language especially suited to web development.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "Blank Repl",
    icon: <FaCode className="text-2xl text-gray-400" />,
    description: "Start from scratch with a blank project.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "React JavaScript",
    icon: <FaReact className="text-2xl text-cyan-400" />,
    description: "React is a JavaScript library for building user interfaces.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-2xl text-yellow-300" />,
    description: "JavaScript is a programming language that conforms to the ECMAScript specification.",
    likes: "-",
    users: "-",
    provider: "scriptify",
    favorite: false,
  },
];

type Props = {
  onCreateApp?: (app: { template: any; title: string; privacy: string }) => void;
};

export default function CreateAppPanel({ onCreateApp }: Props) {
  const [activeTab, setActiveTab] = useState("agent");
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [appTitle, setAppTitle] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const favoriteTemplates = templates.filter(t => t.favorite);
  const otherTemplates = templates.filter(t => !t.favorite);

  return (
    <div className="bg-[#171717] rounded-lg shadow-lg w-full max-w-2xl p-8 border border-[#232323] mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6">Create a new App</h2>
      {/* Tabs */}
      <div className="flex border-b border-[#232323] mb-6">
        <button
          className={`px-4 py-2 text-sm font-semibold border-b-2 ${activeTab === "agent" ? "border-blue-600 text-white" : "border-transparent text-gray-400"}`}
          onClick={() => setActiveTab("agent")}
        >
          Create with Scriptify Agent
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ml-4 border-b-2 ${activeTab === "template" ? "border-blue-600 text-white" : "border-transparent text-gray-400"}`}
          onClick={() => setActiveTab("template")}
        >
          Choose a Template
        </button>
      </div>
      {/* Panels */}
      {activeTab === "agent" ? (
        <>
          {/* Input area */}
          <div className="mb-6">
            <textarea
              className="w-full h-20 bg-[#232323] border border-[#232323] rounded p-3 text-sm text-white resize-none focus:outline-none"
              placeholder="Describe an app or site you want to create..."
            />
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-xs text-gray-400">
                <span className="mr-2">App type: <span className="text-white">Auto</span></span>
                <span className="text-lg">▼</span>
              </div>
              <button className="flex items-center px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 text-sm font-semibold">
                <span className="mr-2">Start chat</span>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          {/* Suggested apps */}
          <div className="flex flex-wrap gap-2 mb-2">
            {/* ...suggested apps logic... */}
          </div>
        </>
      ) : (
        <div className="flex gap-8">
          {/* Left: Template selection */}
          <div className="w-1/2">
            <div className="mb-4">
              <input
                type="text"
                className="w-full bg-[#232323] border border-[#232323] rounded p-3 text-sm text-white focus:outline-none"
                placeholder="Search Templates"
                // TODO: Add search logic
              />
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-2">Favorites</div>
              <div className="flex flex-col gap-2">
                {favoriteTemplates.map((tpl) => (
                  <button
                    key={tpl.name}
                    className={`flex items-center bg-[#232323] px-4 py-2 rounded text-white text-sm ${selectedTemplate.name === tpl.name ? "border border-blue-600" : ""}`}
                    onClick={() => setSelectedTemplate(tpl)}
                  >
                    <span className="mr-2">{tpl.icon}</span>
                    {tpl.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-2">Templates</div>
              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                {otherTemplates.map((tpl) => (
                  <button
                    key={tpl.name}
                    className={`flex items-center bg-[#232323] px-4 py-2 rounded text-white text-sm ${selectedTemplate.name === tpl.name ? "border border-blue-600" : ""}`}
                    onClick={() => setSelectedTemplate(tpl)}
                  >
                    <span className="mr-2">{tpl.icon}</span>
                    {tpl.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Template details and app creation */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="bg-[#232323] rounded-lg p-6 flex flex-col gap-2 border border-[#232323]">
              <div className="flex items-center gap-3 mb-2">
                {selectedTemplate.icon}
                <span className="text-xl font-bold text-white">{selectedTemplate.name}</span>
                <span className="ml-2 bg-gray-700 text-xs px-2 py-1 rounded">Languages</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">{selectedTemplate.description}</div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><FaHeart className="text-pink-400" /> {selectedTemplate.likes}</span>
                <span>+ {selectedTemplate.users}</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-orange-500 rounded-full inline-block"></span> scriptify</span>
              </div>
            </div>
            <input
              type="text"
              className="w-full bg-[#232323] border border-[#232323] rounded p-3 text-sm text-white focus:outline-none"
              placeholder="Name your App"
              value={appTitle}
              onChange={e => setAppTitle(e.target.value)}
            />
            <div>
              <div className="text-sm text-gray-400 mb-2">Privacy</div>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="privacy" className="form-radio text-blue-600" checked={privacy === "public"} onChange={() => setPrivacy("public")}/>
                  <span className="ml-2 text-white">Public</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="privacy" className="form-radio text-blue-600" checked={privacy === "private"} onChange={() => setPrivacy("private")}/>
                  <span className="ml-2 text-white">Private <span className="bg-orange-700 text-xs px-2 py-1 rounded ml-1">Core</span></span>
                </label>
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">You have 5 free apps left</div>
              <div className="w-full h-2 bg-[#232323] rounded mb-2">
                <div className="h-2 bg-blue-600 rounded" style={{ width: '50%' }} />
              </div>
              <button
                className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-600 text-sm font-semibold"
                onClick={() => {
                  if (onCreateApp) {
                    onCreateApp({ template: selectedTemplate, title: appTitle, privacy });
                  }
                }}
              >
                + Create App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 