import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "from-purple-400", "to-pink-400",
    "from-blue-400", "to-cyan-400",
    "from-orange-400", "to-yellow-400",
    "from-pink-400", "to-rose-400",
    "from-cyan-400", "to-teal-400",
    "from-yellow-400", "to-amber-400",
    "from-green-400", "to-emerald-400",
    "from-violet-400", "to-purple-400",
    "from-indigo-400", "to-blue-400",
    "from-orange-400", "to-red-400",
    "from-teal-400", "to-green-400",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
