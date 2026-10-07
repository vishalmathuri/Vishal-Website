import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-white"
        >
          Vishal<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#resume"
            className="rounded-lg border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-cyan-400/40 lg:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          )}
        </button>

      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#resume"
              onClick={closeMenu}
              className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-center font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              View Resumes
            </a>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;