import {
  Paperclip,
  Mic,
  Send,
  Globe,
  TerminalSquare,
  Search,
  Folder,
  Shield,
  Zap,
} from "lucide-react";

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col h-full bg-black/15 relative">
      <header className="h-14 flex items-center justify-between px-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
          <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>
          New Chat
        </div>
        <div className="flex items-center gap-3 text-xs font-medium tracking-wide">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>{" "}
            Local Mode
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:bg-white/5 cursor-pointer transition-colors">
            BYOK
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 text-slate-300 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            GPT-4o ▾
          </span>
        </div>
      </header>

      {/* Main Hero (Empty State) */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6">
        {/* Logo/Icon */}
        <div className="w-16 h-16 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <Zap className="text-cyan-400" size={32} />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold tracking-widest text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          IRIS GO
        </h1>
        <p className="text-slate-400 text-center max-w-md text-sm mb-12 leading-relaxed">
          Your local AI workforce. Send a message and the team gets to work —
          browser, files, OS, code, research. All at once.
        </p>

        {/* Suggestion Cards Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          {/* Card 1 */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-400/40 transition-all cursor-pointer group">
            <Globe className="text-blue-400 mb-3" size={20} />
            <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors">
              Clone a Website
            </h3>
            <p className="text-xs text-slate-500">
              Scrape, redesign and deploy any site
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-400/40 transition-all cursor-pointer group">
            <TerminalSquare className="text-orange-400 mb-3" size={20} />
            <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors">
              Fix my Codebase
            </h3>
            <p className="text-xs text-slate-500">
              Find bugs, patch and open a PR
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-400/40 transition-all cursor-pointer group">
            <Search className="text-purple-400 mb-3" size={20} />
            <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors">
              Research Competitors
            </h3>
            <p className="text-xs text-slate-500">
              Full intelligence report on anyone
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-400/40 transition-all cursor-pointer group">
            <Folder className="text-yellow-400 mb-3" size={20} />
            <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors">
              Organize Files
            </h3>
            <p className="text-xs text-slate-500">
              Clean, sort and manage filesystem
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Input Area */}
      <div className="p-6 pt-0 w-full max-w-4xl mx-auto">
        <div className="relative flex items-center bg-black/40 border border-white/10 rounded-2xl p-2 focus-within:border-cyan-400/50 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all">
          <input
            type="text"
            placeholder="Message IRIS GO..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-slate-200 placeholder-slate-600 w-full"
          />
          <div className="flex items-center gap-1 pr-1">
            <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Paperclip size={18} />
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Mic size={18} />
            </button>
            <button className="ml-2 p-2 bg-cyan-400 text-black rounded-xl hover:bg-cyan-300 transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <Send size={18} className="-translate-x-px translate-y-px" />
            </button>
          </div>
        </div>

        {/* Footer Security Text */}
        <div className="text-center mt-3 flex justify-center items-center gap-2 text-[10px] text-slate-600 font-mono tracking-widest uppercase">
          <span className="flex items-center gap-1">
            <Shield size={10} /> Local
          </span>
          <span>•</span>
          <span>Private</span>
          <span>•</span>
          <span>Your data stays here</span>
        </div>
      </div>
    </div>
  );
}
