import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import HeroVisual from "./HeroVisual";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  const titleCursorRef = useRef(null);
  const subtitleCursorRef = useRef(null);
  const descriptionCursorRef = useRef(null);

  const actionsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const description = descriptionRef.current;

      const titleCursor = titleCursorRef.current;
      const subtitleCursor = subtitleCursorRef.current;
      const descriptionCursor = descriptionCursorRef.current;

      const actions = actionsRef.current;

      const titleText = "Rishav Kamal";

      const subtitleText =
        "Computer Science Student · Java & Full-Stack Developer";

      const descriptionText =
        "I build software while strengthening my foundations in Java, DSA, backend development, and modern web technologies.";

      const activateCursor = (cursor) => {
        cursor.classList.add("active");
      };

      const deactivateCursor = (cursor) => {
        cursor.classList.remove("active");
      };

      // Reduced motion:
      // Show everything immediately without animation.
      if (prefersReducedMotion) {
        title.textContent = titleText;
        subtitle.textContent = subtitleText;
        description.textContent = descriptionText;

        gsap.set(".hero-status", {
          opacity: 1,
        });

        gsap.set(actions, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      // Start with empty text.
      gsap.set(title, {
        text: "",
      });

      gsap.set(subtitle, {
        text: "",
      });

      gsap.set(description, {
        text: "",
      });

      // Hide cursors initially.
      gsap.set(
        [titleCursor, subtitleCursor, descriptionCursor],
        {
          opacity: 0,
        }
      );

      // Hide buttons initially.
      gsap.set(actions, {
        opacity: 0,
        y: 12,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // --------------------------------
      // STATUS
      // --------------------------------

      timeline.from(".hero-status", {
        opacity: 0,
        y: 12,
        duration: 0.5,
      });

      // --------------------------------
      // NAME
      // --------------------------------

      timeline.call(() => {
        activateCursor(titleCursor);
      });

      timeline.to(title, {
        text: titleText,
        duration: 0.6,
        ease: "none",
      });

      // Move cursor to subtitle.
      timeline.call(() => {
        deactivateCursor(titleCursor);
        activateCursor(subtitleCursor);
      });

      // --------------------------------
      // SUBTITLE
      // --------------------------------

      timeline.to(subtitle, {
        text: subtitleText,
        duration: 1.0,
        ease: "none",
      });

      // Move cursor to description.
      timeline.call(() => {
        deactivateCursor(subtitleCursor);
        activateCursor(descriptionCursor);
      });

      // --------------------------------
      // DESCRIPTION
      // --------------------------------

      timeline.to(description, {
        text: descriptionText,
        duration: 1.3,
        ease: "none",
      });

      // Stop cursor after description.
      timeline.call(() => {
        deactivateCursor(descriptionCursor);
      });

      // --------------------------------
      // BUTTONS
      // --------------------------------

      timeline.to(
        actions,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.4"
      );

      // --------------------------------
      // CODE CARD
      // --------------------------------

      timeline.from(
        ".hero-visual",
        {
          opacity: 0,
          x: 40,
          scale: 0.96,
          duration: 0.6,
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-16 px-6 py-20 xl:grid-cols-[1.2fr_0.8fr]"
    >
      {/* Left side */}
      <div className="max-w-5xl">

        {/* Status */}
        <div className="hero-status mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium tracking-wide text-white/60">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Learning & building
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
          <span ref={titleRef}></span>

          <span
            ref={titleCursorRef}
            className="typing-cursor"
          />
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-lg font-medium leading-7 tracking-[-0.01em] text-white/65 sm:text-xl">
          <span ref={subtitleRef}></span>

          <span
            ref={subtitleCursorRef}
            className="typing-cursor"
          />
        </p>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
          <span ref={descriptionRef}></span>

          <span
            ref={descriptionCursorRef}
            className="typing-cursor"
          />
        </p>

        {/* Buttons */}
        <div
          ref={actionsRef}
          className="mt-9 flex flex-wrap gap-4"
        >
          {/* GitHub */}
          <a
            href="https://github.com/RishavKamal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold tracking-tight text-black transition hover:bg-white/90"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishavkamal"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right side */}
      <HeroVisual />
    </section>
  );
};

export default Hero;