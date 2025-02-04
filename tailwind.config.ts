import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/components/spinner.js",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "bot-message": "#3730a3",
                "user-message": "#374151",
                "message-divider": "#1f2937",
            },
        },
    },
    plugins: [heroui()],
} satisfies Config;
