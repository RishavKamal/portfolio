const HeroVisual = () => {
  return (
    <div className="hero-visual relative hidden items-center justify-center xl:flex">

      {/* Background glow */}
      <div className="absolute h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

      {/* Code card */}
      <div className="relative w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40 backdrop-blur-sm">

        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

          <span className="ml-auto font-mono text-xs text-white/30">
            Rishav.java
          </span>
        </div>

        {/* Code */}
        <div className="space-y-3 px-6 py-7 font-mono text-xs leading-6">

          <p className="text-white/30">
            <span className="text-white/20">01</span>
            <span className="ml-5">
              public class Rishav {"{"}
            </span>
          </p>

          <p className="text-white/50">
            <span className="text-white/20">02</span>
            <span className="ml-5">
              String role ={" "}
            </span>
            <span className="text-white/75">
              "Software Engineer";
            </span>
          </p>

          <p className="text-white/50">
            <span className="text-white/20">03</span>
            <span className="ml-5">
              String focus ={" "}
            </span>
            <span className="text-white/75">
              "Java + DSA";
            </span>
          </p>

          <p className="text-white/50">
            <span className="text-white/20">04</span>
            <span className="ml-5">
              String stack ={" "}
            </span>
            <span className="text-white/75">
              "Spring Boot + React";
            </span>
          </p>

          <p className="text-white/50">
            <span className="text-white/20">05</span>
            <span className="ml-5">
              String mindset ={" "}
            </span>
            <span className="text-white/75">
              "Build. Learn. Improve.";
            </span>
          </p>

          <p className="text-white/30">
            <span className="text-white/20">06</span>
            <span className="ml-5">
              {"}"}
            </span>
          </p>

        </div>

        {/* Bottom status */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
          <span className="text-xs text-white/30">
            Learning by building
          </span>

          <span className="flex items-center gap-2 text-xs text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            active
          </span>
        </div>

      </div>
    </div>
  );
};

export default HeroVisual;