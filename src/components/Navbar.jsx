const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-white"
        >
          RK.
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-7 text-sm text-white/60 sm:flex">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#education"
            className="transition hover:text-white"
          >
            Education
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 text-sm text-white/60 sm:ml-8">
          <a
            href="https://github.com/RishavKamal"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishavkamal"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;