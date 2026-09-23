import { useEffect, useRef, useState } from "react";

const themes = [
  {
    id: "midnight",
    name: "Midnight",
  },
  {
    id: "arctic",
    name: "Arctic",
  },
  {
    id: "slate",
    name: "Slate",
  },
  {
    id: "emerald",
    name: "Emerald",
  },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "midnight";
  });

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Apply theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const currentTheme =
    themes.find((item) => item.id === theme) || themes[0];

  const selectTheme = (themeId) => {
    setTheme(themeId);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Trigger */}
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Select website theme"
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          flex
          min-w-[100px]
          items-center
          justify-between
          gap-3
          rounded-lg
          border
          border-(--border)
          bg-(--surface)
          px-3
          py-2
          text-xs
          font-medium
          text-(--text-muted)
          outline-none
          transition-all
          duration-200
          hover:border-(--border-hover)
          hover:bg-(--surface-hover)
          hover:text-(--text)
          focus-visible:ring-2
          focus-visible:ring-(--accent)
          focus-visible:ring-offset-2
          focus-visible:ring-offset-(--bg)
        "
      >
        <span>
          {currentTheme.name}
        </span>

        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Website themes"
          className="
            absolute
            right-0
            top-[calc(100%+8px)]
            z-[100]
            w-36
            overflow-hidden
            rounded-xl
            border
            border-(--border)
            bg-(--bg)
            p-1
            shadow-2xl
            shadow-black/20
            backdrop-blur-xl
          "
        >
          {themes.map((item) => {
            const isActive = item.id === theme;

            return (
              <button
                key={item.id}
                type="button"
                role="menuitem"
                onClick={() => selectTheme(item.id)}
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition-all
                  duration-150
                  ${
                    isActive
                      ? "bg-(--accent-soft) text-(--text)"
                      : "text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text)"
                  }
                `}
              >
                <span>
                  {item.name}
                </span>

                {isActive && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="text-(--accent)"
                  >
                    <path
                      d="M3 7.5L5.5 10L11 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;