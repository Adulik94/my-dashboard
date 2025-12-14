import {
  useCallback,
  useMemo,
  useState,
} from "react";
import { cn } from "../../utils/cn";
import {
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import {
  Settings,
  Maximize,
  Minimize,
} from "lucide-react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { pageContainer } from "../../utils/pageContainer";
import { useTheme } from "../../hooks/useTheme";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Header component for the dashboard layout.
 * Displays a logo, search bar, notifications, and a sidebar toggle.
 *
 * @param {object} props
 * @param {() => void} props.toggleSidebar - Function to toggle the sidebar's visibility.
 * @returns {JSX.Element}
 */

export default function Header({
  toggleSidebar,
  toggleSettings,
}) {
  const { theme } = useTheme();
  const [isFullscreen, setIsFullscreen] =
    useState(false);

  // Function to toggle full-screen mode (❁´◡`❁)
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch((err) => {
            console.error(
              `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
            );
          });
      }
    }
  }, []);

  const themedClasses = useMemo(() => {
    const isDark = theme === "dark";
    const headerBg = isDark
      ? "bg-lexa-800 border-lexa-700"
      : "bg-white border-lexa-200";
    const textColor = isDark
      ? "text-white"
      : "text-gray-900";
    const inputClasses = cn(
      "pl-9 pr-3 py-2 w-full rounded-full border text-sm transition-all focus:ring-lexa-500 focus:border-lexa-500",
      isDark
        ? "bg-lexa-700 text-white border-lexa-600 placeholder-lexa-400"
        : "bg-gray-100 text-gray-900 border-lexa-300 placeholder-gray-500"
    );

    const hoverBg = isDark
      ? "hover:bg-lexa-700"
      : "hover:bg-lexa-100";

    const iconButtonBg = isDark
      ? "bg-lexa-700"
      : "bg-lexa-100";

    const searchIconColor = isDark
      ? "text-lexa-400"
      : "text-lexa-500";

    return {
      header: cn("border-b", headerBg),
      text: textColor,
      input: inputClasses,
      hover: hoverBg,
      iconButtonBg: iconButtonBg,
      searchIcon: searchIconColor,
    };
  }, [theme]);

  const {
    header,
    text,
    input,
    hover,
    searchIcon,
  } = themedClasses;

  const handleToggleSidebar = useCallback(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  const handleToggleSettings = useCallback(() => {
    toggleSettings();
  }, [toggleSettings]);

  const FullscreenIcon = isFullscreen
    ? Minimize
    : Maximize;

  return (
    <header
      className={cn(
        "flex items-center justify-between h-20 fixed top-0 left-0 w-full z-20",
        header
      )}
    >
      <div
        className={cn(
          "flex h-full items-center justify-between",
          pageContainer
        )}
      >
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "p-2 rounded-full lg:hidden",
              hover
            )}
            onClick={handleToggleSidebar}
          >
            <FaBars
              className={cn("size-5", text)}
            />
          </button>
          <div
            className={cn(
              "w-10 h-10 flex items-center justify-center  overflow-hidden"
            )}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1
            className={cn(
              "text-xl font-bold",
              text
            )}
          >
            Lexa
          </h1>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="relative hidden md:block w-64">
            <input
              type="search"
              className={input}
              placeholder="Search..."
              aria-label="Search dashboard content"
            />
            <FaSearch
              className={cn(
                "absolute left-3 top-1/2 transform -translate-y-1/2",
                searchIcon
              )}
            />
          </div>
          <LanguageSwitcher />

          <button
            className={cn(
              "p-2 rounded-full transition-colors max-sm:hidden",
              hover
            )}
            onClick={toggleFullscreen}
            aria-label={
              isFullscreen
                ? "Exit fullscreen mode"
                : "Enter fullscreen mode"
            }
          >
            <FullscreenIcon
              className={cn("size-5", text)}
            />
          </button>
          <button
            className={cn(
              "p-2 rounded-full transition-colors",
              hover
            )}
            aria-label="View notifications"
          >
            <FaBell
              className={cn("size-5", text)}
            />
          </button>

          <div
            className={cn(
              "w-10 h-10 flex  items-center justify-center rounded-full overflow-hidden",
              theme === "dark"
                ? "bg-lexa-700"
                : "bg-lexa-200"
            )}
          >
            <button
              className={cn(
                "size-full p-0.5 flex items-center justify-center rounded-full border",
                text
              )}
              aria-label="User profile menu"
              // onClick for dropdown menu if needed {coming soon?}✍️(◔◡◔)
            >
              <img
                src={user}
                alt="User Avatar"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          <button
            className={cn(
              "p-2 rounded-full transition-colors",
              hover,
              themedClasses.iconButtonBg
            )}
            onClick={handleToggleSettings}
            aria-label="Toggle settings sidebar"
          >
            <Settings
              className={cn("size-6", text)}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
