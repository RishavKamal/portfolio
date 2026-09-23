const skills = [
  "Java",
  "Data Structures & Algorithms",
  "Spring Boot",
  "React",
  "SQL",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Skills
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies I'm currently focused on.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            The tools I'm using to strengthen my fundamentals and build real software.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;