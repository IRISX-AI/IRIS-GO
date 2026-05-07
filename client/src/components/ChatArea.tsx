// src/components/ChatArea.tsx
import {
  Paperclip,
  Mic,
  Send,
  Shield,
  Terminal,
  CheckCircle2,
  Globe,
  Folder,
  Cpu,
} from "lucide-react";

const MOCK_CHAT = [
  {
    id: 1,
    role: "user",
    content:
      "Clone the homepage of stripe.com, extract the main hero section, and save it locally in a new React component.",
  },
  {
    id: 2,
    role: "assistant",
    actions: [
      {
        agent: "Master",
        icon: Cpu,
        color: "text-emerald-500",
        text: "Task received. Routing to Browser and File agents.",
      },
      {
        agent: "Browser",
        icon: Globe,
        color: "text-cyan-500",
        text: "Navigating to https://stripe.com via PinchTab...",
      },
      {
        agent: "Browser",
        icon: Globe,
        color: "text-cyan-500",
        text: "DOM Scraped. Compressed to 740 tokens.",
      },
      {
        agent: "Coder",
        icon: Terminal,
        color: "text-orange-500",
        text: "Parsing HTML/CSS into React + Tailwind format.",
      },
      {
        agent: "File",
        icon: Folder,
        color: "text-blue-500",
        text: "Created ./components/StripeHero.tsx",
      },
    ],
    content:
      "Task complete. I've scraped the Stripe hero section, converted the structure into a React component with Tailwind classes, and saved it to your local filesystem. You can find it in `components/StripeHero.tsx`. Let me know if you want me to run the dev server to preview it.",
  },
];

export default function ChatArea() {
  // Simulating state - if this array has items, we show chat. If empty, we show the Hero grid.
  const messages = MOCK_CHAT;

  return (
    <div className="flex-1 flex flex-col h-full bg-black/96 relative">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-6 border-b border-white/5 shrink-0 bg-black/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
          <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>
          Clone Stripe.com
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

      {/* Main Chat Feed */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {/* User Message Bubble */}
            {msg.role === "user" && (
              <div className="max-w-[70%] bg-white/5 border border-white/10 text-slate-200 px-5 py-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-lg">
                {msg.content}
              </div>
            )}

            {/* Assistant Message Bubble */}
            {msg.role === "assistant" && (
              <div className="max-w-[85%] flex gap-4">
                {/* Agent Avatar */}
                <div className="w-8 h-8 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mt-1 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <div className="w-2.5 h-2.5 bg-cyan-400 rounded-sm"></div>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Agent Action Log (The "Thinking" Process) */}
                  {msg.actions && (
                    <div className="flex flex-col gap-2 p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs w-fit min-w-[300px]">
                      <div className="text-slate-500 mb-1 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                        <Terminal size={12} /> System Execution Log
                      </div>
                      {msg.actions.map((action, idx) => {
                        const Icon = action.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-slate-400"
                          >
                            <Icon
                              size={14}
                              className={`mt-0.5 ${action.color}`}
                            />
                            <div className="flex flex-col">
                              <span className="text-slate-300">
                                [{action.agent}]
                              </span>
                              <span>{action.text}</span>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/5 text-emerald-400">
                        <CheckCircle2 size={12} /> execution_complete
                      </div>
                    </div>
                  )}

                  {/* Final Text Response */}
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Invisible div to pad the bottom so scrolling doesn't hide behind the input bar */}
        <div className="h-10"></div>
      </div>

      {/* Sticky Input Area */}
      <div className="p-6 pt-0 w-full max-w-4xl mx-auto shrink-0 bg-black/96">
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
              <Send
                size={18}
                className="translate-x-[-1px] translate-y-[1px]"
              />
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
