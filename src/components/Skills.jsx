import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SiSpringboot, SiReact, SiGithub } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { LuCode, LuDatabase } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Data Structures & Algorithms",
    icon: LuCode,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "SQL",
    icon: LuDatabase,
  },
  {
    name: "Git & GitHub",
    icon: SiGithub,
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const content = sectionRef.current.querySelector(".skills-content");

      if (prefersReducedMotion) {
        gsap.set(content, {
          scale: 1,
          opacity: 1,
        });

        return;
      }

      gsap.set(content, {
        scale: 0.92,
        opacity: 0.6,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(content, {
        scale: 1,
        opacity: 1,
        duration: 1,
      });

      timeline.to(content, {
        scale: 0.92,
        opacity: 0.6,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-24 min-h-[calc(100vh-81px)]"
    >
      <div className="skills-content flex min-h-[calc(100vh-81px)] items-center">
        <div className="portfolio-container py-24 sm:py-32">
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-(--text-faint)">
              Skills
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-(--text) sm:text-4xl">
              Technologies I'm currently focused on.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-(--text-soft) sm:text-lg">
              The tools I'm using to strengthen my fundamentals and build real
              software.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center gap-2.5 rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm font-medium text-(--text-muted) transition-all duration-200 hover:border-(--border-hover) hover:bg-(--surface-hover) hover:text-(--text)"
              >
                <Icon
                  aria-hidden="true"
                  className="text-lg text-(--text-soft) transition-colors duration-200 group-hover:text-(--accent)"
                />

                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;