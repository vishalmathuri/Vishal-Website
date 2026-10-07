import { profile } from "../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-10 sm:py-16">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Interested in working
            <span className="text-slate-400"> together?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to opportunities in blockchain development,
            particularly Ethereum / Solidity and Rust / Solana roles.
            Feel free to reach out to discuss a role, project or collaboration.
          </p>

          {/* Contact details */}
          <div className="mx-auto mt-9 flex max-w-xl flex-col gap-4">

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 transition hover:border-cyan-400/40"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>

              <p className="mt-2 text-cyan-400">
                {profile.email}
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${profile.phone}`}
              className="rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 transition hover:border-cyan-400/40"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Mobile
              </p>

              <p className="mt-2 text-cyan-400">
                {profile.phone}
              </p>
            </a>

          </div>

          {/* Main CTA */}
          <div className="mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded-xl bg-cyan-400 px-7 py-3.5 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Send Email
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">

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

            <a
              href="#resume"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Resumes
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;