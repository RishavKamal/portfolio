const Footer = () => {
  return (
    <footer className="border-t border-(--border) transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">

        <p className="text-(--text-faint)">
          © {new Date().getFullYear()} Rishav Kamal
        </p>

        <p className="text-(--text-faint)">
          Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;