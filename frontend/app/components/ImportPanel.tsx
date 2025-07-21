import React from "react";

const importOptions = [
  {
    label: "Github",
    description: "Import a repository or existing app. Agent support may be limited.",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
    ),
  },
  {
    label: "Figma Design",
    description: "Convert your designs into live Apps using Replit Agent",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="7.5" cy="7.5" r="4.5" fill="#F24E1E"/><circle cx="16.5" cy="7.5" r="4.5" fill="#A259FF"/><circle cx="7.5" cy="16.5" r="4.5" fill="#1ABCFE"/><circle cx="16.5" cy="16.5" r="4.5" fill="#0ACF83"/><circle cx="12" cy="12" r="4.5" fill="#FF7262"/></svg>
    ),
  },
  {
    label: "Lovable",
    description: "Migrate your site to make it production-ready.",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    ),
  },
  {
    label: "Bolt",
    description: "Migrate your prototype to make it production-ready",
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
    ),
  },
];

export default function ImportPanel() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-2">Import to Replit</h2>
      <div className="text-lg text-gray-400 mb-8">Migrate data, code, and designs from other apps into Replit</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {importOptions.map((opt) => (
          <div key={opt.label} className="flex items-center bg-[#232323] rounded-lg p-4 hover:bg-[#232323]/80 transition cursor-pointer">
            <div className="mr-4 flex-shrink-0">{opt.icon}</div>
            <div className="flex-1">
              <div className="font-semibold text-lg mb-1">{opt.label}</div>
              <div className="text-gray-400 text-sm">{opt.description}</div>
            </div>
            <div className="ml-4 text-gray-400">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 