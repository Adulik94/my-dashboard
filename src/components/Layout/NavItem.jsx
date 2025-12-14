import React from "react";
import { cn } from "../../utils/cn";

/**
 * Renders a single navigation item (link).
 * The active state styling is hardcoded based on the label for demonstration
 * but should ideally be based on the current URL path.
 *
 * @param {object} props
 * @param {React.ComponentType} props.icon - Lucide icon component.
 * @param {string} props.label - Text label for the navigation item.
 * @returns {JSX.Element}
 */
const NavItem = ({ icon: Icon, label }) => {
  const isActive = label === "Dashboard";
  const baseClasses =
    "flex items-center space-x-3 p-3 text-sm font-medium rounded-lg transition-colors duration-150";

  const activeClasses =
    "text-white bg-red-600 hover:bg-blue-700";

  const inactiveClasses =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700";

  return (
    <a
      href="#"
      className={cn(
        baseClasses,
        isActive ? activeClasses : inactiveClasses
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </a>
  );
};

export default NavItem;
