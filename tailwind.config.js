/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      primary: '#25616D',
      secondary: '#3DA4A1',
      white: '#FFFFFF',
      black: '#000000',
      neutral: '#F5F5F5',
      darkShade: '#1A4D4D',
      error: '#FF4C4C',
      info: '#17A2B8',
      success: '#28A745',
    },
    fontFamily: {
      poppins: '"Poppins", sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

