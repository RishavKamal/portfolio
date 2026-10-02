import {
  m,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Lenis from "lenis";

import { FaGithub } from "react-icons/fa";

import {
  useEffect,
  useRef,
} from "react";

import "./Hero.css";

const name = "Rishav Kamal";

function Character({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) {
  const distanceFromCenter =
    index - centerIndex;

  const distance =
    Math.abs(distanceFromCenter);

  const x = useTransform(
    scrollYProgress,
    [0, 0.18],
    [distanceFromCenter * 30, 0],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.18],
    [distanceFromCenter * 3.5, 0],
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.18],
    [distance * -6, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.18],
    [0.96, 1],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.10, 0.18],
    [0.9, 0.98, 1],
  );

  if (char === " ") {
    return (
      <span
        aria-hidden="true"
        className="character-space"
      />
    );
  }

  return (
    <m.span
      className="character"
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
      }}
    >
      {char}
    </m.span>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const lenisRef = useRef(null);

  const { scrollYProgress } =
    useScroll({
      target: heroRef,
      offset: [
        "start start",
        "end start",
      ],
    });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: true,
    });

    lenisRef.current = lenis;

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);

      animationFrame =
        requestAnimationFrame(raf);
    };

    animationFrame =
      requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 75,
      damping: 24,
      mass: 0.45,
    },
  );

  const characters = name.split("");

  const centerIndex = Math.floor(
    characters.length / 2,
  );

  /* ==================================================
     ROLE
  ================================================== */

  const roleOpacity = useTransform(
    smoothProgress,
    [0.18, 0.34],
    [0, 1],
  );

  const roleY = useTransform(
    smoothProgress,
    [0.18, 0.34],
    [24, 0],
  );

  const roleBlur = useTransform(
    smoothProgress,
    [0.18, 0.34],
    [5, 0],
  );

  const roleFilter = useTransform(
    roleBlur,
    (value) => `blur(${value}px)`,
  );

  /* ==================================================
     DESCRIPTION
  ================================================== */

  const descriptionOpacity =
    useTransform(
      smoothProgress,
      [0.30, 0.47],
      [0, 1],
    );

  const descriptionY = useTransform(
    smoothProgress,
    [0.30, 0.47],
    [22, 0],
  );

  const descriptionBlur =
    useTransform(
      smoothProgress,
      [0.30, 0.47],
      [5, 0],
    );

  const descriptionFilter =
    useTransform(
      descriptionBlur,
      (value) => `blur(${value}px)`,
    );

  /* ==================================================
     BUTTONS
  ================================================== */

  const buttonsOpacity =
    useTransform(
      smoothProgress,
      [0.43, 0.60],
      [0, 1],
    );

  const buttonsY = useTransform(
    smoothProgress,
    [0.43, 0.60],
    [20, 0],
  );

  const buttonsScale =
    useTransform(
      smoothProgress,
      [0.43, 0.60],
      [0.97, 1],
    );

  /* ==================================================
     PROJECT NAVIGATION
  ================================================== */

  const handleProjectsClick = (event) => {
    event.preventDefault();

    const projectsSection =
      document.getElementById("projects");

    if (!projectsSection) {
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(
        projectsSection,
        {
          offset: 0,
          duration: 1.4,
        },
      );
    } else {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* ==================================================
     SCROLL INDICATOR
  ================================================== */

  const indicatorOpacity =
    useTransform(
      smoothProgress,
      [0, 0.16],
      [0.45, 0],
    );

  /* ==================================================
     HERO EXIT
  ================================================== */

  const heroOpacity =
    useTransform(
      smoothProgress,
      [0.78, 1],
      [1, 0],
    );

  const heroY = useTransform(
    smoothProgress,
    [0.78, 1],
    [0, -45],
  );

  const heroScale =
    useTransform(
      smoothProgress,
      [0.78, 1],
      [1, 1.04],
    );

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
    >
      <m.div
        className="hero-sticky"
        style={{
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale,
        }}
      >
        <m.div
          className="scroll-indicator"
          style={{
            opacity:
              indicatorOpacity,
          }}
        >
          <span>
            Scroll to explore
          </span>

          <m.div
            className="scroll-line"
            animate={{
              scaleY: [1, 1.25, 1],
              opacity: [
                0.45,
                0.8,
                0.45,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </m.div>

        <div className="hero-content">
          <h1 className="hero-name">
            {characters.map(
              (char, index) => (
                <Character
                  key={`${char}-${index}`}
                  char={char}
                  index={index}
                  centerIndex={
                    centerIndex
                  }
                  scrollYProgress={
                    smoothProgress
                  }
                />
              ),
            )}
          </h1>

          <m.p
            className="hero-role"
            style={{
              opacity: roleOpacity,
              y: roleY,
              filter: roleFilter,
            }}
          >
            <span>
              Computer Science Student
            </span>

            <span className="role-divider">
              ·
            </span>

            <span>
              Java & Full-Stack Developer
            </span>
          </m.p>

          <m.p
            className="hero-description"
            style={{
              opacity:
                descriptionOpacity,
              y: descriptionY,
              filter:
                descriptionFilter,
            }}
          >
            I build software while
            strengthening my foundations
            in Java, Data Structures &
            Algorithms, backend
            development with Spring Boot,
            and modern full-stack web
            technologies including React
            and SQL.
          </m.p>

          <m.div
            className="hero-buttons"
            style={{
              opacity:
                buttonsOpacity,
              y: buttonsY,
              scale: buttonsScale,
            }}
          >
            <m.a
              href="#projects"
              className="hero-button"
              onClick={
                handleProjectsClick
              }
              whileHover={{
                y: -3,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              aria-label="View projects"
            >
              <span>
                VIEW PROJECTS
              </span>

              <span
                aria-hidden="true"
                className="button-arrow"
              >
                ↘
              </span>
            </m.a>

            <m.a
              href="https://github.com/RishavKamal"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
              whileHover={{
                y: -3,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              aria-label="Open Rishav Kamal's GitHub profile"
            >
              <FaGithub
                aria-hidden="true"
                className="button-icon"
              />

              <span>
                GITHUB
              </span>

              <span
                aria-hidden="true"
                className="button-arrow"
              >
                ↗
              </span>
            </m.a>
          </m.div>
        </div>

        <div className="hero-bottom-fade" />
      </m.div>
    </section>
  );
}

export default Hero;