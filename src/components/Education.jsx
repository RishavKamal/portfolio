const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Education
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic background.
          </h2>
        </div>

        {/* Education card */}
        <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Chandigarh University
              </h3>

              <p className="mt-2 text-base text-white/60">
                Bachelor of Engineering in Computer Science & Engineering (CSE)
              </p>
            </div>

            <p className="text-sm text-white/40">
              2024 – Present
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;