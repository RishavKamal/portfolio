import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center overflow-hidden px-6">
      <div className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--text-faint)">
          Error 404
        </p>

        <h1 className="mt-5 text-7xl font-bold leading-none tracking-[-0.05em] text-(--text) sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-(--text) sm:text-3xl">
          Page not found.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-(--text-soft) sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <a
          href="/"
          className="primary-button mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300 hover:!bg-(--accent) hover:!text-(--bg)"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;