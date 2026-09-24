import { useRef } from "react";

const HeroVisual = () => {
  const visualRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (event) => {
    const visual = visualRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!visual || !card || !glow) return;

    const cardRect = card.getBoundingClientRect();

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    /*
     * Find the closest point on the card to the cursor.
     * This allows the glow to react even before the cursor
     * actually enters the card.
     */
    const closestX = Math.max(
      cardRect.left,
      Math.min(mouseX, cardRect.right)
    );

    const closestY = Math.max(
      cardRect.top,
      Math.min(mouseY, cardRect.bottom)
    );

    const distance = Math.sqrt(
      Math.pow(mouseX - closestX, 2) +
        Math.pow(mouseY - closestY, 2)
    );

    /*
     * How far away the cursor can be before the effect disappears.
     */
    const maxDistance = 280;

    const proximity = Math.max(
      0,
      1 - distance / maxDistance
    );

    /*
     * Position of the glow inside the card.
     */
    const glowX = Math.max(
      0,
      Math.min(mouseX - cardRect.left, cardRect.width)
    );

    const glowY = Math.max(
      0,
      Math.min(mouseY - cardRect.top, cardRect.height)
    );

    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    /*
     * Glow gets stronger as the cursor approaches.
     */
    glow.style.opacity = `${0.75 * proximity}`;

    /*
     * Subtle 3D tilt.
     *
     * The card only moves by around 1.5 degrees,
     * keeping the effect minimal.
     */
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const relativeX =
      (mouseX - cardCenterX) / (cardRect.width / 2);

    const relativeY =
      (mouseY - cardCenterY) / (cardRect.height / 2);

    const rotateY = Math.max(
      -1.5,
      Math.min(1.5, relativeX * 1.5)
    );

    const rotateX = Math.max(
      -1.5,
      Math.min(1.5, -relativeY * 1.5)
    );

    /*
     * Only apply the tilt while the cursor is within
     * the interaction range.
     */
    const tiltStrength = proximity;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX * tiltStrength}deg)
      rotateY(${rotateY * tiltStrength}deg)
      translateY(${-2 * proximity}px)
      scale(${1 + 0.008 * proximity})
    `;

    /*
     * Border glow becomes slightly stronger as the
     * cursor gets closer.
     */
    card.style.borderColor = `color-mix(
      in srgb,
      var(--border) ${100 - proximity * 45}%,
      var(--accent)
    )`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    glow.style.opacity = "0";

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
      scale(1)
    `;

    card.style.borderColor = "var(--border)";
  };

  return (
    <div
      ref={visualRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        hero-visual
        relative
        hidden
        h-[520px]
        w-[620px]
        items-center
        justify-center
        xl:flex
      "
    >
      {/* Code card */}
      <div
        ref={cardRef}
        className="
          relative
          z-10
          w-[400px]
          overflow-hidden
          rounded-2xl
          border
          border-(--border)
          bg-(--surface)
          shadow-2xl
          shadow-black/20
          backdrop-blur-sm
        "
        style={{
          transform:
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
          transition:
            "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform, border-color",
        }}
      >
        {/* Mouse-following proximity glow */}
        <div
          ref={glowRef}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            z-0
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-(--accent-soft)
            blur-3xl
          "
          style={{
            left: "50%",
            top: "50%",
            opacity: 0,
            transition:
              "left 120ms cubic-bezier(0.22, 1, 0.36, 1), top 120ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease-out",
          }}
        />

        {/* Window header */}
        <div className="relative z-10 flex items-center gap-2 border-b border-(--border) px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />

          <span className="ml-auto font-mono text-xs text-(--text-faint)">
            Rishav.java
          </span>
        </div>

        {/* Code */}
        <div className="relative z-10 space-y-3 px-6 py-7 font-mono text-xs leading-6">
          <p className="text-(--text-faint)">
            <span className="text-(--text-faint)">01</span>

            <span className="ml-5">
              public class Rishav {"{"}
            </span>
          </p>

          <p className="text-(--text-soft)">
            <span className="text-(--text-faint)">02</span>

            <span className="ml-5">
              String role ={" "}
            </span>

            <span className="text-(--text)">
              "Software Engineer";
            </span>
          </p>

          <p className="text-(--text-soft)">
            <span className="text-(--text-faint)">03</span>

            <span className="ml-5">
              String focus ={" "}
            </span>

            <span className="text-(--accent)">
              "Java + DSA";
            </span>
          </p>

          <p className="text-(--text-soft)">
            <span className="text-(--text-faint)">04</span>

            <span className="ml-5">
              String stack ={" "}
            </span>

            <span className="text-(--accent)">
              "Spring Boot + React";
            </span>
          </p>

          <p className="text-(--text-soft)">
            <span className="text-(--text-faint)">05</span>

            <span className="ml-5">
              String mindset ={" "}
            </span>

            <span className="text-(--text)">
              "Build. Learn. Improve.";
            </span>
          </p>

          <p className="text-(--text-faint)">
            <span className="text-(--text-faint)">06</span>

            <span className="ml-5">
              {"}"}
            </span>
          </p>
        </div>

        {/* Bottom status */}
        <div className="relative z-10 flex items-center justify-between border-t border-(--border) px-5 py-3">
          <span className="text-xs text-(--text-faint)">
            Learning by building
          </span>

          <span className="flex items-center gap-2 text-xs text-(--text-muted)">
            <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
            active
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;