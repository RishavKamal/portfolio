const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

        <p>
          © {new Date().getFullYear()} Rishav Kamal
        </p>

        <p>
          Built with React
        </p>

      </div>
    </footer>
  );
};

export default Footer;