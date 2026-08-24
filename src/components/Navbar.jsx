function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          Vishal<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Contact
          </a>
        </div>

        {/* Resume */}
        <a
          href="/Blockchain-Developer-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Resume
        </a>

      </div>
    </nav>
  )
}

export default Navbar