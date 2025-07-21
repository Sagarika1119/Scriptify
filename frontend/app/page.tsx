"use client"
import React, { useState } from "react";
import CreateAppPanel from "./components/CreateAppPanel";
import ImportPanel from "./components/ImportPanel";
import TemplatesPanel from "./components/TemplatesPanel";
import AppEditorPanel from "./components/AppEditorPanel";

export default function Home() {
  const [selectedPanel, setSelectedPanel] = useState("home");
  const [createdApp, setCreatedApp] = useState<any>(null);

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171717] flex flex-col justify-between p-4">
        {/* Top: Logo and Navigation */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-6 h-6 bg-orange-500 rounded mr-2" />
            <span className="font-bold text-lg">Scriptify</span>
          </div>
          <nav className="space-y-2">
            <button
              className="w-full text-left py-2 px-3 rounded bg-[#232323] hover:bg-[#232323]/80 font-medium mb-2"
              onClick={() => { setCreatedApp(null); setSelectedPanel("create-app"); }}
            >
              + Create App
            </button>
            <button
              className="w-full text-left py-2 px-3 rounded hover:bg-[#232323]/60 font-medium mb-2"
              onClick={() => { setCreatedApp(null); setSelectedPanel("import"); }}
            >
              Import code or design
            </button>
            <div className="mt-6">
              <div className="text-xs text-gray-400 uppercase mb-2">Main</div>
              <ul className="space-y-1">
                <li className={`rounded px-3 py-2 ${selectedPanel === "home" ? "bg-[#232323]" : "hover:bg-[#232323]/60"}`} onClick={() => { setCreatedApp(null); setSelectedPanel("home"); }}>Home</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Apps</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Deployments</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Usage</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Teams</li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="text-xs text-gray-400 uppercase mb-2">Explore Scriptify</div>
              <ul className="space-y-1">
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Bounties</li>
                <li className={`rounded px-3 py-2 ${selectedPanel === "templates" ? "bg-[#232323]" : "hover:bg-[#232323]/60"}`} onClick={() => { setCreatedApp(null); setSelectedPanel("templates"); }}>Templates</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Learn</li>
                <li className="hover:bg-[#232323]/60 rounded px-3 py-2">Documentation</li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Bottom: Plan Section */}
        <div className="mt-8 border-t border-[#232323] pt-4">
          <div className="text-xs text-gray-400 mb-2">Your Starter Plan</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs">Free Apps</span>
            <span className="text-xs">5/10 created</span>
          </div>
          <div className="w-full h-2 bg-[#232323] rounded mb-2">
            <div className="h-2 bg-blue-600 rounded" style={{ width: '50%' }} />
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs">Agent Usage</span>
            <span className="text-xs">0% used</span>
          </div>
          <div className="w-full h-2 bg-[#232323] rounded mb-4">
            <div className="h-2 bg-gray-500 rounded" style={{ width: '0%' }} />
          </div>
          <button className="w-full py-2 bg-blue-900 text-blue-300 rounded hover:bg-blue-800 text-xs font-semibold">Upgrade to Scripify Core</button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {createdApp ? (
          <AppEditorPanel app={createdApp} boilerplate={createdApp.boilerplate} onBack={() => { setCreatedApp(null); setSelectedPanel("home"); }} />
        ) : selectedPanel === "create-app" ? (
          <CreateAppPanel onCreateApp={(app: any) => setCreatedApp(app)} />
        ) : selectedPanel === "import" ? (
          <ImportPanel />
        ) : selectedPanel === "templates" ? (
          <TemplatesPanel onCreateApp={(app: any) => setCreatedApp(app)} />
        ) : (
          <div className="max-w-xl w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">Hi sagarika, what do you want to make?</h1>
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Describe an app or site you want to create..."
                className="flex-1 px-4 py-3 rounded-l bg-[#171717] border border-[#232323] text-sm focus:outline-none"
              />
              <button className="px-6 py-3 bg-blue-700 text-white rounded-r hover:bg-blue-600 text-sm font-semibold">Start chat</button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button className="bg-[#232323] px-4 py-2 rounded text-sm hover:bg-[#232323]/80">Statistical significance calculator</button>
              <button className="bg-[#232323] px-4 py-2 rounded text-sm hover:bg-[#232323]/80">Link in bio</button>
              <button className="bg-[#232323] px-4 py-2 rounded text-sm hover:bg-[#232323]/80">Personal blog</button>
            </div>
            <div className="bg-[#171717] border border-[#232323] rounded p-4 text-xs text-gray-400 flex items-center justify-between">
              <span>Purchase domains on Scriptify</span>
              <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded ml-2">Beta</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
