import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Ethereum / Solidity",
    "Rust / Solana"
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeFilter)
        );

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );

  const additionalProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Blockchain engineering in practice.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Selected work across Ethereum, Solidity, DeFi, Web3,
            Rust and blockchain protocol development.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured label */}
        {featuredProjects.length > 0 && (
          <>
            <div className="mt-16 flex items-center gap-4">
              <h3 className="text-xl font-semibold">
                Featured Projects
              </h3>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Featured projects */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                />
              ))}
            </div>
          </>
        )}

        {/* Additional projects */}
        {additionalProjects.length > 0 && (
          <>
            <div className="mt-20 flex items-center gap-4">
              <h3 className="text-xl font-semibold">
                Additional Projects
              </h3>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
        featured ? "p-7 sm:p-8" : "p-6"
      }`}
    >

      {/* Status */}
      <div className="flex flex-wrap items-center justify-between gap-3">

        <div className="flex flex-wrap gap-2">
          {project.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {role}
            </span>
          ))}
        </div>

        <span
          className={`text-xs font-medium ${
            project.status === "Completed"
              ? "text-emerald-400"
              : "text-amber-400"
          }`}
        >
          {project.status}
        </span>

      </div>

      {/* Title */}
      <h3
        className={`mt-6 font-semibold text-white ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Highlights - featured projects only */}
      {featured && (
        <div className="mt-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Engineering Highlights
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-2 text-sm leading-6 text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Impact */}
      <div className="mt-7 border-t border-white/10 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Impact
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {project.impact}
        </p>
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-4 pt-7">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-white transition hover:text-cyan-400"
        >
          GitHub →
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            Live Demo →
          </a>
        )}

      </div>

    </article>
  );
}

export default Projects;