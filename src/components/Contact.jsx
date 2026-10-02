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

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  const contactRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ==================================================
     MOBILE DETECTION
  ================================================== */

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

  /* ==================================================
     SCROLL PROGRESS
  ================================================== */

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: isMobile
      ? [
          "start 1.1",
          "end 0.55",
        ]
      : [
          "start 0.85",
          "end 0.3",
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

  /* ==================================================
     HEADER
  ================================================== */

  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.12],
    [0, 1],
  );

  const headerY = useTransform(
    smoothProgress,
    [0, 0.12],
    [18, 0],
  );

  /* ==================================================
     MAIN HEADING
  ================================================== */

  const headingOpacity = useTransform(
    smoothProgress,
    [0.08, 0.30],
    [0, 1],
  );

  const headingY = useTransform(
    smoothProgress,
    [0.08, 0.30],
    [55, 0],
  );

  const headingBlur = useTransform(
    smoothProgress,
    [0.08, 0.30],
    [10, 0],
  );

  const headingFilter = useTransform(
    headingBlur,
    (value) => `blur(${value}px)`,
  );

  /* ==================================================
     DESCRIPTION
  ================================================== */

  const descriptionOpacity =
    useTransform(
      smoothProgress,
      [0.30, 0.45],
      [0, 1],
    );

  const descriptionY = useTransform(
    smoothProgress,
    [0.30, 0.45],
    [28, 0],
  );

  /* ==================================================
     CONTACT DETAILS
  ================================================== */

  const detailsOpacity = useTransform(
    smoothProgress,
    [0.43, 0.58],
    [0, 1],
  );

  const detailsY = useTransform(
    smoothProgress,
    [0.43, 0.58],
    [25, 0],
  );

  /* ==================================================
     CTA
  ================================================== */

  const ctaOpacity = useTransform(
    smoothProgress,
    [0.40, 0.58],
    [0, 1],
  );

  const ctaY = useTransform(
    smoothProgress,
    [0.40, 0.58],
    [30, 0],
  );

  const ctaScale = useTransform(
    smoothProgress,
    [0.40, 0.58],
    [0.96, 1],
  );

  /* ==================================================
     FOOTER
  ================================================== */

  const footerOpacity = useTransform(
    smoothProgress,
    [0.72, 0.88],
    [0, 1],
  );

  const footerY = useTransform(
    smoothProgress,
    [0.72, 0.88],
    [20, 0],
  );

  return (
    <section
      id="contact"
      ref={contactRef}
      className="contact-section"
    >
      {/* ==================================================
          BACKGROUND NUMBER
      ================================================== */}

      <m.div
        className="contact-background-number"
        style={{
          opacity: useTransform(
            smoothProgress,
            [0, 0.25, 0.8, 1],
            [0, 0.035, 0.025, 0],
          ),
          y: useTransform(
            smoothProgress,
            [0, 1],
            [80, -80],
          ),
        }}
        aria-hidden="true"
      >
        04
      </m.div>

      <div className="contact-inner">

        {/* ==================================================
            HEADER
        ================================================== */}

        <m.div
          className="contact-top"
          style={{
            opacity: headerOpacity,
            y: headerY,
          }}
        >
          <div className="contact-top-left">
            <span className="contact-section-label">
              CONTACT
            </span>

            <span
              className="contact-section-slash"
              aria-hidden="true"
            >
              /
            </span>

            <span className="contact-section-context">
              LET&apos;S CONNECT
            </span>
          </div>

          <span className="contact-section-index">
            04
          </span>
        </m.div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div className="contact-main">

          {/* ==================================================
              HEADING
          ================================================== */}

          <m.h2
            className="contact-heading"
            style={{
              opacity: headingOpacity,
              y: headingY,
              filter: headingFilter,
            }}
          >
            <span>
              Let&apos;s build
            </span>

            <span className="contact-heading-offset">
              something
            </span>

            <span className="contact-heading-last">
              useful.
            </span>
          </m.h2>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <m.div
            className="contact-description"
            style={{
              opacity: descriptionOpacity,
              y: descriptionY,
            }}
          >
            <p>
              I&apos;m currently looking for job
              opportunities and software engineering
              internships, while also being open to
              client website projects.
            </p>

            <span>
              Open to opportunities where I can learn,
              build, and contribute through software
              development.
            </span>
          </m.div>

          {/* ==================================================
              DETAILS
          ================================================== */}

          <m.div
            className="contact-details"
            style={{
              opacity: detailsOpacity,
              y: detailsY,
            }}
          >

            {/* EMAIL */}

            <div className="contact-detail">
              <span className="contact-detail-label">
                EMAIL
              </span>

              <a
                href="mailto:rishavkamalbg821@gmail.com"
                className="contact-email"
                aria-label="Email Rishav Kamal"
              >
                rishavkamalbg821@gmail.com

                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* SOCIAL */}

            <div className="contact-detail">
              <span className="contact-detail-label">
                SOCIAL
              </span>

              <div className="contact-socials">

                <a
                  href="https://github.com/RishavKamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Rishav Kamal's GitHub profile"
                >
                  <FaGithub
                    aria-hidden="true"
                  />

                  <span>
                    GitHub
                  </span>

                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/rishavkamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Rishav Kamal's LinkedIn profile"
                >
                  <FaLinkedinIn
                    aria-hidden="true"
                  />

                  <span>
                    LinkedIn
                  </span>

                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                  />
                </a>

              </div>
            </div>
          </m.div>

          {/* ==================================================
              CTA
          ================================================== */}

          <m.div
            className="contact-cta-wrap"
            style={{
              opacity: ctaOpacity,
              y: ctaY,
              scale: ctaScale,
            }}
          >
            <a
              href="mailto:rishavkamalbg821@gmail.com"
              className="contact-cta"
              aria-label="Email Rishav Kamal"
            >
              <span>
                Get in touch
              </span>

              <span
                className="contact-cta-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </m.div>

        </div>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <m.div
          className="contact-footer"
          style={{
            opacity: footerOpacity,
            y: footerY,
          }}
        >
          <div className="contact-footer-left">
            <span>
              AVAILABLE FOR WORK
            </span>

            <span
              className="contact-footer-dot"
              aria-hidden="true"
            >
              ●
            </span>

            <span>
              INDIA
            </span>
          </div>

          <div className="contact-footer-right">
            <span>
              © 2026 RISHAV KAMAL
            </span>

            <span>
              BUILT WITH REACT
            </span>
          </div>
        </m.div>

      </div>
    </section>
  );
}

export default Contact;