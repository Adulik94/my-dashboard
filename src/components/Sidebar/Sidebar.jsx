import { useMemo } from "react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart,
} from "lucide-react";
import PanelHeader from "../shared/PanelHeader";

const navItemsKeys = [
  {
    nameKey: "sidebar_dashboard",
    href: "#dashboard",
    icon: LayoutDashboard,
  },
  {
    nameKey: "sidebar_users",
    href: "#users",
    icon: Users,
  },
  {
    nameKey: "sidebar_orders",
    href: "#orders",
    icon: ShoppingCart,
  },
  {
    nameKey: "sidebar_analytics",
    href: "#analytics",
    icon: BarChart,
  },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const t = (key) =>
    translations[lang]?.[key] || key;
  const sidebarClasses = useMemo(() => {
    const isDark = theme === "dark";
    return {
      bg: isDark ? "bg-lexa-900" : "bg-white",
      border: isDark
        ? "border-lexa-700"
        : "border-lexa-200",
      text: isDark
        ? "text-white"
        : "text-gray-900",
      hoverBg: isDark
        ? "hover:bg-lexa-700"
        : "hover:bg-lexa-100",
      titleColor: isDark
        ? "text-white"
        : "text-gray-900",
      sectionBorder: isDark
        ? "border-lexa-700"
        : "border-lexa-200",
    };
  }, [theme]);

  const {
    bg,
    border,
    text,
    hoverBg,
    titleColor,
    sectionBorder,
  } = sidebarClasses;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-50 h-full w-64",
        "transition-transform duration-300 ease-in-out shadow-2xl",
        bg,
        border,
        "lg:hidden",
        isOpen
          ? "translate-x-0"
          : "-translate-x-full"
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col p-4",
          text
        )}
      >
        <PanelHeader
          title="Lexa"
          titleColor={cn(
            "text-xl font-bold",
            titleColor
          )}
          borderColor={sectionBorder}
          buttonHoverBg={hoverBg}
          iconColor={text}
          onClose={closeSidebar}
        />
        <nav className="space-y-2">
          {navItemsKeys.map((item) => (
            <a
              key={item.nameKey}
              href={item.href}
              onClick={closeSidebar}
              className={cn(
                "flex items-center gap-3 rounded-lg p-3 text-sm font-medium transition",
                hoverBg
              )}
            >
              <item.icon className="size-5" />
              {t(item.nameKey)}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
