const resumes = [
  {
    id: "master",

    title: "Master Resume",

    subtitle: "Complete Professional Profile",

    description:
      "A broader overview of my blockchain, Rust/Solana and full-stack development experience and projects.",

    skills: [
      "Blockchain",
      "Ethereum",
      "Solidity",
      "Rust",
      "Solana",
      "Full Stack"
    ],

    file: "/resumes/Vishal-Mathuri-Master-Resume.pdf"
  },

  {
    id: "blockchain",

    title: "Blockchain Developer",

    subtitle: "Ethereum / Solidity",

    description:
      "Focused on Ethereum, Solidity, EVM smart contracts, DeFi protocols, Web3 development and smart contract engineering.",

    skills: [
      "Ethereum",
      "Solidity",
      "EVM",
      "DeFi",
      "Foundry",
      "Web3"
    ],

    file: "/resumes/Vishal-Mathuri-Blockchain-Developer-Resume.pdf"
  },

  {
    id: "rust",

    title: "Rust Developer",

    subtitle: "Rust / Solana",

    description:
      "Focused on Rust development, Solana programs, Anchor, PDAs and blockchain protocol engineering.",

    skills: [
      "Rust",
      "Cargo",
      "Solana",
      "Anchor",
      "PDAs",
      "Blockchain"
    ],

    file: "/resumes/Vishal-Mathuri-Rust-Developer-Resume.pdf"
  },

  {
    id: "full-stack",

    title: "Full Stack Developer",

    subtitle: "React / Node.js",

    description:
      "Focused on building complete web applications using React, Node.js, APIs, databases and modern deployment platforms.",

    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "JavaScript"
    ],

    file: "/resumes/Vishal-Mathuri-Full-Stack-Developer-Resume.pdf"
  }
];

function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Resume
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Choose the resume{" "}
            <span className="text-slate-400">
              relevant to the role.
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            View my complete professional profile or choose a focused
            resume for Blockchain, Rust/Solana or Full Stack opportunities.
          </p>
        </div>

        {/* Resume cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {resumes.map((resume) => (
            <article
              key={resume.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8"
            >

              {/* Type */}
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                {resume.subtitle}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {resume.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-400">
                {resume.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex flex-wrap gap-4 pt-8">

                <a
                  href={resume.file}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  View Resume
                </a>

                <a
                  href={resume.file}
                  download
                  className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  Download PDF
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Resume;