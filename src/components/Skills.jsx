import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Blockchain technologies I work with
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My primary focus is Ethereum, Solidity and EVM smart contract
            development, alongside growing expertise in Rust and Solana
            protocol development.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>

              {group.description && (
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* This line is required because App.jsx imports Skills as default */
export default Skills;