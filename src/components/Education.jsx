function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Academic
            <span className="text-slate-400"> background.</span>
          </h2>
        </div>

        {/* Education card */}
        <div className="mt-12">
          <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/40 sm:p-9">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Indian Institute of Technology Bombay
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  IIT Bombay
                </h3>

                <p className="mt-3 text-lg text-slate-300">
                  Dual Degree — B.Tech + M.Tech
                </p>

                <p className="mt-2 text-slate-400">
                  Energy Science and Engineering
                </p>
              </div>

              <div className="md:text-right">
                <p className="font-medium text-slate-300">
                  2014 — 2019
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Mumbai, India
                </p>
              </div>

            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="max-w-4xl leading-7 text-slate-400">
                Completed an integrated B.Tech and M.Tech dual degree at
                IIT Bombay, building a strong foundation in engineering,
                analytical problem solving and technical systems.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;