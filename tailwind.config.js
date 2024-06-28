/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d3d6db',
        'dark-gray': '#3a4750',
        'black-gray': '#303841',
        'cool-red': '#be3144',
      },
    },
  },
  plugins: [],
}

