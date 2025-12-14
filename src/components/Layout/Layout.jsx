import React, {
  useState,
  useMemo,
  useCallback,
} from "react";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
import { cn } from "../../utils/cn";
import { useTheme } from "../../hooks/useTheme";
import SettingsPanel from "../SettingsPanel/SettingsPanel";
import { pageContainer } from "../../utils/pageContainer";

/**
 * Primary Layout component that wraps all application content.
 * Manages the fixed header, sidebar state, and main content area.
 */

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false); // left Sidebar (Mobile)
  const [isSettingsOpen, setIsSettingsOpen] =
    useState(false); // right Settings Panel

  const { theme } = useTheme();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
    setIsSettingsOpen(false);
  }, []);
  const closeSidebar = useCallback(
    () => setIsSidebarOpen(false),
    []
  );

  const toggleSettings = useCallback(() => {
    setIsSettingsOpen((prev) => !prev);
    setIsSidebarOpen(false);
  }, []);
  const closeSettings = useCallback(
    () => setIsSettingsOpen(false),
    []
  );
  const themedClasses = useMemo(() => {
    const isDark = theme === "dark";

    return {
      layoutBg: isDark
        ? "bg-lexa-950"
        : "bg-gray-50",
    };
  }, [theme]);
  const { layoutBg } = themedClasses;

  const overlayClass = cn(
    "fixed inset-0 z-40  bg-black/40 backdrop-blur-sm transition-opacity duration-300",
    isSidebarOpen || isSettingsOpen
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  );

  return (
    <div
      className={cn(
        "flex min-h-screen transition-colors duration-200",
        layoutBg
      )}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <div className="flex flex-col flex-1 overflow-x-hidden z-0">
        <Header
          toggleSidebar={toggleSidebar} // Mobile Burger Icon
          toggleSettings={toggleSettings} // Settings Icon
          isSidebarOpen={isSidebarOpen}
          isSettingsOpen={isSettingsOpen}
        />
        <main className="flex-1 mt-20">
          <div className={pageContainer}>
            {children}
          </div>
        </main>
      </div>
      <SettingsPanel
        isOpen={isSettingsOpen}
        toggleSettings={toggleSettings}
        closeSettings={closeSettings}
      />
      <div
        className={overlayClass}
        onClick={
          isSidebarOpen
            ? closeSidebar
            : closeSettings
        }
        aria-hidden="true"
      />
    </div>
  );
};

export default Layout;
