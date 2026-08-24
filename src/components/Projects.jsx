import { useMemo, useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [roleFilter, setRoleFilter] = useState("All");
  const [technologyFilter, setTechnologyFilter] = useState("All");
  const [impactFilter, setImpactFilter] = useState("All");

  const roles = [
    "All",
    ...new Set(projects.flatMap((project) => project.roles))
  ];

  const technologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies))
  ];

  const impacts = [
    "All",
    ...new Set(projects.flatMap((project) => project.impact))
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesRole =
        roleFilter === "All" ||
        project.roles.includes(roleFilter);

      const matchesTechnology =
        technologyFilter === "All" ||
        project.technologies.includes(technologyFilter);

      const matchesImpact =
        impactFilter === "All" ||
        project.impact.includes(impactFilter);

      return (
        matchesRole &&
        matchesTechnology &&
        matchesImpact
      );
    });
  }, [roleFilter, technologyFilter, impactFilter]);

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Work across AI, Blockchain
            <span className="text-slate-400">
              {" "}and Full Stack.
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Explore my projects by role, technology and the type
            of problem they solve.
          </p>
        </div>

        {/* Role filter */}
        <FilterGroup
          title="Role"
          options={roles}
          value={roleFilter}
          onChange={setRoleFilter}
        />

        {/* Technology filter */}
        <FilterGroup
          title="Technology"
          options={technologies}
          value={technologyFilter}
          onChange={setTechnologyFilter}
        />

        {/* Impact filter */}
        <FilterGroup
          title="Impact"
          options={impacts}
          value={impactFilter}
          onChange={setImpactFilter}
        />

        {/* Projects */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 p-10 text-center text-slate-400">
            No projects match the selected filters.
          </div>
        )}

      </div>
    </section>
  );
}

function FilterGroup({
  title,
  options,
  value,
  onChange
}) {
  return (
    <div className="mb-6">

      <p className="mb-3 text-sm font-medium text-slate-400">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">

        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-lg border px-4 py-2 text-sm transition ${
              value === option
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}

      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

      <h3 className="text-2xl font-semibold">
        {project.title}
      </h3>

      {/* Roles */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
          Role
        </p>

        <div className="flex flex-wrap gap-2">
          {project.roles.map((role) => (
            <span
              key={role}
              className="rounded-md bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
          Technology
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
          Impact
        </p>

        <div className="flex flex-wrap gap-2">
          {project.impact.map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-3 py-1 text-sm text-slate-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 leading-7 text-slate-400">
        {project.description}
      </p>

      {/* Links */}
      <div className="mt-7 flex flex-wrap gap-3">

        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950"
          >
            Live Demo
          </a>
        )}

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/30"
          >
            GitHub
          </a>
        )}

        {project.links.documentation && (
          <a
            href={project.links.documentation}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/30"
          >
            Documentation
          </a>
        )}

        {project.links.contract && (
          <a
            href={project.links.contract}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-white/30"
          >
            Contract
          </a>
        )}

      </div>

    </article>
  );
}

export default Projects;