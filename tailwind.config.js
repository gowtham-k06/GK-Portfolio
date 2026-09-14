/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: "#F8F9FA",
          subtle: "#F1F3F5",
          border: "#E9ECEF",
          grid: "rgba(0, 0, 0, 0.05)"
        },
        figma: {
          blue: "#0D99FF",
          purple: "#7B61FF",
          red: "#FF7262",
          mint: "#00C48C",
          yellow: "#FFC700",
          orange: "#FF8A00",
          charcoal: "#1E1E1E",
          subtext: "#64748B"
        },
        editorial: {
          bg: "#FAF9F5",
          card: "#FFFFFF",
          border: "#E8E6E1",
          borderSubtle: "#F0EEEA",
          ink: "#141414",
          secondary: "#4A4844",
          muted: "#7A7873",
          subtle: "#F3F1EC",
          accent: "#FD5D07",
          accentHover: "#E54F03",
          accentSubtle: "#FFF0E8"
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'paper': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'paper-hover': '0 8px 24px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04)',
        'figma-selected': '0 0 0 1.5px #0D99FF, 0 10px 25px -5px rgba(13, 153, 255, 0.15)',
        'crisp': '0 2px 4px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)'
      }
    },
  },
  plugins: [],
}
