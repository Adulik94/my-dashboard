# Lexa Dashboard

A modern, responsive, and customizable dashboard built with **React**, **Tailwind CSS**, and **Vite**. Designed for real-time stats visualization, user management, and theme customization.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Dynamic Theming** – Light, Dark, and custom accent colors (`Lexa`, `Red`, `Teal`) with theme persistence.
- **Responsive Layout** – Works on desktop, tablet, and mobile.
- **Dashboard Cards** – Animated stat cards with wave background and icons.
- **Interactive Header** – Search bar, notifications, full-screen toggle, and profile menu.
- **Settings Sidebar** – Customize layouts, themes, and top bar colors.
- **SVG & PNG Integration** – Supports vector and raster assets for branding.
- **Smooth Animations** – Hover effects, card floating waves, and icon transitions.

---

## Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS, custom CSS for waves
- **Build Tool:** Vite
- **Icons:** Lucide React, React Icons
- **State Management:** React hooks (`useState`, `useMemo`, `useCallback`)
- **Assets:** SVG, PNG

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/leksa-dashboard.git
cd leksa-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at:

`http://localhost:5173`

Folder Structure

```bash
src/
├─ assets/ # Images, SVGs, logos
├─ components/ # Reusable components (Header, StatCard, Sidebar)
├─ context/ #ThemeContext and provider
├─ data/ #mockData
├─ hooks/ # Custom React hooks (useTheme)
├─ page/ # Main Dashboard
├─ style/ #styles
├─ utils/ # Helper functions (cn, pageContainer)
├─ App.jsx # Main app entry
├─ main.jsx # React DOM rendering
└─ index.css # Tailwind imports and custom CSS
```

## 🧩 Components

### 📊 StatCard

Animated statistic card with dynamic theming, wave background, and icon support.

**Props:**

- **`title`** — Card title
- **`value`** — Main statistic value
- **`change`** — Numeric change indicator
- **`isPositive`** — Boolean for up/down trend
- **`icon`** — Icon name  
  (`shopping-cart`, `wallet`, `users`, `package`)

---

### 🧭 Header

Fixed top navigation bar with essential dashboard controls.

**Includes:**

- Sidebar toggle
- Search input
- Fullscreen toggle
- Notifications button
- Profile menu (coming soon)
- Logo integration (PNG or SVG supported)

---

## 🎨 Customization

- **Themes**  
  Edit the `useTheme` hook or extend the Tailwind config to add new colors.

- **Cards**  
  Modify `StatCard.jsx` to change layout, shapes, colors, or animations.

- **Logo**  
  Replace `src/assets/logo.png` with your own brand logo  
  _(transparent PNG recommended)_.

- **Animations**  
  Use Tailwind’s `animate-[...]` syntax for floating, fade, or slide effects.

---

## 📄 License

**MIT License** © Adulik

---

> Made with ❤️ by Adulik
> Inspired by modern dashboards and playful branding.
