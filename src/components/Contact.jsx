const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10"

    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's connect.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            I'm always open to connecting with fellow developers, recruiters,
            and people interested in software and technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:rishavkamalbg821@gmail.com"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold tracking-tight text-black transition hover:bg-white/90"
            >
              Email Me
            </a>

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
      </div>
    </section>
  );
};

export default Contact;