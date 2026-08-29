function About() {
  const areas = [
    {
      title: "Ethereum / Solidity",
      description:
        "Primary specialization in Solidity smart contracts, EVM applications, DeFi protocols and Ethereum-based Web3 systems."
    },

    {
      title: "Smart Contract Engineering",
      description:
        "Foundry testing, security patterns, access control, invariant testing, protocol architecture and gas-conscious Solidity development."
    },

    {
      title: "Web3 Development",
      description:
        "Building complete decentralized applications with React, Node.js, Ethers.js, REST APIs, wallets and decentralized storage."
    },

    {
      title: "Rust / Solana",
      description:
        "Developing Rust-based blockchain protocols and Solana programs using Cargo, Anchor, PDAs and Solana development tools."
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
          Building secure{" "}
          <span className="text-slate-400">
            blockchain protocols and Web3 applications.
          </span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left side */}
          <div className="max-w-3xl space-y-7 text-lg leading-8 text-slate-400">

            <p>
              I'm Vishal Kumar Mathuri, a Blockchain Developer with a
              strong focus on{" "}
              <span className="font-medium text-slate-200">
                Ethereum, Solidity and EVM-based development.
              </span>
            </p>

            <p>
              My work includes smart contracts, DeFi protocols,
              decentralized applications, NFT systems, token standards,
              wallet integrations and Web3 infrastructure.
            </p>

            <p>
              I focus on building secure and testable smart contracts using{" "}
              <span className="font-medium text-slate-200">
                Foundry, Hardhat and OpenZeppelin
              </span>
              , while also working across the frontend and backend layers
              required to turn blockchain protocols into complete
              applications.
            </p>

            <p>
              Alongside Ethereum development, I am building deeper expertise
              in{" "}
              <span className="font-medium text-slate-200">
                Rust and Solana
              </span>
              , focusing on Solana programs, Anchor, PDAs and blockchain
              protocol development.
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