import { useMemo } from "react";
import { cn } from "../../utils/cn";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesChartData } from "../../data/mockData";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

const SalesChart = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const t = (key) =>
    translations[lang]?.[key] || key;

  const themeProps = useMemo(() => {
    const isDark = theme === "dark";

    return {
      cardBg: isDark
        ? "bg-lexa-800"
        : "bg-lexa-50",
      cardBorder: isDark
        ? "border-lexa-700/50"
        : "border-lexa-200",
      titleClass: isDark
        ? "text-lexa-50"
        : "text-lexa-900",
      stroke: isDark ? "#b998eb" : "#6c39b3",
      grid: isDark ? "#502885" : "#d1bdf0",
      axis: isDark ? "#b998eb" : "#502885",
      tooltipBg: isDark ? "#2b1b42" : "#f5f0fa",
    };
  }, [theme]);

  const {
    cardBg,
    cardBorder,
    titleClass,
    stroke,
    grid,
    axis,
    tooltipBg,
  } = themeProps;

  return (
    <div
      className={cn(
        "relative p-5 rounded-lg shadow-md border overflow-hidden",
        cardBg,
        cardBorder
      )}
    >
      <h3
        className={cn(
          "text-lg font-semibold mb-4 relative z-10",
          titleClass
        )}
      >
        {t("chart_monthlySales")}
      </h3>

      <div
        className="relative z-10"
        style={{ width: "100%", height: 300 }}
      >
        <ResponsiveContainer width="100%">
          <AreaChart
            data={salesChartData.map((item) => ({
              ...item,
              name: t(item.monthKey),
            }))}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={stroke}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={stroke}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke={grid}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="name" stroke={axis} />
            <YAxis stroke={axis} />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                borderColor: grid,
                borderRadius: "8px",
                color: axis,
              }}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke={stroke}
              fillOpacity={1}
              fill="url(#colorUv)"
              name={t("chart_sales")}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
