import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Professional experience
            <span className="text-slate-400">
              {" "}across blockchain and software development.
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            My recent work is focused on Ethereum, Solidity, Web3 and
            blockchain engineering, supported by experience in full-stack
            development and technology-driven products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-white/10 md:block" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ experience }) {
  return (
    <article className="relative md:pl-12">

      {/* Timeline dot */}
      <div className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 sm:p-8">

        {/* Top row */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">

          <div>
            <p className="text-sm font-medium text-cyan-400">
              {experience.type}
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              {experience.role}
            </h3>

            <p className="mt-2 text-lg text-slate-300">
              {experience.company}
            </p>
          </div>

          <div className="lg:text-right">
            <p className="font-medium text-slate-300">
              {experience.period}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {experience.location}
            </p>
          </div>

        </div>

        {/* Description */}
        <p className="mt-6 max-w-4xl leading-7 text-slate-400">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Highlights
          </p>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}

export default Experience;