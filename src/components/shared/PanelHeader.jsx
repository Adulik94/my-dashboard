// PanelHeader.jsx

import { useCallback } from "react";
import { cn } from "../../utils/cn";
import { X } from "lucide-react";

/**
 * Reusable header component for settings panels or drawers.
 * Displays a title and a close button.
 * * @param {object} props
 * @param {string} props.title - The title text to display (e.g., "Settings").
 * @param {string} props.titleColor - Tailwind class for the title color.
 * @param {string} props.borderColor - Tailwind class for the bottom border color.
 * @param {string} props.buttonHoverBg - Tailwind class for the close button's hover background.
 * @param {string} props.iconColor - Tailwind class for the close button icon color.
 * @param {() => void} props.onClose - Function to call when the close button is clicked.
 * @returns {JSX.Element}
 */
export default function PanelHeader({
  title,
  titleColor,
  borderColor,
  buttonHoverBg,
  iconColor,
  onClose,
}) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-3 py-4 shrink-0",
        borderColor
      )}
    >
      <h4 className={titleColor}>{title}</h4>
      <button
        onClick={handleClose}
        aria-label={`Close ${title.toLowerCase()} panel`}
        className={cn(
          "p-1 rounded-full transition-colors",
          buttonHoverBg
        )}
      >
        <X className={cn("w-6 h-6", iconColor)} />
      </button>
    </div>
  );
}
