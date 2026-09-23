import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-16 px-6 py-20 xl:grid-cols-[1.2fr_0.8fr]"
    >
      {/* Left side */}
      <div className="max-w-5xl">

        {/* Status */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium tracking-wide text-white/60">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Learning & building
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
          Rishav Kamal
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-lg font-medium leading-7 tracking-[-0.01em] text-white/65 sm:text-xl">
          Computer Science Student · Java & Full-Stack Developer
        </p>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
          I build software while strengthening my foundations in Java, DSA,
          backend development, and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/RishavKamal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold tracking-tight text-black transition hover:bg-white/90"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishavkamal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-white/5"
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* Right side */}
      <HeroVisual />
    </section>
  );
};

export default Hero;