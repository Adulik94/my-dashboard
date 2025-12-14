import { useMemo } from "react";
import { cn } from "../../utils/cn";
import {
  getStatusColor,
  latestOrders,
  getStatusTranslationKey,
} from "../../data/mockData";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

const LatestOrdersTable = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const t = (key) =>
    translations[lang]?.[key] || key;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const themedClasses = useMemo(() => {
    const isDark = theme === "dark";

    return {
      cardBg: isDark
        ? "bg-lexa-900"
        : "bg-lexa-50",
      cardBorder: isDark
        ? "border-lexa-700/50"
        : "border-lexa-200",
      headingText: isDark
        ? "text-lexa-50"
        : "text-lexa-900",
      headerBg: isDark
        ? "bg-lexa-800"
        : "bg-lexa-100",
      headerText: isDark
        ? "text-lexa-300"
        : "text-lexa-700",
      rowBg: isDark
        ? "bg-lexa-900"
        : "bg-lexa-50",
      rowHover: isDark
        ? "hover:bg-lexa-800/50"
        : "hover:bg-lexa-200",
      divideColor: isDark
        ? "divide-lexa-700"
        : "divide-lexa-200",
      secondaryText: isDark
        ? "text-lexa-300"
        : "text-lexa-700",
    };
  }, [theme]);

  const {
    cardBg,
    cardBorder,
    headingText,
    headerBg,
    headerText,
    rowBg,
    rowHover,
    divideColor,
    secondaryText,
  } = themedClasses;

  const tableColumns = useMemo(
    () => [
      "ID",
      t("table_customer"),
      t("table_date"),
      t("table_amountUSD"),
      t("table_status"),
    ],
    [lang, t]
  );

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
          headingText
        )}
      >
        {t("title_latestOrders")}{" "}
      </h3>

      <div className="overflow-x-auto relative z-10">
        <table
          className={cn(
            "min-w-full divide-y",
            divideColor
          )}
        >
          <thead className={headerBg}>
            <tr>
              {tableColumns.map((col, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={cn(
                    "px-6 py-3 text-start text-xs font-medium uppercase tracking-wider",
                    headerText
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody
            className={cn(
              rowBg,
              "divide-y",
              divideColor
            )}
          >
            {latestOrders.map((order) => (
              <tr
                key={order.id}
                className={cn(
                  rowHover,
                  "transition duration-150"
                )}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-lexa-500">
                  {order.id}
                </td>
                <td
                  className={cn(
                    "px-6 py-4 whitespace-nowrap text-sm",
                    headingText
                  )}
                >
                  {translations[lang]
                    ?.customerNames?.[
                    order.customer
                  ] || order.customer}
                </td>

                {/* Date */}
                <td
                  className={cn(
                    "px-6 py-4 whitespace-nowrap text-sm",
                    secondaryText
                  )}
                >
                  {order.date}
                </td>

                {/* Amount */}
                <td
                  className={cn(
                    "px-6 py-4 whitespace-nowrap text-sm font-semibold text-left",
                    headingText
                  )}
                >
                  {formatCurrency(order.amount)}{" "}
                </td>
                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={cn(
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                      getStatusColor(
                        order.statusKey
                      )
                    )}
                  >
                    {t(
                      getStatusTranslationKey(
                        order.statusKey
                      )
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrdersTable;
