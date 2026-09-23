const App = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold tracking-tight">
          RK.
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishavkamal"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </nav>


      {/* Hero */}
      <section className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">

          {/* Status */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Currently building
          </div>


          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Rishav Kamal
          </h1>


          {/* Subtitle */}
          <p className="mt-6 text-xl text-gray-400 sm:text-2xl">
            Computer Science Student
            <span className="mx-3 text-gray-600">·</span>
            Software Engineer in the Making
          </p>


          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            I&apos;m learning how software works from the fundamentals
            and building projects along the way.
          </p>


          {/* Technologies */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Java",
              "DSA",
              "React",
              "Spring Boot",
              "SQL",
              "Git",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400"
              >
                {technology}
              </span>
            ))}
          </div>


          {/* Buttons */}
          <div
            id="contact"
            className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="https://github.com/RishavKamal"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rishavkamal"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>


          {/* Footer */}
          <p className="mt-20 text-sm text-gray-600">
            Portfolio v1 is currently being built.
          </p>

        </div>
      </section>
    </main>
  )
}

export default App