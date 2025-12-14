import { useMemo } from "react";
import { cn } from "../../utils/cn";
import {
  ChevronUp,
  ChevronDown,
  ShoppingCart,
  Wallet,
  Users,
  Package,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

const iconMap = {
  "shopping-cart": ShoppingCart,
  wallet: Wallet,
  users: Users,
  package: Package,
};

const StatCard = ({
  titleKey,
  value,
  change,
  isPositive,
  icon: iconName,
}) => {
  const { theme, accentColor } = useTheme();
  const { lang } = useLanguage();
  const t = (key) =>
    translations[lang]?.[key] || key;

  const Icon = iconMap[iconName];
  const ChangeIcon = isPositive
    ? ChevronUp
    : ChevronDown;

  const themedClasses = useMemo(() => {
    const isDark = theme === "dark";

    let cardBg = "";
    let cardBorder = "";
    let valueColor = "";
    let waveFill = "";

    switch (accentColor) {
      case "red":
        cardBg = isDark
          ? "bg-red-900/40"
          : "bg-red-100";
        cardBorder = isDark
          ? "border-red-700/50"
          : "border-red-300";
        valueColor = isDark
          ? "text-red-50"
          : "text-red-800/70";
        waveFill = isDark ? "#7F1D1D" : "#FCA5A5";
        break;
      case "teal":
        cardBg = isDark
          ? "bg-teal-900/40"
          : "bg-teal-100";
        cardBorder = isDark
          ? "border-teal-700/50"
          : "border-teal-300";
        valueColor = isDark
          ? "text-teal-50"
          : "text-teal-800/70";
        waveFill = isDark ? "#134E4A" : "#5EEAD4";
        break;
      case "lexa":
      default:
        cardBg = isDark
          ? "bg-lexa-800"
          : "bg-lexa-50";
        cardBorder = isDark
          ? "border-lexa-700/50"
          : "border-lexa-200";
        valueColor = isDark
          ? "text-lexa-50"
          : "text-lexa-800";
        waveFill = isDark ? "#f5f0fa" : "#d1bdf0";
        break;
    }

    const titleColor = isDark
      ? "text-lexa-50"
      : "text-lexa-500/70";
    const iconBg = isDark
      ? "bg-lexa-700"
      : "bg-lexa-200";
    const iconColor = isDark
      ? "text-lexa-50"
      : "text-lexa-500";
    const changeColor = isPositive
      ? "text-green-500 bg-green-100 dark:bg-green-900/50"
      : "text-red-500 bg-red-100 dark:bg-red-900/50";
    const changeSpanClass = cn(
      "flex items-center text-xs font-semibold px-2 py-1 rounded-full",
      changeColor
    );

    return {
      cardBg,
      cardBorder,
      valueColor,
      titleColor,
      iconBg,
      iconColor,
      changeSpanClass,
      waveFill,
    };
  }, [theme, accentColor, isPositive]);

  const {
    cardBg,
    cardBorder,
    titleColor,
    valueColor,
    iconBg,
    iconColor,
    changeSpanClass,
    waveFill,
  } = themedClasses;

  return (
    <div
      className={cn(
        "relative overflow-hidden p-5 rounded-lg shadow-md border transition-all duration-500 transform hover:scale-105 hover:shadow-xl",
        cardBg,
        cardBorder
      )}
    >
      <div className="relative flex justify-between items-start z-10">
        <div>
          <p
            className={cn(
              "text-sm font-medium",
              titleColor
            )}
          >
            {t(titleKey)}
          </p>
          <h2
            className={cn(
              "text-3xl font-bold mt-1",
              valueColor
            )}
          >
            {value}
          </h2>
        </div>
        <div
          className={cn(
            "p-3 rounded-full",
            iconBg,
            iconColor
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center mt-4">
        <span className={changeSpanClass}>
          <ChangeIcon className="w-3 h-3 mr-1" />
          {change}
        </span>
      </div>

      {/* Animated Wave Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute inset-0 w-full h-full z-0 opacity-30"
        preserveAspectRatio="none"
      >
        <path
          fill={waveFill}
          fillOpacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,133.3C672,171,768,213,864,240C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default StatCard;
