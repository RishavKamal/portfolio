const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center px-6 py-20"
    >
      <div className="max-w-3xl">

        {/* Status */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Currently building
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm Rishav.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
          Computer Science student building toward software engineering
          through Java, DSA, React, Spring Boot and real-world projects.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="https://github.com/RishavKamal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            GitHub
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;