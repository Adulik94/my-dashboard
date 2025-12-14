import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") || "light"
    );
  });

  const [accentColor, setAccentColor] = useState(
    () => {
      return (
        localStorage.getItem("accentColor") ||
        "lexa"
      );
    }
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "accentColor",
      accentColor
    );
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        accentColor,
        setAccentColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
