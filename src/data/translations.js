// src/data/translations.js

export const translations = {
  en: {
    // --- Stat Card Titles ---
    stat_totalSales: "Total Sales",
    stat_netRevenue: "Net Revenue",
    stat_customers: "Customers",
    stat_averageOrder: "Average Order Value",

    // --- Months (Standardized 3-letter keys) ---
    mon_jan: "Jan",
    mon_feb: "Feb",
    mon_mar: "Mar",
    mon_apr: "Apr",
    mon_may: "May",
    mon_jun: "Jun",
    mon_jul: "Jul",

    // --- Sidebar Nav Items ---
    sidebar_dashboard: "Dashboard",
    sidebar_users: "Users",
    sidebar_orders: "Orders",
    sidebar_analytics: "Analytics",

    // --- Order Statuses (Using lowercase_snake_case for consistency) ---
    status_delivered: "Delivered",
    status_pending: "Pending",
    status_cancelled: "Cancelled",
    status_processing: "Processing",

    // --- Table & Other UI text ---
    title_latestOrders: "Latest Orders",
    table_customer: "Customer",
    table_date: "Date",
    table_amountUSD: "Amount (USD)",
    table_status: "Status",

    // --- Customer Names (For demonstration. In a real app, names usually come from the DB) ---
    customerNames: {
      "Anna Harutyunyan": "Anna Harutyunyan",
      "Vahan Grigoryan": "Vahan Grigoryan",
      "Mariam Aslanyan": "Mariam Aslanyan",
      "Tigran Abrahamyan": "Tigran Abrahamyan",
      "Nare Mkrtchyan": "Nare Mkrtchyan",
    },

    // --- Chart Titles ---
    chart_monthlySales: "Monthly Sales",
    chart_sales: "Sales",
    ui_dashboard: "Dashboard",
    ui_otherData: "Other Data",
    ui_placeholderDescription:
      " This is placeholder text to be replaced with actual content.",
  },

  hy: {
    // --- Stat Card Titles ---
    stat_totalSales: "Ընդհանուր Վաճառքներ",
    stat_netRevenue: "Զուտ Եկամուտ",
    stat_customers: "Հաճախորդներ",
    stat_averageOrder: "Միջին Զամբյուղ",

    // --- Months (Armenian 3-letter abbreviations) ---
    mon_jan: "Հնվ", // Jan
    mon_feb: "Փտր", // Feb (changed from Փտ to Փտր)
    mon_mar: "Մրտ", // Mar
    mon_apr: "Ապր", // Apr
    mon_may: "Մայ", // May
    mon_jun: "Հնս", // Jun
    mon_jul: "Հլս", // Jul

    // --- Order Statuses ---
    status_delivered: "Առաքված",
    status_pending: "Սպասում է",
    status_cancelled: "Չեղարկված",
    status_processing: "Մշակվում է",

    // --- Sidebar Nav Items ---
    sidebar_dashboard: "Վահանակ",
    sidebar_users: "Օգտատերեր",
    sidebar_orders: "Պատվերներ",
    sidebar_analytics: "Վերլուծություն",

    // --- Table & Other UI text ---
    title_latestOrders: "Վերջին Պատվերներ",
    table_customer: "Հաճախորդ",
    table_date: "Ամսաթիվ",
    table_amountUSD: "Գումար (USD)",
    table_status: "Կարգավիճակ",

    // --- Customer Names ---
    customerNames: {
      "Anna Harutyunyan": "Աննա Հարությունյան",
      "Vahan Grigoryan": "Վահան Գրիգորյան",
      "Mariam Aslanyan": "Մարիամ Ասլանյան",
      "Tigran Abrahamyan": "Տիգրան Աբրահամյան",
      "Nare Mkrtchyan": "Նարե Մկրտչյան",
    },

    // --- Chart Titles ---
    chart_monthlySales: "Ամսական Վաճառքներ",
    chart_sales: "Վաճառք",
    ui_dashboard: "Վահանակ",
    ui_otherData: "Այլ Տվյալներ",
    ui_placeholderDescription:
      "Սա տեղապահ տեքստ է, որը պետք է փոխարինվի իրական պարունակությամբ:",
  },
};
