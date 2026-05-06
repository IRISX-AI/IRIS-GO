// src/components/Sidebar.tsx
import {
  MessageSquare,
  Grid,
  Layers,
  Activity,
  FileText,
  Search,
  Settings,
  CircleDashed,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex h-full border-r border-slate-800/50 bg-slate-950/50 backdrop-blur-sm z-20">
      {/* Pane 1: Thin Navigation Strip */}
      <div className="w-16 flex flex-col items-center py-4 border-r border-slate-800/50 bg-slate-900/80">
        {/* Logo/Main Icon */}
        <div className="w-10 h-10 rounded-xl border border-cyan-400/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          <div className="w-4 h-4 bg-cyan-400 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </div>

        {/* Global Nav Icons */}
        <div className="flex flex-col gap-6 flex-1 text-slate-500">
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            <MessageSquare size={20} />
          </button>
          <button className="hover:text-slate-300 transition-colors">
            <Grid size={20} />
          </button>
          <button className="hover:text-slate-300 transition-colors">
            <Layers size={20} />
          </button>
          <button className="hover:text-slate-300 transition-colors">
            <Activity size={20} />
          </button>
          <button className="hover:text-slate-300 transition-colors">
            <FileText size={20} />
          </button>
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col gap-6 text-slate-500 pb-4">
          <button className="hover:text-slate-300 transition-colors">
            <CircleDashed size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-cyan-400 border border-cyan-400/20">
            H
          </div>
        </div>
      </div>

      {/* Pane 2: Context Sidebar */}
      <div className="w-64 flex flex-col h-full bg-slate-900/40 p-4 overflow-y-auto">
        {/* Header & Search */}
        <div className="mb-6">
          <h2 className="text-xs tracking-widest text-slate-500 mb-4 font-semibold uppercase">
            IRIS GO
          </h2>
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600 text-slate-300"
            />
          </div>
        </div>

        {/* Chats Section */}
        <div className="mb-6">
          <h3 className="text-[10px] tracking-wider text-slate-500 mb-3 uppercase">
            Chats
          </h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-between text-sm py-1.5 px-2 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 cursor-pointer">
              <span className="flex items-center gap-2">
                <MessageSquare size={14} /> New Chat
              </span>
              <span className="text-[10px] bg-cyan-500/20 px-1.5 rounded-full">
                live
              </span>
            </li>
            {["Clone Stripe.com", "Fix GitHub bugs", "Research AI tools"].map(
              (chat, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-slate-600" />{" "}
                    {chat}
                  </span>
                  {i === 0 && (
                    <span className="text-[10px] bg-slate-800 text-slate-500 px-1.5 rounded-full border border-slate-700">
                      done
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Pages Section */}
        <div className="mb-6">
          <h3 className="text-[10px] tracking-wider text-slate-500 mb-3 uppercase">
            Pages
          </h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-between text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors">
              <span className="flex items-center gap-2">
                <Grid size={14} className="text-slate-600" /> Workflows
              </span>
              <span className="text-[10px] text-orange-400 border border-orange-400/30 rounded-full px-1.5">
                3
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors">
              <Layers size={14} className="text-slate-600" /> Agents
            </li>
            <li className="flex items-center justify-between text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors">
              <span className="flex items-center gap-2">
                <Activity size={14} className="text-slate-600" /> Activity Log
              </span>
              <span className="text-[10px] text-cyan-400 border border-cyan-400/30 rounded-full px-1.5">
                47
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors">
              <FileText size={14} className="text-slate-600" /> Memory
            </li>
            <li className="flex items-center gap-2 text-sm py-1.5 px-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer transition-colors">
              <Settings size={14} className="text-slate-600" /> Settings
            </li>
          </ul>
        </div>

        {/* Agent Status Monitor */}
        <div className="mt-auto pt-4">
          <div className="p-3 border border-slate-800/80 rounded-xl bg-slate-950/50">
            <h3 className="text-[10px] tracking-wider text-slate-500 mb-3 uppercase">
              Agent Status
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></div>{" "}
                  Master
                </span>
                <span className="text-slate-500">ready</span>
              </li>
              {["Browser", "File", "OS", "Coder"].map((agent) => (
                <li
                  key={agent}
                  className="flex justify-between items-center text-slate-400"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_6px_#06b6d4]"></div>{" "}
                    {agent}
                  </span>
                  <span className="text-slate-500">idle</span>
                </li>
              ))}
              <li className="flex justify-between items-center text-slate-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>{" "}
                  Research
                </span>
                <span className="text-slate-600">off</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
