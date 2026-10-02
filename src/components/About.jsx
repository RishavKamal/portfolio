import {
  m,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./About.css";

function AboutWord({
  children,
  progress,
  start,
  end,
}) {
  const opacity = useTransform(
    progress,
    [start, end],
    [0.72, 1],
  );

  const y = useTransform(
    progress,
    [start, end],
    [32, 0],
  );

  const blur = useTransform(
    progress,
    [start, end],
    [6, 0],
  );

  const filter = useTransform(
    blur,
    (value) => `blur(${value}px)`,
  );

  return (
    <m.span
      className="about-word"
      style={{
        opacity,
        y,
        filter,
      }}
    >
      {children}
    </m.span>
  );
}

function FocusItem({
  number,
  name,
  progress,
  start,
}) {
  const opacity = useTransform(
    progress,
    [start, start + 0.045],
    [0, 1],
  );

  const y = useTransform(
    progress,
    [start, start + 0.045],
    [18, 0],
  );

  const blur = useTransform(
    progress,
    [start, start + 0.045],
    [4, 0],
  );

  const filter = useTransform(
    blur,
    (value) => `blur(${value}px)`,
  );

  return (
    <m.div
      className="focus-item"
      style={{
        opacity,
        y,
        filter,
      }}
    >
      <span className="focus-number">
        {number}
      </span>

      <span className="focus-name">
        {name}
      </span>

      <span className="focus-arrow">
        ↗
      </span>

      <span className="focus-hover-line" />
    </m.div>
  );
}

function About() {
  const aboutRef = useRef(null);

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)",
      );

    const handleChange = () => {
      setIsMobile(
        mediaQuery.matches,
      );
    };

    handleChange();

    mediaQuery.addEventListener(
      "change",
      handleChange,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange,
      );
    };
  }, []);

  /*
   * The About section now reaches its useful
   * animation range earlier in the viewport.
   *
   * This prevents the lower content from waiting
   * until the user has almost passed the section.
   */

  const { scrollYProgress } =
    useScroll({
      target: aboutRef,
      offset: isMobile
        ? [
            "start 1.25",
            "end 0.55",
          ]
        : [
            "start 0.82",
            "end 0.30",
          ],
    });

  const smoothProgress =
    useSpring(
      scrollYProgress,
      {
        stiffness:
          isMobile ? 125 : 90,
        damping:
          isMobile ? 30 : 27,
        mass:
          isMobile ? 0.35 : 0.45,
      },
    );

  const animationProgress =
    useTransform(
      smoothProgress,
      isMobile
        ? [0.02, 0.92]
        : [0, 1],
      [0, 1],
    );

  /*
   * --------------------------------
   * BACKGROUND
   * --------------------------------
   */

  const backgroundNumberY =
    useTransform(
      animationProgress,
      [0, 1],
      [70, -70],
    );

  const backgroundNumberScale =
    useTransform(
      animationProgress,
      [0, 0.5, 1],
      [0.97, 1, 1.03],
    );

  const backgroundNumberOpacity =
    useTransform(
      animationProgress,
      [0, 0.18, 0.68, 1],
      [0, 0.035, 0.025, 0],
    );

  /*
   * --------------------------------
   * SIDE READING MARKER
   * --------------------------------
   */

  const markerOpacity =
    useTransform(
      animationProgress,
      [0, 0.10, 0.78, 1],
      [0, 1, 1, 0],
    );

  const markerY =
    useTransform(
      animationProgress,
      [0, 1],
      [16, -16],
    );

  /*
   * --------------------------------
   * HEADER
   * --------------------------------
   */

  const headerOpacity =
    useTransform(
      animationProgress,
      [0, 0.10],
      [0, 1],
    );

  const headerY =
    useTransform(
      animationProgress,
      [0, 0.10],
      [14, 0],
    );

  /*
   * --------------------------------
   * MAIN STATEMENT
   * --------------------------------
   */

  const statementX =
    useTransform(
      animationProgress,
      [0, 0.42],
      [28, 0],
    );

  /*
   * --------------------------------
   * DIVIDER
   * --------------------------------
   */

  const ruleScale =
    useTransform(
      animationProgress,
      [0.15, 0.28],
      [0, 1],
    );

  /*
   * --------------------------------
   * LOWER CONTENT
   *
   * Both columns deliberately enter
   * during the middle of the section.
   * --------------------------------
   */

  const lowerOpacity =
    useTransform(
      animationProgress,
      [0.30, 0.45],
      [0, 1],
    );

  const lowerY =
    useTransform(
      animationProgress,
      [0.30, 0.45],
      [34, 0],
    );

  const lowerBlur =
    useTransform(
      animationProgress,
      [0.30, 0.45],
      [4, 0],
    );

  const lowerFilter =
    useTransform(
      lowerBlur,
      (value) =>
        `blur(${value}px)`,
    );

  /*
   * --------------------------------
   * RIGHT SIDE LINE
   * --------------------------------
   */

  const focusLineScale =
    useTransform(
      animationProgress,
      [0.34, 0.44],
      [0, 1],
    );

  /*
   * --------------------------------
   * CURRENTLY BUILDING
   * --------------------------------
   */

  const bottomOpacity =
    useTransform(
      animationProgress,
      [0.52, 0.62],
      [0, 1],
    );

  const bottomY =
    useTransform(
      animationProgress,
      [0.52, 0.62],
      [18, 0],
    );

  /*
   * --------------------------------
   * CLOSING
   * --------------------------------
   */

  const closingOpacity =
    useTransform(
      animationProgress,
      [0.68, 0.80],
      [0, 1],
    );

  const closingY =
    useTransform(
      animationProgress,
      [0.68, 0.80],
      [24, 0],
    );

  const closingBlur =
    useTransform(
      animationProgress,
      [0.68, 0.80],
      [3, 0],
    );

  const closingFilter =
    useTransform(
      closingBlur,
      (value) =>
        `blur(${value}px)`,
    );

  return (
    <section
      id="about"
      ref={aboutRef}
      className="about-section"
    >
      <m.div
        className="about-background-number"
        style={{
          y: backgroundNumberY,
          scale:
            backgroundNumberScale,
          opacity:
            backgroundNumberOpacity,
        }}
      >
        01
      </m.div>

      <m.div
        className="about-reading-marker"
        style={{
          opacity:
            markerOpacity,
          y: markerY,
        }}
      >
        <span className="marker-number">
          01
        </span>

        <span className="marker-line" />

        <span className="marker-label">
          ABOUT
        </span>
      </m.div>

      <div className="about-progress-track">
        <m.div
          className="about-progress-bar"
          style={{
            scaleY:
              animationProgress,
          }}
        />
      </div>

      <div className="about-inner">

        {/* HEADER */}

        <m.div
          className="about-top"
          style={{
            opacity:
              headerOpacity,
            y: headerY,
          }}
        >
          <div className="about-top-left">
            <span className="section-label">
              ABOUT
            </span>

            <span className="section-slash">
              /
            </span>

            <span className="section-context">
              PROFILE
            </span>
          </div>

          <span className="section-index">
            01
          </span>
        </m.div>

        {/* MAIN STATEMENT */}

        <m.h2
          className="about-statement"
          style={{
            x: statementX,
          }}
        >
          <span className="statement-line">
            <AboutWord
              progress={
                animationProgress
              }
              start={0.03}
              end={0.16}
            >
              Building
            </AboutWord>
          </span>

          <span className="statement-line statement-offset">
            <AboutWord
              progress={
                animationProgress
              }
              start={0.08}
              end={0.22}
            >
              strong
            </AboutWord>
          </span>

          <span className="statement-line statement-last">
            <AboutWord
              progress={
                animationProgress
              }
              start={0.13}
              end={0.28}
            >
              foundations
            </AboutWord>

            <span className="about-period">
              .
            </span>
          </span>
        </m.h2>

        {/* DIVIDER */}

        <m.div
          className="about-rule"
          style={{
            scaleX: ruleScale,
          }}
        />

        {/* LOWER TWO-COLUMN CONTENT */}

        <div className="about-lower">

          {/* LEFT SIDE */}

          <m.div
            className="about-description"
            style={{
              opacity:
                lowerOpacity,
              y: lowerY,
              filter:
                lowerFilter,
            }}
          >
            <span className="about-small-label">
              THE APPROACH
            </span>

            <div className="about-copy">
              <p className="about-lead">
                I&apos;m a 20-year-old
                Computer Science student
                interested in software
                development, working toward
                becoming a strong software
                engineer with a focus on Java
                and backend development.
              </p>

              <p>
                I became interested in
                computers and software
                development from childhood,
                growing up in an environment
                that gave me the opportunity
                to use computers from an early
                age.
              </p>

              <p>
                My approach to learning is
                simple: build strong
                fundamentals, practice
                consistently, and apply what I
                learn through real-world
                projects.
              </p>

              <p>
                I&apos;m currently learning Java,
                Data Structures &amp;
                Algorithms, Spring Boot,
                React, SQL, and Node.js with
                Express. I build full-stack
                websites, REST APIs, React
                interfaces, and
                database-backed applications.
              </p>
            </div>

            <div className="about-meta">
              <span>
                BASED IN INDIA
              </span>

              <span>
                COMPUTER SCIENCE
              </span>
            </div>
          </m.div>

          {/* RIGHT SIDE */}

          <m.div
            className="about-focus"
            style={{
              opacity:
                lowerOpacity,
              y: lowerY,
              filter:
                lowerFilter,
            }}
          >
            <div className="focus-heading">
              <span className="about-small-label">
                CURRENT FOCUS
              </span>

              <span className="focus-count">
                06
              </span>
            </div>

            <m.div
              className="focus-line"
              style={{
                scaleX:
                  focusLineScale,
              }}
            />

            <div className="focus-list">
              <FocusItem
                number="01"
                name="Java"
                progress={
                  animationProgress
                }
                start={0.38}
              />

              <FocusItem
                number="02"
                name="Data Structures & Algorithms"
                progress={
                  animationProgress
                }
                start={0.405}
              />

              <FocusItem
                number="03"
                name="Spring Boot"
                progress={
                  animationProgress
                }
                start={0.43}
              />

              <FocusItem
                number="04"
                name="React"
                progress={
                  animationProgress
                }
                start={0.455}
              />

              <FocusItem
                number="05"
                name="SQL"
                progress={
                  animationProgress
                }
                start={0.48}
              />

              <FocusItem
                number="06"
                name="Node.js & Express"
                progress={
                  animationProgress
                }
                start={0.505}
              />
            </div>
          </m.div>
        </div>

        {/* CURRENTLY BUILDING */}

        <m.div
          className="about-bottom"
          style={{
            opacity:
              bottomOpacity,
            y: bottomY,
          }}
        >
          <span className="bottom-label">
            CURRENTLY BUILDING
          </span>

          <span className="bottom-text">
            client projects · learning ·
            experimenting
          </span>
        </m.div>

        {/* CLOSING */}

        <m.div
          className="about-closing"
          style={{
            opacity:
              closingOpacity,
            y: closingY,
            filter:
              closingFilter,
          }}
        >
          <span>
            Learning through fundamentals.
          </span>

          <span>
            Building through practice.
          </span>

          <span>
            Improving through real-world
            projects.
          </span>
        </m.div>

      </div>
    </section>
  );
}

export default About;