import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const content =
        sectionRef.current.querySelector(".contact-content");

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
      id="contact"
      className="scroll-mt-24 min-h-[calc(100vh-81px)]"
    >
      <div className="contact-content flex min-h-[calc(100vh-81px)] items-center">
        <div className="portfolio-container py-24 sm:py-32">

          <div className="max-w-3xl">

            {/* Section heading */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-(--text-faint)">
              Contact
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-(--text) sm:text-4xl">
              Let's connect.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-(--text-soft) sm:text-lg">
              I'm always open to connecting with fellow developers, recruiters,
              and people interested in software and technology.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="mailto:rishavkamalbg821@gmail.com"
                className="primary-button rounded-lg px-5 py-3 text-sm font-semibold tracking-tight transition-opacity duration-200 hover:opacity-90"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/rishavkamal"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-(--border) px-5 py-3 text-sm font-semibold tracking-tight text-(--text) transition-colors duration-200 hover:bg-(--surface-hover)"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;