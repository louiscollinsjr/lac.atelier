/** @type {import("tailwindcss").Config} */
import fluid, {extract, screens, fontSize} from 'fluid-tailwind';

module.exports = {
  content: {
    files:['./src/**/*.{js,jsx,ts,tsx}', 
      './index.html'], extract
  },
  theme: {
    extend: {
      fontFamily: {
        didot: ['Didot', 'serif'],
        didotTitle: ['Didot Title', 'serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        space: ['Space Mono', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}