import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";
import Button from "../shared/Button";

/**
 * Component to allow users to switch between Light and Dark themes.
 * @param {object} props
 * @param {string} props.headingColor - Tailwind class for the heading text color.
 * @returns {JSX.Element}
 */
const ThemeModeSelector = ({ headingColor }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2
        className={cn(
          "font-semibold mb-2",
          headingColor
        )}
      >
        Mode
      </h2>
      <div className="flex gap-2">
        <Button
          onClick={() => setTheme("light")}
          active={theme === "light"}
        >
          Light
        </Button>
        <Button
          onClick={() => setTheme("dark")}
          active={theme === "dark"}
        >
          Dark
        </Button>
      </div>
    </div>
  );
};

export default ThemeModeSelector;
