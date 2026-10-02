import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Behind the Code",
    description:
      "A developer-focused blogging platform where developers can create and publish programming articles, document their learning, and interact through likes, comments, bookmarks, and sharing.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],
    status: "IN PROGRESS",
    github:
      "https://github.com/RishavKamal/behind-the-code",
    live:
      "https://blog.rishavkamal.com",
  },

  {
    number: "02",
    title: "IDE",
    description:
      "A lightweight development environment designed around a simple and focused coding experience.",
    stack: [
      "React",
      "Node.js",
      "Monaco",
    ],
    status: "STARTING SOON",
    github: null,
    live: null,
  },
];

/* =========================================================
   DESKTOP LIVE PREVIEW
   ========================================================= */

function DesktopLivePreview({ project }) {
  const containerRef = useRef(null);

  const [scale, setScale] = useState(1);

  /*
   * The source website is designed as a desktop website.
   *
   * 1280px gives us a realistic desktop viewport while
   * avoiding the extra empty area visible with 1440px.
   */
  const DESKTOP_WIDTH = 1280;
  const DESKTOP_HEIGHT = 800;

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    const updateScale = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      if (!width || !height) {
        return;
      }

      const scaleX =
        width / DESKTOP_WIDTH;

      const scaleY =
        height / DESKTOP_HEIGHT;

      setScale(
        Math.min(
          scaleX,
          scaleY,
        ),
      );
    };

    updateScale();

    const resizeObserver =
      new ResizeObserver(
        updateScale,
      );

    resizeObserver.observe(
      container,
    );

    window.addEventListener(
      "resize",
      updateScale,
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateScale,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="preview-browser-screen"
    >
      <div
        className="desktop-preview-stage"
        style={{
          width: `${DESKTOP_WIDTH}px`,
          height: `${DESKTOP_HEIGHT}px`,
          transform:
            `scale(${scale})`,
        }}
      >
        <iframe
          src={project.live}
          title={`${project.title} desktop live preview`}
          loading="eager"
          allow="fullscreen"
          tabIndex="-1"
        />
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT PREVIEW
   ========================================================= */

function ProjectPreview({ project }) {
  if (!project.live) {
    return (
      <div className="project-preview project-preview-upcoming">
        <div className="preview-grid" />

        <div className="upcoming-content">
          <span className="upcoming-number">
            {project.number}
          </span>

          <span className="upcoming-kicker">
            DEVELOPMENT ENVIRONMENT
          </span>

          <h4>
            IDE
          </h4>

          <span className="upcoming-status">
            STARTING SOON
          </span>
        </div>

        <div className="preview-corner preview-corner-tl" />

        <div className="preview-corner preview-corner-br" />

        <span className="preview-hint preview-hint-dark">
          IN DEVELOPMENT
        </span>
      </div>
    );
  }

  return (
    <div className="project-preview">
      <div className="preview-browser">
        <div className="preview-browser-bar">
          <div className="preview-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="preview-url">
            blog.rishavkamal.com
          </div>

          <span className="preview-browser-number">
            {project.number}
          </span>
        </div>

        <DesktopLivePreview
          project={project}
        />

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="preview-live-overlay"
          aria-label={`Open live preview of ${project.title}`}
        >
          <span>
            LIVE PREVIEW
          </span>

          <span className="preview-live-arrow">
            <FaArrowRight
              aria-hidden="true"
            />
          </span>
        </a>

        <div className="preview-hint">
          HOVER FOR LIVE PREVIEW
        </div>
      </div>

      <div className="preview-corner preview-corner-tl" />

      <div className="preview-corner preview-corner-br" />
    </div>
  );
}

/* =========================================================
   PROJECT ROW
   ========================================================= */

function ProjectRow({
  project,
  index,
  progress,
}) {
  const start =
    0.07 + index * 0.17;

  const end =
    start + 0.20;

  const opacity =
    useTransform(
      progress,
      [start, end],
      [0, 1],
    );

  const y =
    useTransform(
      progress,
      [start, end],
      [65, 0],
    );

  const blur =
    useTransform(
      progress,
      [start, end],
      [10, 0],
    );

  const filter =
    useTransform(
      blur,
      (value) =>
        `blur(${value}px)`,
    );

  return (
    <motion.article
      className="project-row"
      style={{
        opacity,
        y,
        filter,
      }}
    >
      {/* PROJECT NUMBER */}

      <div className="project-index">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-index-rule" />

        <span className="project-index-label">
          PROJECT
        </span>
      </div>

      {/* PROJECT INFORMATION */}

      <div className="project-information">
        <div className="project-heading">
          <div className="project-title-area">
            <h3>
              {project.title}
            </h3>

            <div
              className={`project-status ${
                project.status ===
                "IN PROGRESS"
                  ? "status-active"
                  : "status-upcoming"
              }`}
            >
              <span className="status-dot" />

              <span>
                {project.status}
              </span>
            </div>
          </div>

          <span className="project-counter">
            {project.number}
          </span>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-footer">
          <div className="project-stack">
            {project.stack.map(
              (technology) => (
                <span
                  key={technology}
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="project-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
                aria-label={`${project.title} GitHub repository`}
              >
                <FaGithub
                  aria-hidden="true"
                />

                <span>
                  GITHUB
                </span>
              </a>
            )}

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-open"
                aria-label={`Open ${project.title}`}
              >
                <span>
                  OPEN PROJECT
                </span>

                <span className="project-open-arrow">
                  <FaArrowRight
                    aria-hidden="true"
                  />
                </span>
              </a>
            ) : (
              <span className="project-open project-open-disabled">
                <span>
                  COMING SOON
                </span>

                <span className="project-open-arrow">
                  <FaArrowRight
                    aria-hidden="true"
                  />
                </span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PROJECT PREVIEW */}

      <ProjectPreview
        project={project}
      />

      {/* ACTIVE LINE */}

      <span className="project-active-line" />
    </motion.article>
  );
}

/* =========================================================
   PROJECTS SECTION
   ========================================================= */

function Projects() {
  const projectsRef =
    useRef(null);

  const {
    scrollYProgress,
  } = useScroll({
    target: projectsRef,

    offset: [
      "start 0.9",
      "end 0.3",
    ],
  });

  const smoothProgress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
      },
    );

  /* =======================================================
     HEADER ANIMATION
     ======================================================= */

  const introOpacity =
    useTransform(
      smoothProgress,
      [0, 0.18],
      [0, 1],
    );

  const introY =
    useTransform(
      smoothProgress,
      [0, 0.18],
      [45, 0],
    );

  const introBlur =
    useTransform(
      smoothProgress,
      [0, 0.18],
      [8, 0],
    );

  const introFilter =
    useTransform(
      introBlur,
      (value) =>
        `blur(${value}px)`,
    );

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="projects-section"
    >
      {/* BACKGROUND NUMBER */}

      <div className="projects-bg-number">
        02
      </div>

      <div className="projects-inner">
        {/* =================================================
            HEADER
            ================================================= */}

        <motion.header
          className="projects-header"
          style={{
            opacity:
              introOpacity,

            y:
              introY,

            filter:
              introFilter,
          }}
        >
          <div className="projects-header-main">
            <div className="projects-label">
              <span>
                02
              </span>

              <span className="projects-label-line" />

              <span>
                SELECTED WORK
              </span>
            </div>

            <h2>
              Things I build
              <span>.</span>
            </h2>
          </div>

          <div className="projects-header-side">
            <span className="header-side-label">
              PROJECTS
            </span>

            <p>
              A selection of projects
              where ideas become
              working software.
            </p>

            <span className="header-side-line" />
          </div>
        </motion.header>

        {/* =================================================
            PROJECT LIST
            ================================================= */}

        <div className="projects-list">
          {projects.map(
            (project, index) => (
              <ProjectRow
                key={project.number}
                project={project}
                index={index}
                progress={
                  smoothProgress
                }
              />
            ),
          )}
        </div>

        {/* =================================================
            FOOTER
            ================================================= */}

        <footer className="projects-footer">
          <span>
            MORE PROJECTS
          </span>

          <span className="footer-line" />

          <span>
            BUILD · LEARN · ITERATE
          </span>
        </footer>
      </div>
    </section>
  );
}

export default Projects;