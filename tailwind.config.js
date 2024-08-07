/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
     },
     backgroundImage: {
      'login-img': "url('./src/assets/SMRS-sign-up-bg.png')",
    }
    },
  },
  plugins: [],
}

