/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#dfdfdf',
        'blue': '#90e0ef',
        'light-blue': '#caf0f8',
        'grey': '#848B9A',
        'navy-blue': '#1560BD',
      },
      // fontFamily: {
      //   montserrat: ['Montserrat', 'sans-serif'],
      // },
      // fontWeight: {
      //   'montserrat-light': 300,
      // },
      screens: {
        "s": "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
