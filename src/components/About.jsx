import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

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
    [0.08, 1],
  );

  const y = useTransform(
    progress,
    [start, end],
    [48, 0],
  );

  const blur = useTransform(
    progress,
    [start, end],
    [10, 0],
  );

  const filter = useTransform(
    blur,
    (value) => `blur(${value}px)`,
  );

  return (
    <motion.span
      className="about-word"
      style={{
        opacity,
        y,
        filter,
      }}
    >
      {children}
    </motion.span>
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
    [start, start + 0.07],
    [0, 1],
  );

  const y = useTransform(
    progress,
    [start, start + 0.07],
    [22, 0],
  );

  const blur = useTransform(
    progress,
    [start, start + 0.07],
    [5, 0],
  );

  const filter = useTransform(
    blur,
    (value) => `blur(${value}px)`,
  );

  return (
    <motion.div
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
    </motion.div>
  );
}

function About() {
  const aboutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px)",
    );

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
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

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: isMobile
      ? [
          "start 1.5",
          "end 0.45",
        ]
      : [
          "start 0.9",
          "end 0.25",
        ],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: isMobile ? 120 : 80,
      damping: isMobile ? 30 : 25,
      mass: isMobile ? 0.35 : 0.5,
    },
  );

  const animationProgress = useTransform(
    smoothProgress,
    isMobile
      ? [0.02, 0.92]
      : [0, 1],
    [0, 1],
  );

  const backgroundNumberY =
    useTransform(
      animationProgress,
      [0, 1],
      [90, -90],
    );

  const backgroundNumberScale =
    useTransform(
      animationProgress,
      [0, 0.5, 1],
      [0.96, 1, 1.04],
    );

  const backgroundNumberOpacity =
    useTransform(
      animationProgress,
      [0, 0.22, 0.7, 1],
      [0, 0.035, 0.025, 0],
    );

  const markerOpacity =
    useTransform(
      animationProgress,
      [0, 0.12, 0.82, 1],
      [0, 1, 1, 0],
    );

  const markerY = useTransform(
    animationProgress,
    [0, 1],
    [20, -20],
  );

  const headerOpacity =
    useTransform(
      animationProgress,
      [0, 0.12],
      [0, 1],
    );

  const headerY = useTransform(
    animationProgress,
    [0, 0.12],
    [18, 0],
  );

  const statementX = useTransform(
    animationProgress,
    [0, 0.5],
    [35, 0],
  );

  const ruleScale = useTransform(
    animationProgress,
    [0.18, 0.36],
    [0, 1],
  );

  const descriptionOpacity =
    useTransform(
      animationProgress,
      [0.36, 0.52],
      [0, 1],
    );

  const descriptionY = useTransform(
    animationProgress,
    [0.36, 0.52],
    [38, 0],
  );

  const descriptionBlur =
    useTransform(
      animationProgress,
      [0.36, 0.52],
      [7, 0],
    );

  const descriptionFilter =
    useTransform(
      descriptionBlur,
      (value) => `blur(${value}px)`,
    );

  const focusOpacity = useTransform(
    animationProgress,
    [0.46, 0.58],
    [0, 1],
  );

  const focusY = useTransform(
    animationProgress,
    [0.46, 0.58],
    [34, 0],
  );

  const focusLineScale =
    useTransform(
      animationProgress,
      [0.48, 0.60],
      [0, 1],
    );

  const closingOpacity =
    useTransform(
      animationProgress,
      [0.68, 0.82],
      [0, 1],
    );

  const closingY = useTransform(
    animationProgress,
    [0.68, 0.82],
    [30, 0],
  );

  const closingBlur =
    useTransform(
      animationProgress,
      [0.68, 0.82],
      [6, 0],
    );

  const closingFilter =
    useTransform(
      closingBlur,
      (value) => `blur(${value}px)`,
    );

  return (
    <section
      id="about"
      ref={aboutRef}
      className="about-section"
    >
      <motion.div
        className="about-background-number"
        style={{
          y: backgroundNumberY,
          scale: backgroundNumberScale,
          opacity: backgroundNumberOpacity,
        }}
      >
        01
      </motion.div>

      <motion.div
        className="about-reading-marker"
        style={{
          opacity: markerOpacity,
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
      </motion.div>

      <div className="about-progress-track">
        <motion.div
          className="about-progress-bar"
          style={{
            scaleY: animationProgress,
          }}
        />
      </div>

      <div className="about-inner">
        <motion.div
          className="about-top"
          style={{
            opacity: headerOpacity,
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
        </motion.div>

        <motion.h2
          className="about-statement"
          style={{
            x: statementX,
          }}
        >
          <span className="statement-line">
            <AboutWord
              progress={animationProgress}
              start={0.04}
              end={0.20}
            >
              Building
            </AboutWord>
          </span>

          <span className="statement-line statement-offset">
            <AboutWord
              progress={animationProgress}
              start={0.10}
              end={0.27}
            >
              strong
            </AboutWord>
          </span>

          <span className="statement-line statement-last">
            <AboutWord
              progress={animationProgress}
              start={0.16}
              end={0.34}
            >
              foundations
            </AboutWord>

            <span className="about-period">
              .
            </span>
          </span>
        </motion.h2>

        <motion.div
          className="about-rule"
          style={{
            scaleX: ruleScale,
          }}
        />

        <div className="about-lower">
          <motion.div
            className="about-description"
            style={{
              opacity: descriptionOpacity,
              y: descriptionY,
              filter: descriptionFilter,
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
          </motion.div>

          <motion.div
            className="about-focus"
            style={{
              opacity: focusOpacity,
              y: focusY,
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

            <motion.div
              className="focus-line"
              style={{
                scaleX: focusLineScale,
              }}
            />

            <div className="focus-list">
              <FocusItem
                number="01"
                name="Java"
                progress={animationProgress}
                start={0.44}
              />

              <FocusItem
                number="02"
                name="Data Structures & Algorithms"
                progress={animationProgress}
                start={0.46}
              />

              <FocusItem
                number="03"
                name="Spring Boot"
                progress={animationProgress}
                start={0.48}
              />

              <FocusItem
                number="04"
                name="React"
                progress={animationProgress}
                start={0.50}
              />

              <FocusItem
                number="05"
                name="SQL"
                progress={animationProgress}
                start={0.52}
              />

              <FocusItem
                number="06"
                name="Node.js & Express"
                progress={animationProgress}
                start={0.54}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-bottom"
          style={{
            opacity: descriptionOpacity,
          }}
        >
          <span className="bottom-label">
            CURRENTLY BUILDING
          </span>

          <span className="bottom-text">
            client projects · learning ·
            experimenting
          </span>
        </motion.div>

        <motion.div
          className="about-closing"
          style={{
            opacity: closingOpacity,
            y: closingY,
            filter: closingFilter,
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
        </motion.div>
      </div>
    </section>
  );
}

export default About;