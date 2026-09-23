const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10"
    >
      
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            About
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Learning, building, and getting better every day.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main text */}
          <div className="max-w-2xl space-y-6 text-base leading-8 text-white/55 sm:text-lg">
            <p>
              I'm a Computer Science student with a growing focus on
              software engineering. I enjoy understanding how things work
              underneath the surface, rather than only learning how to use
              them.
            </p>

            <p>
              Right now, I'm strengthening my foundations in Java, data
              structures and algorithms, backend development, and modern
              frontend technologies while building projects along the way.
            </p>

            <p>
              My goal is to become a well-rounded software engineer who can
              understand a problem, design a solution, and turn it into
              reliable software.
            </p>
          </div>

          {/* Focus card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">

            <p className="text-sm font-medium text-white/40">
              Current focus
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-sm font-medium text-white">
                  Java & DSA
                </p>
                <p className="mt-1 text-sm leading-6 text-white/40">
                  Building strong programming and problem-solving fundamentals.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Backend Development
                </p>
                <p className="mt-1 text-sm leading-6 text-white/40">
                  Learning Spring Boot, APIs, databases, and backend architecture.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Full-Stack Development
                </p>
                <p className="mt-1 text-sm leading-6 text-white/40">
                  Building practical interfaces with React and modern web tools.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;