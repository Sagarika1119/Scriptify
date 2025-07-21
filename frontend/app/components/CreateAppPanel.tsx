import React from "react";

const suggestedApps = [
  { label: "Statistical significance calculator", icon: "ƒ" },
  { label: "Local landmarks map", icon: "📍" },
  { label: "Smart meal planner", icon: "≡" },
];

export default function CreateAppPanel() {
  return (
    <div className="bg-[#171717] rounded-lg shadow-lg w-full max-w-2xl p-8 border border-[#232323] mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6">Create a new App</h2>
      {/* Tabs */}
      <div className="flex border-b border-[#232323] mb-6">
        <button className="px-4 py-2 text-sm font-semibold border-b-2 border-blue-600 text-white">Create with Replit Agent</button>
        <button className="px-4 py-2 text-sm font-semibold text-gray-400 ml-4">Choose a Template</button>
      </div>
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
        {suggestedApps.map((app) => (
          <button
            key={app.label}
            className="flex items-center bg-[#232323] px-4 py-2 rounded-full text-sm text-white hover:bg-[#232323]/80"
          >
            <span className="mr-2 text-lg">{app.icon}</span>
            {app.label}
          </button>
        ))}
      </div>
    </div>
  );
} 