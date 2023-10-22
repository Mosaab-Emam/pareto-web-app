import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    animation: {
      "custom-ping": "ping 5s ease-in forwards",
    },
  },
  plugins: [],
} satisfies Config;
