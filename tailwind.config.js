/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      borderRadius: {
        'custom': '0% 0% 50% 50% / 25% 25% 25% 25%',
      },
      backgroundImage:{
        'hero-pattern':'url("/src/assets/bg.jpeg")'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rounded-custom': {
          'border-radius': '0% 0% 50% 50% / 25% 25% 25% 25%',
        },
      })
    },
  ],
}


