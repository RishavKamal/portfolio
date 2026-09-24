import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const mobileLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const firstLinkRef = useRef(null);
  const tickingRef = useRef(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ==================================================
     ACTIVE SECTION + SCROLL STATE
  ================================================== */

  useEffect(() => {
    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsScrolled(scrollY > 20);

      /*
        This is the point at which a section becomes
        active.

        The Hero occupies the top of the page, so before
        About reaches this point, no nav item is active.
      */
      const activationPoint =
        scrollY + viewportHeight * 0.42;

      const sections = mobileLinks
        .map((link) => {
          const section = document.querySelector(link.href);

          if (!section) {
            return null;
          }

          const rect = section.getBoundingClientRect();

          return {
            id: section.id,
            top: rect.top + scrollY,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      /*
        HOME / HERO

        Nothing is highlighted before About reaches
        the activation point.
      */
      if (
        sections.length === 0 ||
        activationPoint < sections[0].top
      ) {
        setActiveSection("");
        tickingRef.current = false;
        return;
      }

      /*
        Find the latest section whose top has crossed
        the activation point.
      */
      let currentSection = "";

      for (const section of sections) {
        if (section.top <= activationPoint) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);

      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;

      window.requestAnimationFrame(updateNavbar);
    };

    updateNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    window.addEventListener(
      "hashchange",
      updateNavbar
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateNavbar
      );

      window.removeEventListener(
        "hashchange",
        updateNavbar
      );
    };
  }, []);

  /* ==================================================
     ESCAPE + BODY SCROLL LOCK
  ================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ==================================================
     FOCUS FIRST MOBILE LINK
  ================================================== */

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const timer = setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav
        className={`sticky top-0 z-[100] w-full border-b transition-[background-color,border-color,box-shadow] duration-500 ease-menu ${
          isScrolled
            ? "border-(--border) bg-(--bg)/95 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            : "border-(--border) bg-(--bg)/90 backdrop-blur-md"
        }`}
      >
        <div className="portfolio-container">
          <div className="flex h-[81px] items-center justify-between">

            {/* ==================================================
                LOGO
            ================================================== */}

            <a
              href="#hero"
              onClick={closeMenu}
              className="text-xl font-bold tracking-tight text-(--text) transition-colors duration-300"
            >
              RK.
            </a>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden items-center gap-7 text-sm sm:flex">
              {mobileLinks.map((link, index) => {
                const sectionId =
                  link.href.replace("#", "");

                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`desktop-nav-item group relative py-2 ${
                      isActive
                        ? "is-active text-(--text)"
                        : "text-(--text-muted) hover:text-(--text)"
                    }`}
                    style={{
                      "--nav-delay": `${
                        180 + index * 100
                      }ms`,
                    }}
                  >
                    <span className="relative inline-block">
                      {link.label}

                      {/* Active / hover underline */}
                      <span
                        className="nav-active-line"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                );
              })}
            </div>

            {/* ==================================================
                DESKTOP RIGHT SIDE
            ================================================== */}

            <div className="hidden items-center gap-4 sm:flex">
              <a
                href="https://github.com/RishavKamal"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--text)"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rishavkamal"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--text)"
              >
                LinkedIn
              </a>

              <ThemeSwitcher />
            </div>

            {/* ==================================================
                MOBILE CONTROLS
            ================================================== */}

            <div className="flex items-center gap-2 sm:hidden">
              <ThemeSwitcher />

              <button
                type="button"
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() =>
                  setMenuOpen(
                    (previous) => !previous
                  )
                }
                className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text-muted) transition-[background-color,border-color,color] duration-300 hover:border-(--border-hover) hover:bg-(--surface-hover) hover:text-(--text) focus-visible:ring-2 focus-visible:ring-(--accent)"
              >
                {/* Top line */}
                <span
                  className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-[550ms] ease-menu ${
                    menuOpen
                      ? "translate-y-0 rotate-45"
                      : "-translate-y-[5px]"
                  }`}
                />

                {/* Middle line */}
                <span
                  className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-[opacity,transform] duration-[300ms] ease-out ${
                    menuOpen
                      ? "scale-x-0 opacity-0"
                      : "scale-x-100 opacity-100"
                  }`}
                />

                {/* Bottom line */}
                <span
                  className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-[550ms] ease-menu ${
                    menuOpen
                      ? "translate-y-0 -rotate-45"
                      : "translate-y-[5px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[81px] z-[90] sm:hidden ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        {/* ==================================================
            BACKDROP
        ================================================== */}

        <div
          className={`absolute inset-0 bg-(--bg)/75 backdrop-blur-md transition-opacity duration-[700ms] ease-menu ${
            menuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* ==================================================
            MENU CONTENT

            Stationary. No translate or scale here.
        ================================================== */}

        <div
          onClick={(event) =>
            event.stopPropagation()
          }
          className={`relative flex h-full flex-col px-6 pb-8 pt-10 transition-opacity duration-[500ms] ease-menu ${
            menuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {/* ==================================================
              MOBILE LINKS
          ================================================== */}

          <div className="flex flex-1 flex-col justify-center">
            <div className="mx-auto w-full max-w-sm">

              {mobileLinks.map((link, index) => {
                const sectionId =
                  link.href.replace("#", "");

                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    ref={
                      index === 0
                        ? firstLinkRef
                        : null
                    }
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between border-b border-(--border) py-5 text-2xl font-medium transition-[color,opacity,transform] duration-[700ms] ease-menu ${
                      isActive
                        ? "text-(--accent)"
                        : "text-(--text)"
                    } ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen
                        ? `${160 + index * 90}ms`
                        : "0ms",
                    }}
                  >
                    <span>{link.label}</span>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-[transform,color] duration-300 ease-out ${
                        isActive
                          ? "translate-x-1 text-(--accent)"
                          : "text-(--text-faint) group-hover:translate-x-1 group-hover:text-(--accent)"
                      }`}
                    >
                      <path
                        d="M6 3.5L11.5 9L6 14.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                );
              })}

            </div>
          </div>

          {/* ==================================================
              SOCIAL LINKS
          ================================================== */}

          <div
            className={`mx-auto flex w-full max-w-sm items-center gap-8 border-t border-(--border) pt-6 transition-[opacity,transform] duration-[700ms] ease-menu ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen
                ? "560ms"
                : "0ms",
            }}
          >
            <a
              href="https://github.com/RishavKamal"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="text-sm font-medium text-(--text-muted) transition-colors duration-200 hover:text-(--text)"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rishavkamal"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="text-sm font-medium text-(--text-muted) transition-colors duration-200 hover:text-(--text)"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;