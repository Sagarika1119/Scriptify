import React, { useState } from "react";

interface AppEditorPanelProps {
  app: {
    template: any;
    title: string;
    privacy: string;
  };
  boilerplate?: string;
  onBack: () => void;
}

export default function AppEditorPanel({ app, boilerplate, onBack }: AppEditorPanelProps) {
  const [code, setCode] = useState(boilerplate || "");
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <div className="w-full h-full flex flex-col bg-[#101014] rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-[#232323] bg-[#171717] shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-[#232323] rounded-lg p-2 flex items-center justify-center shadow">
            {app.template.icon}
          </div>
          <span className="font-bold text-lg text-white tracking-wide">{app.title || "Untitled App"}</span>
          <span className="ml-2 text-xs px-2 py-1 rounded bg-gray-700 text-gray-200">{app.template.name}</span>
          <span className="ml-2 text-xs px-2 py-1 rounded bg-blue-900 text-blue-300">{app.privacy === "private" ? "Private" : "Public"}</span>
        </div>
        <button className="text-xs px-3 py-1 rounded bg-[#232323] text-gray-300 hover:bg-blue-700 hover:text-white transition" onClick={onBack}>&larr; Back</button>
      </div>
      <div className="flex-1 flex flex-row">
        {/* Left: Chat/Assistant Panel */}
        <div className="w-1/2 h-full bg-[#18181b] border-r border-[#232323] flex flex-col rounded-bl-2xl">
          {/* Assistant Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#232323]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-wide">Assistant</span>
              <span className="ml-1 text-xs bg-yellow-700 text-yellow-200 px-2 py-0.5 rounded">BASIC</span>
            </div>
            <button className="text-gray-400 text-lg hover:text-blue-400 transition">&#9881;</button>
          </div>
          {/* New chat tab */}
          <div className="flex items-center px-4 py-2 border-b border-[#232323] bg-[#19191c]">
            <button className="text-xs text-gray-300 font-semibold hover:text-blue-400 transition" onClick={() => setIsChatActive(true)}>
              + New chat
            </button>
          </div>
          {/* Chat area */}
          {isChatActive ? (
            <div className="flex-1 flex flex-col p-4">
              <div className="flex-1 rounded bg-[#232323] p-4 mb-2 shadow-inner">
                {/* Chat messages will go here */}
                <div className="text-gray-400 text-center text-sm">Chat started. Ask me anything!</div>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <textarea
                  className="w-full bg-[#19191c] border border-[#232323] rounded-lg p-3 text-sm text-white resize-none focus:outline-none focus:border-blue-600 transition"
                  placeholder="Ask Assistant..."
                  rows={3}
                />
                <button className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 text-sm font-semibold shadow transition">
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <div className="text-gray-400 text-lg mb-2">New chat with Assistant</div>
              <div className="text-gray-500 text-sm mb-4 text-center">Assistant answers questions, refines code, and makes precise edits.</div>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Inspect for errors</button>
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Improve the visual design</button>
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Brainstorm new features</button>
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Add dark mode toggle</button>
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Optimize for mobile</button>
                <button className="bg-[#232323] px-3 py-1 rounded-lg text-xs text-gray-300 hover:bg-blue-700 hover:text-white transition">Explain this code</button>
              </div>
            </div>
          )}
        </div>
        {/* Right: Editor Panel (now uses code state) */}
        <div className="w-1/2 h-full bg-[#0a0a0a] flex flex-col rounded-br-2xl">
          <div className="flex items-center p-2 border-b border-[#232323] bg-[#19191c] rounded-tr-2xl">
            <span className="text-blue-300 font-mono text-sm">main.{app.template.name.toLowerCase().includes("python") ? "py" : "txt"}</span>
          </div>
          <textarea
            className="flex-1 w-full bg-[#101014] text-white p-4 font-mono text-sm outline-none resize-none rounded-b-2xl focus:outline-blue-600 border-none shadow-inner"
            placeholder="// Start coding here..."
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
} 