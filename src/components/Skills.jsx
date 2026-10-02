import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaJava,
  FaReact,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiN8N,
} from "react-icons/si";

import "./Skills.css";

const skillGroups = [
  {
    category: "CORE",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        description:
          "My primary language for strengthening programming fundamentals and learning Data Structures & Algorithms.",
      },
      {
        name: "Data Structures & Algorithms",
        icon: FaCode,
        description:
          "Currently practicing arrays, strings, recursion, heaps, and hashing to build a stronger problem-solving foundation.",
      },
    ],
  },

  {
    category: "DEVELOPMENT",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        description:
          "Currently learning Spring Boot to build backend services and full-stack applications with Java.",
      },
      {
        name: "React",
        icon: FaReact,
        description:
          "Used to build complete web interfaces and full-stack projects while strengthening my frontend development skills.",
      },
      {
        name: "SQL",
        icon: FaDatabase,
        description:
          "Currently learning SQL for working with relational data and database-backed applications.",
      },
    ],
  },

  {
    category: "TOOLS & AUTOMATION",
    skills: [
      {
        name: "Git & GitHub",
        icon: FaGithub,
        description:
          "Used for repositories, commits, branches, pull and push workflows, collaboration, and deployment.",
      },
      {
        name: "Docker",
        icon: FaDocker,
        description:
          "Used to run n8n locally in a containerized development environment.",
      },
      {
        name: "n8n",
        icon: SiN8N,
        description:
          "Used to build workflow automations for academic management and student finance workflows.",
      },
    ],
  },
];

function Skills() {
  const skillsRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const allSkills = useMemo(
    () =>
      skillGroups.flatMap((group) =>
        group.skills.map((skill) => ({
          ...skill,
          category: group.category,
        })),
      ),
    [],
  );

  const activeSkill = allSkills[activeIndex];

  const ActiveIcon = activeSkill.icon;

  /* ==================================================
     AUTOMATIC SKILL ROTATION
  ================================================== */

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex(
        (current) =>
          (current + 1) % allSkills.length,
      );
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    activeIndex,
    timerResetKey,
    allSkills.length,
  ]);

  /* ==================================================
     MANUAL SELECTION
  ================================================== */

  const handleSkillClick = (index) => {
    setActiveIndex(index);

    setTimerResetKey(
      (current) => current + 1,
    );
  };

  /* ==================================================
     SCROLL PROGRESS
  ================================================== */

  const {
    scrollYProgress,
  } = useScroll({
    target: skillsRef,
    offset: [
      "start 0.9",
      "end 0.25",
    ],
  });

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 80,
      damping: 25,
      mass: 0.5,
    },
  );

  /* ==================================================
     HEADER ANIMATION
  ================================================== */

  const headingOpacity = useTransform(
    smoothProgress,
    [0, 0.18],
    [0, 1],
  );

  const headingY = useTransform(
    smoothProgress,
    [0, 0.18],
    [36, 0],
  );

  const headingBlur = useTransform(
    smoothProgress,
    [0, 0.18],
    [7, 0],
  );

  const headingFilter = useTransform(
    headingBlur,
    (value) => `blur(${value}px)`,
  );

  /* ==================================================
     CONTENT ANIMATION
  ================================================== */

  const contentOpacity = useTransform(
    smoothProgress,
    [0.08, 0.28],
    [0, 1],
  );

  const contentY = useTransform(
    smoothProgress,
    [0.08, 0.28],
    [40, 0],
  );

  const contentBlur = useTransform(
    smoothProgress,
    [0.08, 0.28],
    [6, 0],
  );

  const contentFilter = useTransform(
    contentBlur,
    (value) => `blur(${value}px)`,
  );

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="skills-loop-section"
    >
      <span
        className="skills-loop-background-number"
        aria-hidden="true"
      >
        03
      </span>

      <div className="skills-loop-inner">

        {/* HEADER */}

        <header className="skills-loop-header">
          <div className="skills-loop-label">
            <span className="skills-loop-label-line" />

            <span>SKILLS</span>

            <span className="skills-loop-label-index">
              03
            </span>
          </div>

          <motion.h2
            style={{
              opacity: headingOpacity,
              y: headingY,
              filter: headingFilter,
            }}
          >
            What I work with.
          </motion.h2>
        </header>

        {/* MAIN CONTENT */}

        <motion.div
          className="skills-loop-content"
          style={{
            opacity: contentOpacity,
            y: contentY,
            filter: contentFilter,
          }}
        >

          {/* TOP META */}

          <div className="skills-loop-topline">
            <span>
              TECHNOLOGY STACK
            </span>

            <span className="skills-loop-counter">
              <strong>
                {String(activeIndex + 1).padStart(
                  2,
                  "0",
                )}
              </strong>

              <span>/</span>

              <span>
                {String(allSkills.length).padStart(
                  2,
                  "0",
                )}
              </span>
            </span>
          </div>

          {/* FEATURE */}

          <div className="skills-loop-main">

            {/* ACTIVE SKILL */}

            <div className="skills-loop-stage">
              <AnimatePresence
                mode="popLayout"
                initial={false}
              >
                <motion.div
                  key={activeIndex}
                  className="skills-loop-active-wrapper"

                  initial={{
                    opacity: 0,
                    y: "22%",
                    filter: "blur(4px)",
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}

                  exit={{
                    opacity: 0,
                    y: "-22%",
                    filter: "blur(4px)",
                  }}

                  transition={{
                    duration: 0.42,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <div className="skills-loop-icon-wrapper">
                    <ActiveIcon
                      className="skills-loop-icon"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="skills-loop-active-content">
                    <span className="skills-loop-active-category">
                      {activeSkill.category}
                    </span>

                    <h3 className="skills-loop-active">
                      {activeSkill.name}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DESCRIPTION */}

            <div className="skills-loop-description">
              <span className="skills-loop-description-index">
                {String(activeIndex + 1).padStart(
                  2,
                  "0",
                )}
              </span>

              <span className="skills-loop-line" />

              <p>
                {activeSkill.description}
              </p>

              <span className="skills-loop-description-note">
                Selected technology
              </span>
            </div>
          </div>

          {/* SKILL INDEX */}

          <div className="skills-loop-index">
            {allSkills.map(
              (skill, index) => (
                <button
                  key={skill.name}
                  type="button"
                  className={`skills-loop-index-item ${
                    index === activeIndex
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleSkillClick(index)
                  }
                  aria-label={`Show ${skill.name}`}
                  aria-pressed={
                    index === activeIndex
                  }
                >
                  <span className="skills-loop-index-number">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="skills-loop-index-name">
                    {skill.name}
                  </span>

                  <span
                    className="skills-loop-index-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </button>
              ),
            )}
          </div>

          {/* FOOTER */}

          <div className="skills-loop-footer">
            <span>
              Java · DSA · Full-Stack
            </span>

            <span>
              Click a technology to explore
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Skills;