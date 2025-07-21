import React from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { FaGlobe, FaRegFileCode, FaPaintBrush, FaPython, FaHtml5, FaNodeJs, FaJava, FaCuttlefish, FaReact, FaPhp, FaJs, FaCode, FaHeart, FaTerminal } from "react-icons/fa";
import { SiCplusplus, SiCsharp } from "react-icons/si";

const buildOptions = [
  {
    label: "AI",
    desc: "Build with the latest in AI",
    color: "bg-gradient-to-br from-orange-800 via-red-700 to-yellow-600",
    icon: <AiOutlineRobot className="text-4xl" />,
  },
  {
    label: "Websites",
    desc: "Build and host websites and apps",
    color: "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700",
    icon: <FaGlobe className="text-4xl" />,
  },
  {
    label: "Verified Partners",
    desc: "SDKs, tutorials and quick start guides from the worlds best tech companies",
    color: "bg-gradient-to-br from-green-700 via-green-800 to-green-900",
    icon: <FaRegFileCode className="text-4xl" />,
  },
  {
    label: "Graphics",
    desc: "Paint with code",
    color: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900",
    icon: <FaPaintBrush className="text-4xl" />,
  },
];

const languages = [
  {
    name: "Python",
    icon: <FaPython className="text-3xl text-blue-400" />,
    likes: "5.2K",
    users: "42M",
    boilerplate: "print('Hello, Scriptify!')\n",
  },
  {
    name: "HTML, CSS, JS",
    icon: <FaHtml5 className="text-3xl text-orange-400" />,
    likes: "2.8K",
    users: "12.8M",
    boilerplate: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello Scriptify</title>\n</head>\n<body>\n  <h1>Hello, Scriptify!</h1>\n</body>\n</html>\n`,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-3xl text-green-400" />,
    likes: "829",
    users: "7.7M",
    boilerplate: "console.log('Hello, Scriptify!');\n",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-3xl text-blue-300" />,
    likes: "959",
    users: "6.3M",
    boilerplate: "#include <iostream>\nint main() { std::cout << \"Hello, Scriptify!\\n\"; return 0; }\n",
  },
  {
    name: "C",
    icon: <FaCuttlefish className="text-3xl text-gray-300" />,
    likes: "604",
    users: "5.7M",
    boilerplate: "#include <stdio.h>\nint main() { printf(\"Hello, Scriptify!\\n\"); return 0; }\n",
  },
  {
    name: "Java",
    icon: <FaJava className="text-3xl text-orange-300" />,
    likes: "934",
    users: "5.5M",
    boilerplate: "public class Main { public static void main(String[] args) { System.out.println(\"Hello, Scriptify!\"); } }\n",
  },
  {
    name: "C#",
    icon: <SiCsharp className="text-3xl text-purple-400" />,
    likes: "-",
    users: "-",
    boilerplate: "using System;\nclass Program { static void Main() { Console.WriteLine(\"Hello, Scriptify!\"); } }\n",
  },
  {
    name: "Bash",
    icon: <FaTerminal className="text-3xl text-green-200" />,
    likes: "-",
    users: "-",
    boilerplate: "echo 'Hello, Scriptify!'\n",
  },
  {
    name: "PHP Web",
    icon: <FaPhp className="text-3xl text-indigo-400" />,
    likes: "-",
    users: "-",
    boilerplate: "<?php\necho 'Hello, Scriptify!';\n",
  },
  {
    name: "Blank Repl",
    icon: <FaCode className="text-3xl text-gray-400" />,
    likes: "-",
    users: "-",
    boilerplate: "",
  },
  {
    name: "React JavaScript",
    icon: <FaReact className="text-3xl text-cyan-400" />,
    likes: "-",
    users: "-",
    boilerplate: `import React from 'react';\nexport default function App() {\n  return <h1>Hello, Scriptify!</h1>;\n}\n`,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-3xl text-yellow-300" />,
    likes: "-",
    users: "-",
    boilerplate: "console.log('Hello, Scriptify!');\n",
  },
];

type Props = {
  onCreateApp?: (app: { template: any; title: string; privacy: string; boilerplate: string }) => void;
};

export default function TemplatesPanel({ onCreateApp }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 pb-12">
      <h2 className="text-4xl font-bold mb-2">Templates</h2>
      <div className="text-lg text-gray-400 mb-2">Use Templates as the starting point for your next project.</div>
      <a href="#" className="text-blue-400 text-sm mb-6 inline-block">How to publish a Template</a>
      <div className="mt-8 mb-4 text-xl font-semibold">What do you want to build?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {buildOptions.map((opt) => (
          <div key={opt.label} className={`rounded-xl p-6 text-white flex flex-col justify-end h-44 shadow-lg ${opt.color} relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl`}>
            <div className="absolute top-4 right-4 opacity-40">{opt.icon}</div>
            <div className="font-bold text-lg mb-1 z-10">{opt.label}</div>
            <div className="text-sm opacity-90 mb-2 z-10">{opt.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-4 text-xl font-semibold">Languages</div>
      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-w-[700px]">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-[#232323] rounded-xl p-4 flex flex-col items-center hover:bg-[#232323]/80 transition cursor-pointer shadow-md hover:shadow-xl"
              onClick={() => {
                if (onCreateApp) {
                  onCreateApp({ template: lang, title: lang.name, privacy: "public", boilerplate: lang.boilerplate });
                }
              }}
            >
              <div className="mb-2">{lang.icon}</div>
              <div className="font-semibold mb-1 text-center text-white">{lang.name}</div>
              <div className="flex items-center text-xs text-gray-400 gap-2">
                <FaHeart className="text-xs text-pink-400" />
                <span>{lang.likes}</span>
                <span>+ {lang.users}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 