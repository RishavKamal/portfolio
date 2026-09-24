import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const content = sectionRef.current.querySelector(".about-content");

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
      id="about"
      className="scroll-mt-24 min-h-[calc(100vh-81px)]"
    >
      <div className="about-content flex min-h-[calc(100vh-81px)] items-center">
        <div className="portfolio-container py-24 sm:py-32">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-(--text-faint)">
              About
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-(--text) sm:text-4xl">
              Learning, building, and getting better every day.
            </h2>
          </div>

          {/* Content */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main text */}
            <div className="max-w-2xl space-y-6 text-base leading-8 text-(--text-soft) sm:text-lg">

              <p>
                I'm a Computer Science student with a growing focus on
                software engineering. I enjoy understanding how things work
                underneath the surface, rather than only learning how to use
                them.
              </p>

              <p>
                Right now, I'm strengthening my foundations in Java, data
                structures and algorithms, backend development, and modern
                frontend technologies while building projects along the way.
              </p>

              <p>
                My goal is to become a well-rounded software engineer who can
                understand a problem, design a solution, and turn it into
                reliable software.
              </p>

            </div>

            {/* Current focus card */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 transition-colors duration-300">

              <p className="text-sm font-medium text-(--text-faint)">
                Current focus
              </p>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-sm font-medium text-(--text)">
                    Java & DSA
                  </p>

                  <p className="mt-1 text-sm leading-6 text-(--text-soft)">
                    Building strong programming and problem-solving
                    fundamentals.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-(--text)">
                    Backend Development
                  </p>

                  <p className="mt-1 text-sm leading-6 text-(--text-soft)">
                    Learning Spring Boot, APIs, databases, and backend
                    architecture.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-(--text)">
                    Full-Stack Development
                  </p>

                  <p className="mt-1 text-sm leading-6 text-(--text-soft)">
                    Building practical interfaces with React and modern web
                    tools.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;