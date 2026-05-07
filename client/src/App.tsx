import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";

function App() {
  return (
    <div className="flex h-screen w-full bg-black/96 text-slate-300 font-mono overflow-hidden">
      <div className="relative z-10 flex w-full h-full">
        <Sidebar />

        <main className="flex-1 flex flex-col relative border-l border-black">
          <ChatArea />
        </main>
      </div>
    </div>
  );
}

export default App;
