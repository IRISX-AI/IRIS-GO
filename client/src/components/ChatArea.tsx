import { useState, useRef, useEffect } from "react";
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
  Zap,
} from "lucide-react";

export default function ChatArea() {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        role: "assistant",
        actions: [
          {
            agent: "Master",
            icon: Cpu,
            color: "text-emerald-500",
            text: "Intent recognized. Orchestrating agents...",
          },
          {
            agent: "Browser",
            icon: Globe,
            color: "text-cyan-500",
            text: "Spinning up PinchTab session.",
          },
          {
            agent: "File",
            icon: Folder,
            color: "text-blue-500",
            text: "Prepping local directory.",
          },
        ],
        content: `I received your command: "${userMsg.content}". I've initialized the necessary agents in the background. Once the backend is fully connected, I'll be able to execute this locally on your machine.`,
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000); // 2 second fake delay
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-black/10 relative">
      <header className="h-14 flex items-center justify-between px-6 border-b border-white/5 shrink-0 bg-black/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
          <div
            className={`w-2 h-2 rounded-full ${messages.length > 0 ? "bg-emerald-500 shadow-[0_0_5px_#10b981]" : "bg-slate-600"}`}
          ></div>
          {messages.length > 0 ? "Active Session" : "New Chat"}
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

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 mt-10">
            <div className="w-16 h-16 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <Zap className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-4xl font-bold tracking-widest text-cyan-400 mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              IRIS GO
            </h1>
            <p className="text-slate-400 text-center max-w-md text-sm mb-12 leading-relaxed">
              Your local AI workforce. Send a message and the team gets to work
              — browser, files, OS, code, research. All at once.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {[
                "Clone a Website",
                "Fix my Codebase",
                "Research Competitors",
                "Organize Files",
              ].map((title, i) => (
                <div
                  key={i}
                  onClick={() => setInputValue(title)}
                  className="p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-cyan-400/40 transition-all cursor-pointer group"
                >
                  <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click to autofill command
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-8 pb-32">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "user" ? (
                  <div className="max-w-[70%] bg-white/5 border border-white/10 text-slate-200 px-5 py-3.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed shadow-lg">
                    {msg.content}
                  </div>
                ) : (
                  <div className="max-w-[85%] flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mt-1 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-sm"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {msg.actions && (
                        <div className="flex flex-col gap-2 p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs w-fit min-w-75">
                          <div className="text-slate-500 mb-1 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                            <Terminal size={12} /> System Execution Log
                          </div>
                          {msg.actions.map((action: any, idx: number) => {
                            const Icon = action.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-start gap-3 text-slate-100"
                              >
                                <Icon
                                  size={14}
                                  className={`mt-0.5 ${action.color}`}
                                />
                                <div className="flex flex-col">
                                  <span className="text-slate-100">
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
                      <div className="text-slate-300 text-sm leading-relaxed">
                        {msg.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/5 border border-cyan-400/10 flex items-center justify-center mt-1">
                    <div className="w-2.5 h-2.5 bg-cyan-400/50 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-black/50 border border-white/5 rounded-xl font-mono text-xs text-cyan-500 animate-pulse">
                    <Cpu size={14} className="mr-2" />
                    Agents coordinating...
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full p-6 pt-0 bg-linear-to-t from-black/96 via-black/96 to-transparent pb-6">
        <div className="max-w-4xl mx-auto relative flex items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-2 focus-within:border-cyan-400/50 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message IRIS GO..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-slate-200 placeholder-slate-600 w-full"
            autoFocus
          />
          <div className="flex items-center gap-1 pr-1">
            <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Paperclip size={18} />
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Mic size={18} />
            </button>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className={`ml-2 p-2 rounded-xl transition-all ${
                inputValue.trim() && !isTyping
                  ? "bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "bg-white/10 text-slate-500 cursor-not-allowed"
              }`}
            >
              <Send
                size={18}
                className="-translate-x-px translate-y-px"
              />
            </button>
          </div>
        </div>

        <div className="text-center mt-3 flex justify-center items-center gap-2 text-[10px] text-slate-600 font-mono tracking-widest uppercase bg-black/96">
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
