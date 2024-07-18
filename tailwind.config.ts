import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

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
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
