/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "main-color-secondary": "#100a55",
        "violet-100": "#ede9fe",
        "slate-100": "#f1f5f9",
        "yellow-50": "#fefce8",
        "main-color-yellow": "#fcdd08",
        "main-color-black": "#000929",
        "green-100": "#dcfce7",
        "green-500": "#22c55e",
        "slate-900": "#0f172a",
        "main-color-primary": "#8247ff",
        "slate-400": "#64748b",
        mediumslateblue: "#9c61ff",
        "slate-50": "#f8fafc",
        "red-500": "#ef4444",
        "text-color-100": "#f9fafb",
        "slate-300": "#cbd5e1",
        "blue-50": "#eff6ff",
        honeydew: "#c2e3cf",
        "green-600": "#16a34a",
        gainsboro: "#dee0e3",
        "slate-200": "#e2e8f0",
        "slate-800": "#1e293b",
        lavender: "#ddd6fe",
        "violet-50": "#f5f3ff",
        darkslategray: "#475569",
        silver: {
          "100": "#b3bdc7",
          "200": "rgba(179, 189, 199, 0.09)",
        },
        "slate-800": "#1e293b",
        gray: "rgba(0, 9, 41, 0.8)",
        "greyscale-900": "#121a26",
      },
      spacing: {},
      fontFamily: {
        "text-sm-medium": "Inter",
      },
      borderRadius: {
        "481xl": "500px",
        "980xl": "999px",
        "80xl": "99px",
        "418xl-1": "437.1px",
        "7xs-4": "5.4px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xs: "12px",
      xl: "20px",
      "5xs": "8px",
      "7xl-2": "26.2px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}

