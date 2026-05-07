import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-full bg-black/90 text-slate-300 font-mono overflow-hidden">
      <div className="relative z-10 flex w-full h-full">
        <Sidebar />

        <main className="flex-1 flex flex-col relative border-l border-black">
          <div className="flex items-center justify-center h-full text-cyan-400">
            [ Main Chat Area Pending ]
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
