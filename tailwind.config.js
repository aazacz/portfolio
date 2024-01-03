/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   
  ],
  theme: {
    extend: {


      fontFamily:{
        Oswald:['Oswald', 'sans-serif'],
        PT_sans:[ 'PT Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "palered-10": '#ff0000',
        "blue": '#0000ff',
        "MainBlue": '#0F1624',
          },
  
    },
  },
  
  plugins: [],
}
