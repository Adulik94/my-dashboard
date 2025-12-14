import { useMemo, useCallback } from "react";
import { cn } from "../../utils/cn";
import Button from "../shared/Button";
import ThemeModeSelector from "../Sidebar/ThemeModeSelector";
import { useTheme } from "../../hooks/useTheme";
import PanelHeader from "../shared/PanelHeader";

const SettingsPanel = ({
  isOpen,
  toggleSettings,
}) => {
  const { theme, setAccentColor, accentColor } =
    useTheme();

  const themedClasses = useMemo(() => {
    const isDark = theme === "dark";

    return {
      sidebarBg: isDark
        ? "bg-lexa-900"
        : "bg-white",
      sidebarText: isDark
        ? "text-white"
        : "text-gray-900",
      borderColor: isDark
        ? "border-lexa-700"
        : "border-lexa-200",
      headingColor: isDark
        ? "text-lexa-200"
        : "text-lexa-700",
      hoverBg: isDark
        ? "hover:bg-lexa-700"
        : "hover:bg-lexa-100",
      activeRing: isDark
        ? "ring-2 ring-white"
        : "ring-2 ring-gray-900",
    };
  }, [theme]);

  const {
    sidebarBg,
    sidebarText,
    borderColor,
    headingColor,
    hoverBg,
    activeRing,
  } = themedClasses;

  const handleToggle = useCallback(() => {
    toggleSettings();
  }, [toggleSettings]);

  const handleColorChange = useCallback(
    (color) => {
      if (setAccentColor) {
        setAccentColor(color);
      }
    },
    [setAccentColor]
  );
  const getColorButtonClass = (
    colorName,
    baseClass
  ) => {
    const activeClass =
      accentColor === colorName ? activeRing : "";

    // For Lexa, we ensure the button gets the active ring if no other color is selected
    if (colorName === "lexa" && !accentColor) {
      return cn(baseClass, activeRing);
    }

    return cn(baseClass, activeClass);
  };

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-50 h-full w-72 shadow-2xl transform transition-transform duration-300 ease-in-out",
        sidebarBg,
        sidebarText,
        isOpen
          ? "translate-x-0"
          : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Application Settings"
    >
      <div className="space-y-6 p-4 h-full flex flex-col">
        {/* 🚀 Replaced the manual header with PanelHeader */}
        <PanelHeader
          title="Settings"
          titleColor={headingColor}
          borderColor={borderColor}
          buttonHoverBg={hoverBg}
          iconColor={sidebarText}
          onClose={handleToggle}
        />
        <div className="space-y-4 grow overflow-y-auto">
          <div>
            <h2
              className={cn(
                "font-semibold mb-2",
                headingColor
              )}
            >
              Colors
            </h2>
            <div className="flex gap-2">
              <Button
                className={getColorButtonClass(
                  "lexa",
                  "bg-lexa-500 text-white hover:bg-lexa-600"
                )}
                onClick={() =>
                  handleColorChange("lexa")
                }
              >
                Lexa
              </Button>
              <Button
                className={getColorButtonClass(
                  "red",
                  "bg-red-500 text-white hover:bg-red-600"
                )}
                onClick={() =>
                  handleColorChange("red")
                }
              >
                Red
              </Button>
              <Button
                className={getColorButtonClass(
                  "teal",
                  "bg-teal-500 text-white hover:bg-teal-600"
                )}
                onClick={() =>
                  handleColorChange("teal")
                }
              >
                Teal
              </Button>
            </div>
          </div>
          {/* Mode */}
          <ThemeModeSelector
            headingColor={headingColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
