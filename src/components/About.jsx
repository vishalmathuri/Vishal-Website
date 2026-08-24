function About() {
  const areas = [
    {
      title: "Ethereum / Solidity",
      description:
        "Smart contracts, EVM-based applications, DeFi, Web3 and decentralized systems."
    },
    {
      title: "AI",
      description:
        "LLM applications, RAG, LangChain and AI-powered tools."
    },
    {
      title: "Full Stack / Backend",
      description:
        "React, Node.js, APIs, databases, SaaS and application architecture."
    },
    {
      title: "Rust / Solana",
      description:
        "Rust, Cargo, Anchor and Solana program development."
    }
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        {/* Heading */}
        <h2 className="max-w-6xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Building at the intersection of{" "}
          <span className="text-slate-400">
            Blockchain, AI and Full Stack.
          </span>
        </h2>

        {/* Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left side */}
          <div className="max-w-3xl space-y-7 text-lg leading-8 text-slate-400">

            <p>
              I'm Vishal Kumar Mathuri, a developer with a strong focus on{" "}
              <span className="font-medium text-slate-200">
                Ethereum blockchain and Solidity development
              </span>
              , with additional experience across AI, backend engineering,
              full-stack applications and Rust/Solana development.
            </p>

            <p>
              My primary blockchain work has been centered around{" "}
              <span className="font-medium text-slate-200">
                Ethereum, EVM-based applications, smart contracts, DeFi and
                Web3
              </span>
              , while I also explore AI-powered applications, backend systems
              and complete web platforms.
            </p>

            <p>
              I enjoy understanding systems from the foundation up — from
              designing and developing smart contracts to building the
              backend, frontend and AI components around them.
            </p>

            <p>
              This portfolio brings together my professional experience,
              projects, technical work, teaching activities and targeted
              resumes in one place.
            </p>

          </div>

          {/* Right side */}
          <div className="grid gap-5 sm:grid-cols-2">

            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;