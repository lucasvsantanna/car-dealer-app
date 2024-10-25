import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0369A1',
        },
        neutral: {
          DEFAULT: '#F3F4F6',
          light: '#FFFFFF',
          dark: '#D1D5DB',
        },
        disabled: {
          bg: '#4B5563',
          text: '#9CA3AF',
        }
      },
    },
  },
  plugins: [],
};
export default config;
