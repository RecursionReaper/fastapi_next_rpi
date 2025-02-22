import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen bg-black text-white font-sans antialiased overflow-hidden">
      <header className="p-4 sm:p-6 text-center relative z-10 shrink-0">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          Logo
        </span>
      </header>

      <nav className="p-4 sm:p-6 relative z-10 shrink-0">
        <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 text-zinc-300 text-xs sm:text-sm md:text-base font-medium">
          <li className="group w-full sm:w-auto px-4 py-2 rounded-full cursor-pointer bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out">
            <Link href="/" className="group-hover:text-white transition-colors duration-300">Home</Link>
          </li>
          <li className="group w-full sm:w-auto px-4 py-2 rounded-full cursor-pointer bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out">
            <Link href='/snaps' className="group-hover:text-white transition-colors duration-300">Snaps</Link>
          </li>
          <li className="group w-full sm:w-auto px-4 py-2 rounded-full cursor-pointer bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out">
            <Link href='/alerts' className="group-hover:text-white transition-colors duration-300">Alerts</Link>
          </li>
          <li className="group w-full sm:w-auto px-4 py-2 rounded-full cursor-pointer bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out">
            <Link href='/settings' className="group-hover:text-white transition-colors duration-300">Settings</Link>
          </li>
          <li className="group w-full sm:w-auto px-4 py-2 rounded-full cursor-pointer bg-zinc-900/20 backdrop-blur-md border border-zinc-800/50 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out">
            <Link href='/about' className="group-hover:text-white transition-colors duration-300">About</Link>
          </li>
        </ul>
      </nav>

      <main className="flex justify-center items-center flex-1 p-4 sm:p-6 md:p-8 relative z-10 overflow-hidden">
        <div className="bg-gradient-to-br from-zinc-950/90 to-black/90 w-full sm:w-[90%] md:w-[80%] lg:w-[75%] h-full shadow-2xl rounded-xl sm:rounded-2xl flex justify-center items-center text-zinc-400 text-lg sm:text-xl md:text-2xl font-medium border border-zinc-800/30 backdrop-blur-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:scale-[1.01] transition-all duration-500 ease-out group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-20">VIDEO</span>
        </div>
      </main>

      <footer className="p-4 sm:p-6 text-center text-zinc-400 text-xs sm:text-sm md:text-base relative z-10 bg-gradient-to-t from-zinc-950/80 to-transparent shrink-0">
        Made by some crackheads
      </footer>

    </div>
  );
}