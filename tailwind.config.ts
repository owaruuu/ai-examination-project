import { heroui } from "@heroui/theme";
import scrollbar from "tailwind-scrollbar";

import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/components/(button|spinner|ripple).js",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "footer-background": "#101010",
                "chat-background": "#202020",
                "hour-text": "#c7c7c7",
                "bot-message": "#3730a3",
                "user-message": "#374151",
                "message-divider": "#1f2937",
            },
        },
    },
    plugins: [heroui(), scrollbar({ nocompatible: true })],
} satisfies Config;
