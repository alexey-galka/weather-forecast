/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'color-white': '#ffffff',
        'color-blue-main': '#2a4bde',
        'color-blue-deep': '#122fbe',
        'color-blue-light': '#5975f7',
        'color-blue-lightest': '#dee5fe',
        'color-grey': '#c4c4c4',
        'color-light-grey': '#f7f8ff',
        'color-transparent': 'rgba(0, 0, 0, 0)',

        'color-label-base': '#4766f8',
        'color-label-hover': '#627eff',
        'color-label-active': '#122fbe',
        'color-label-hover-checked': '#1b39cb',

        'color-shadow-main': '#b6c3fc',
        'color-shadow-second': '#a8b6f4',

        'color-input-base': '#122fbe',
        'color-input-hover': '#1b39cb',
        'color-input-focus': '#f7f8ff',

        'color-text-white': '#ffffff',
        'color-text-light-white': "rgba(255, 255, 255, 0.8)",
        'color-text-main': '#4e6faa',
        'color-text-light-blue': 'rgba(78, 111, 170, 0.8)',
        'color-text-help': 'rgba(78, 111, 170, 0.5)',
        'color-text-grey': '#c3d0e7',
        'color-text-input': '#4766f8',
        'color-text-placeholder': '#4969f8',

        'color-icon-blue': '#73bcfe',
        'color-icon-grey': '#c3d0e7',
        'color-icon-orange': '#ffa215',

        'color-border': '#c3d0e7',
      }
    },
  },
  plugins: [],
}

