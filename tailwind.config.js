/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      storybook: ["var(--font-inter)", "Inter"],
      body: ["var(--font-inter)", "Inter"],
    },
    colors: {
      primary: {
        DEFAULT: "#3B71FE",
        100: "#EBF1FF",
        200: "#D8E3FF",
        300: "#C4D4FF",
        400: "#B1C6FF",
        500: "#769CFE",
      },
      primaryBlack: {
        DEFAULT: "#141416",
        100: "#E6E8EC",
        200: "#B1B5C3",
        300: "#777E90",
        400: "#353945",
        500: "#23262F",
      },
      secondaryOrange: {
        DEFAULT: "#FA8F54",
        100: "#FFF4EE",
        200: "#FEE9DD",
        300: "#FDD2BB",
        400: "#FDC7A9",
        500: "#FCB187",
      },
      secondaryYellow: {
        DEFAULT: "#FFD166",
        100: "#FFFAF0",
        200: "#FFF6E0",
        300: "#FFF1D1",
        400: "#FFE8B3",
        500: "#F5B318",
      },
      secondaryPest: {
        DEFAULT: "#F2FBFA",
        100: "#F2FBFA",
        200: "#E5F6F5",
        300: "#D8F2F1",
        400: "#CBEEEC",
        500: "#B2E5E2",
      },
      success: {
        DEFAULT: "#58C27D",
        100: "#EEF9F2",
        200: "#DEF3E5",
        300: "#CDEDD8",
        400: "#BCE7CB",
        500: "#8AD4A4",
      },
      failure: {
        DEFAULT: "#FF6370",
        100: "#FFEFF1",
        200: "#FFE0E2",
        300: "#FFD0D4",
        400: "#FFC1C6",
        500: "#FF929B",
      },
      white: {
        DEFAULT: '#ffffff'
      }
    },
    extend: {
      colors: {
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
