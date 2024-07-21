import { type Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        foreground: colors.zinc[900],
        background: colors.white,
        "muted-foreground": colors.zinc[500],
        muted: colors.zinc[400],
        accent: colors.blue,
        ring: colors.blue[500],
        primary: colors.zinc,
        border: colors.zinc[200],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        "btn-default":
          "inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "btn-outline":
          "inset 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config
