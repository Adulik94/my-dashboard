import { useMemo } from "react";
import StatCard from "../components/Dashboard/StatCard";
import SalesChart from "../components/Dashboard/SalesChart";
import LatestOrdersTable from "../components/Dashboard/LatestOrdersTable";
import { statCardsData } from "../data/mockData";
import { translations } from "../data/translations";
import { cn } from "../utils/cn";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../context/LanguageContext";

const Dashboard = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const t = (key) =>
    translations[lang]?.[key] || key;

  const themedClasses = useMemo(
    () => ({
      heading:
        theme === "dark"
          ? "text-white"
          : "text-gray-900",
      subText:
        theme === "dark"
          ? "text-lexa-300"
          : "text-gray-600",
      cardBg:
        theme === "dark"
          ? "bg-lexa-900"
          : "bg-white",
      cardBorder:
        theme === "dark"
          ? "border-lexa-700"
          : "border-gray-200",
    }),
    [theme]
  );

  const { heading, subText, cardBg, cardBorder } =
    themedClasses;
  const translatedStatCards = useMemo(() => {
    return statCardsData.map((data) => ({
      ...data,
      title: t(data.titleKey),
    }));
  }, [lang, t]);

  return (
    <div className="space-y-8">
      <h2
        className={cn(
          "text-3xl font-bold transition-colors duration-200",
          heading
        )}
      >
        {t("ui_dashboard")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {translatedStatCards.map(
          (data, index) => (
            <StatCard key={index} {...data} />
          )
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        <div
          className={cn(
            "lg:col-span-1 p-6 rounded-xl shadow-lg border transition-colors duration-200",
            cardBg,
            cardBorder
          )}
        >
          <h3
            className={cn(
              "text-xl font-semibold",
              heading
            )}
          >
            {t("ui_otherData")}
          </h3>
          <p
            className={cn(
              "mt-3 text-base",
              subText
            )}
          >
            {t("ui_placeholderDescription")}
          </p>
        </div>
      </div>

      <LatestOrdersTable />
    </div>
  );
};

export default Dashboard;
