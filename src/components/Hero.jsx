import { profile } from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[35%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute right-[10%] top-[25%] h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left content */}
          <div>

            {/* Small heading */}
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">
                Vishal Kumar
              </span>

              <br />

              <span className="text-slate-400">
                Mathuri
              </span>
            </h1>

            {/* Professional headline */}
            <h2 className="mt-8 max-w-2xl text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              AI <span className="text-cyan-400">•</span>{" "}
              Blockchain <span className="text-cyan-400">•</span>{" "}
              Full Stack
              <br />
              Developer
            </h2>

            {/* Primary focus */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Focused on{" "}
              <span className="font-medium text-slate-200">
                Ethereum and Solidity
              </span>
              , with experience building AI-powered applications,
              backend systems and modern full-stack products.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-7 py-3.5 font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="/resumes/general.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-7 py-3.5 font-medium text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Download Resume
              </a>

            </div>

            {/* Social links */}
            <div className="mt-9 flex gap-7">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/10 blur-3xl" />

              {/* Image */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 sm:h-80 sm:w-80 lg:h-[440px] lg:w-[440px]">

                <img
                  src="/profile.jpg"
                  alt="Vishal Kumar Mathuri"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;