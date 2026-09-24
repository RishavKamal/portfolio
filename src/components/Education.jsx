import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const content =
        sectionRef.current.querySelector(".education-content");

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
      id="education"
      className="scroll-mt-24 min-h-[calc(100vh-81px)]"
    >
      <div className="education-content flex min-h-[calc(100vh-81px)] items-center">
        <div className="portfolio-container py-24 sm:py-32">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-(--text-faint)">
              Education
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-(--text) sm:text-4xl">
              Academic background.
            </h2>
          </div>

          {/* Education card */}
          <div className="mt-12 max-w-3xl rounded-2xl border border-(--border) bg-(--surface) p-6 transition-colors duration-300 sm:p-8">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <h3 className="text-xl font-semibold text-(--text)">
                  Chandigarh University
                </h3>

                <p className="mt-2 text-base text-(--text-muted)">
                  Bachelor of Engineering in Computer Science & Engineering
                  (CSE)
                </p>
              </div>

              <p className="text-sm text-(--text-faint)">
                2024 – Present
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;