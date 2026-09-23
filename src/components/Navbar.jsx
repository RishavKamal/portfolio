const Navbar = () => {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight"
        >
          RK.
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
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
            href="#projects"
            className="transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;