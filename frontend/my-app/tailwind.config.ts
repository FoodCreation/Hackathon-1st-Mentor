/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        shikanoko: {
          "primary": "rgb(239 68 68)",
          "primary-content": "rgb(254 226 226)",
          "secondary": "#e3e3e2",
          "base-100": "rgb(250 250 249)",
          "neutral": "rgb(82 82 82)"
        },
      },
    ],
  },
}