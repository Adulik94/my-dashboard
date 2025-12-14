import React from "react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../hooks/useTheme";

/**
 * A reusable button component that manages its own theme classes
 * based on the global theme context and its 'active' state.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button content.
 * @param {() => void} [props.onClick] - Click handler.
 * @param {boolean} [props.active=false] - Whether the button is in an active/selected state.
 * @param {string} [props.className=""] - Optional custom Tailwind classes to merge.
 * @returns {JSX.Element}
 */
const Button = ({
  children,
  onClick,
  active = false,
  className = "",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Base classes (static)
  const baseClasses =
    "px-3 py-1 rounded transition-colors w-full text-center font-medium shadow-sm";

  let colorClasses;

  if (active) {
    colorClasses =
      "bg-lexa-500 text-lexa-50 hover:bg-lexa-600";
  } else {
    if (isDark) {
      colorClasses =
        "bg-lexa-700 text-lexa-200 hover:bg-lexa-600 hover:text-lexa-50";
    } else {
      colorClasses =
        "bg-lexa-200 text-lexa-900 hover:bg-lexa-500 hover:text-lexa-50";
    }
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        colorClasses,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
