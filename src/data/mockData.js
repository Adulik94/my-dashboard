export const ORDER_STATUS = {
  DELIVERED: "DELIVERED",
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  PROCESSING: "PROCESSING",
};

// -------------------- Stat Cards --------------------
export const statCardsData = [
  {
    titleKey: "stat_totalSales",
    value: 2301,
    valueFormat: "integer",
    change: "+8.7%",
    isPositive: true,
    icon: "shopping-cart",
  },
  {
    titleKey: "stat_netRevenue",
    value: 1892,
    valueFormat: "currency",
    change: "-1.2%",
    isPositive: false,
    icon: "wallet",
  },
  {
    titleKey: "stat_customers",
    value: 8934,
    valueFormat: "integer",
    change: "+15.3%",
    isPositive: true,
    icon: "users",
  },
  {
    titleKey: "stat_averageOrder",
    value: 45.67,
    valueFormat: "currency",
    change: "+0.5%",
    isPositive: true,
    icon: "package",
  },
];

// -------------------- Sales Chart --------------------
export const salesChartData = [
  // Renamed 'nameKey' to 'monthKey' for clarity
  {
    monthKey: "mon_jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    monthKey: "mon_feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    monthKey: "mon_mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    monthKey: "mon_apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    monthKey: "mon_may",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    monthKey: "mon_jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    monthKey: "mon_jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// -------------------- Latest Orders --------------------
export const latestOrders = [
  {
    id: "#12345",
    customer: "Anna Harutyunyan",
    // In a real app, date should be a Date object or ISO string (e.g., '2025-12-10T12:00:00Z')
    date: "10/12/2025",
    amount: 450,
    statusKey: ORDER_STATUS.DELIVERED, // Use the constant key
  },
  {
    id: "#12346",
    customer: "Vahan Grigoryan",
    date: "10/12/2025",
    amount: 120,
    statusKey: ORDER_STATUS.PENDING,
  },
  {
    id: "#12347",
    customer: "Mariam Aslanyan",
    date: "09/12/2025",
    amount: 890,
    statusKey: ORDER_STATUS.CANCELLED,
  },
  {
    id: "#12348",
    customer: "Tigran Abrahamyan",
    date: "09/12/2025",
    amount: 210,
    statusKey: ORDER_STATUS.DELIVERED,
  },
  {
    id: "#12349",
    customer: "Nare Mkrtchyan",
    date: "08/12/2025",
    amount: 330,
    statusKey: ORDER_STATUS.PROCESSING,
  },
];

// -------------------- Status Colors --------------------
export const getStatusColor = (statusKey) => {
  switch (statusKey) {
    case ORDER_STATUS.DELIVERED:
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case ORDER_STATUS.PENDING:
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
    case ORDER_STATUS.CANCELLED:
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case ORDER_STATUS.PROCESSING:
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

// -------------------- Status Translation Keys --------------------
export const getStatusTranslationKey = (
  statusKey
) => {
  switch (statusKey) {
    case ORDER_STATUS.DELIVERED:
      return "status_delivered";
    case ORDER_STATUS.PENDING:
      return "status_pending";
    case ORDER_STATUS.CANCELLED:
      return "status_cancelled";
    case ORDER_STATUS.PROCESSING:
      return "status_processing";
    default:
      return null;
  }
};
