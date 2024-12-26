import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './vueform.config.ts',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['quicksand', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#59c3c8', // Lavender
          light: '#a4f2f6',   // Light variant
          dark: '#3b8e94',    // Dark variant
        },
        success: '#3ecd64',
        completed: '#3ea4cd',
        canceled: '#959595',
        warning: '#edae56',
        danger: '#d03931',
        error: '#d03931',
      },
    },
  },
  darkMode: 'class', // Disable automatic dark mode
  plugins: [
    require("@tailwindcss/typography")
  ],
};
