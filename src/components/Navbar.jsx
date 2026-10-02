import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  IoMoon,
  IoSunny,
} from "react-icons/io5";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./Navbar.css";

const navItems = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function Navbar() {
  const [activeSection, setActiveSection] =
    useState(null);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [theme, setTheme] =
    useState("light");

  const isNavigatingRef =
    useRef(false);

  const navigationTargetRef =
    useRef(null);

  const navigationTimerRef =
    useRef(null);

  /*
   * Initialize theme.
   */
  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem(
        "portfolio-theme",
      );

    if (
      savedTheme === "dark" ||
      savedTheme === "light"
    ) {
      setTheme(savedTheme);

      document.documentElement.dataset.theme =
        savedTheme;

      return;
    }

    const prefersDark =
      window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

    const initialTheme = prefersDark
      ? "dark"
      : "light";

    setTheme(initialTheme);

    document.documentElement.dataset.theme =
      initialTheme;
  }, []);

  /*
   * Apply theme.
   */
  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    window.localStorage.setItem(
      "portfolio-theme",
      theme,
    );
  }, [theme]);

  /*
   * Toggle theme.
   */
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark",
    );
  };

  /*
   * Detect active section while scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 35);

      if (scrollY < 120) {
        if (!isNavigatingRef.current) {
          setActiveSection(null);
        }

        return;
      }

      if (isNavigatingRef.current) {
        return;
      }

      const scrollPosition =
        scrollY + 180;

      let currentSection = null;

      for (const item of navItems) {
        const section =
          document.getElementById(item.id);

        if (!section) continue;

        if (
          section.offsetTop <=
          scrollPosition
        ) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /*
   * Finish smooth navigation.
   */
  useEffect(() => {
    const finishNavigation = () => {
      if (!isNavigatingRef.current) {
        return;
      }

      const target =
        navigationTargetRef.current;

      if (target) {
        setActiveSection(target);
      }

      isNavigatingRef.current = false;
      navigationTargetRef.current = null;

      if (navigationTimerRef.current) {
        window.clearTimeout(
          navigationTimerRef.current,
        );

        navigationTimerRef.current = null;
      }
    };

    window.addEventListener(
      "scrollend",
      finishNavigation,
    );

    return () => {
      window.removeEventListener(
        "scrollend",
        finishNavigation,
      );

      if (navigationTimerRef.current) {
        window.clearTimeout(
          navigationTimerRef.current,
        );
      }
    };
  }, []);

  /*
   * Smoothly navigate to section.
   */
  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (!section) return;

    isNavigatingRef.current = true;

    navigationTargetRef.current = id;

    setActiveSection(id);

    setMenuOpen(false);

    const navbarOffset = 92;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`,
    );

    if (navigationTimerRef.current) {
      window.clearTimeout(
        navigationTimerRef.current,
      );
    }

    navigationTimerRef.current =
      window.setTimeout(() => {
        if (!isNavigatingRef.current) {
          return;
        }

        setActiveSection(id);

        isNavigatingRef.current = false;
        navigationTargetRef.current = null;

        navigationTimerRef.current = null;
      }, 1200);
  };

  /*
   * Return to Hero.
   */
  const handleLogoClick = () => {
    isNavigatingRef.current = false;

    navigationTargetRef.current = null;

    if (navigationTimerRef.current) {
      window.clearTimeout(
        navigationTimerRef.current,
      );

      navigationTimerRef.current = null;
    }

    setActiveSection(null);

    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      "#top",
    );
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`site-navbar ${
        isScrolled
          ? "site-navbar-scrolled"
          : ""
      }`}
    >
      <div className="site-navbar-inner">

        {/* =================================
            LOGO
        ================================= */}

        <button
          type="button"
          className="site-navbar-logo"
          onClick={handleLogoClick}
          aria-label="Go to home"
        >
          <span className="site-navbar-logo-main">
            RISHAV
          </span>

          <span className="site-navbar-logo-mark">
            ®
          </span>
        </button>

        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="site-navbar-nav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <button
                type="button"
                key={item.id}
                className={`site-navbar-link ${
                  isActive
                    ? "site-navbar-link-active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="site-navbar-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 25,
                      mass: 0.8,
                    }}
                  />
                )}

                <span className="site-navbar-link-content">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="site-navbar-right">

          {/* =================================
              THEME SWITCH
          ================================= */}

          <motion.button
            type="button"
            className="site-navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            aria-pressed={isDark}
            title={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            whileTap={{
              scale: 0.94,
            }}
          >
            <motion.div
              className="site-navbar-theme-track"
              animate={{
                backgroundColor: isDark
                  ? "#0d0d0f"
                  : "#ece9e2",
              }}
              transition={{
                duration: 0.3,
              }}
            />

            <motion.div
              className="site-navbar-theme-knob"
              animate={{
                x: isDark ? 20 : 0,
                backgroundColor: isDark
                  ? "#29292e"
                  : "#ffffff",
              }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 26,
              }}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={
                    isDark
                      ? "moon"
                      : "sun"
                  }
                  className="site-navbar-theme-icon"
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: -25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: 25,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  {isDark ? (
                    <IoMoon />
                  ) : (
                    <IoSunny />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.button>

          {/* =================================
              AVAILABILITY
          ================================= */}

          <div className="site-navbar-availability">
            <span className="site-navbar-status-dot" />

            <span>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* =================================
              GITHUB
          ================================= */}

          <a
            href="https://github.com/RishavKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="site-navbar-external"
            aria-label="GitHub"
          >
            <FaArrowUpRightFromSquare />
          </a>
        </div>

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          className={`site-navbar-menu-button ${
            menuOpen
              ? "site-navbar-menu-open"
              : ""
          }`}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* =================================
          MOBILE NAVIGATION
      ================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="site-navbar-mobile"
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.985,
            }}
            transition={{
              duration: 0.24,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            {navItems.map(
              (item, index) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <motion.button
                    type="button"
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.04,
                      duration: 0.25,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className={`site-navbar-mobile-link ${
                      isActive
                        ? "site-navbar-mobile-link-active"
                        : ""
                    }`}
                    onClick={() =>
                      scrollToSection(
                        item.id,
                      )
                    }
                  >
                    <span>
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="mobile-navbar-active-pill"
                        className="site-navbar-mobile-pill"
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 25,
                          mass: 0.8,
                        }}
                      />
                    )}
                  </motion.button>
                );
              },
            )}

            <div className="site-navbar-mobile-footer">
              <span className="site-navbar-status-dot" />

              <span>
                AVAILABLE FOR WORK
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;1