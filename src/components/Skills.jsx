import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Java",
  "Data Structures & Algorithms",
  "Spring Boot",
  "React",
  "SQL",
  "Git & GitHub",
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
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Skills
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technologies I'm currently focused on.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              The tools I'm using to strengthen my fundamentals and build
              real software.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;