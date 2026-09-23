const HeroVisual = () => {
  return (
    <div className="hero-visual relative hidden items-center justify-center xl:flex">

      {/* Background glow */}
      <div className="absolute h-72 w-72 rounded-full bg-(--accent-soft) blur-3xl" />

      {/* Code card */}
      <div className="relative w-[400px] overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-2xl shadow-black/20 backdrop-blur-sm">

        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-(--border) px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--text-faint)" />

          <span className="ml-auto font-mono text-xs text-(--text-faint)">
            Rishav.java
          </span>
        </div>

        {/* Code */}
        <div className="space-y-3 px-6 py-7 font-mono text-xs leading-6">

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
        <div className="flex items-center justify-between border-t border-(--border) px-5 py-3">

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