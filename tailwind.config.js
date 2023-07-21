/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      normal: '0',
      wider: '.05em',
      midllewider: '.15em',
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/home/bg-hero.png')",
        'hero-pattern-90': "url('/home/bg-hero-90.png')",
        'destination-pattern': "url('/destination/bg-destination.png')",
        'crew-pattern': "url('/crew/bg-crew.png')",
      },
      colors: {
        'dark-sky': '#0B0D17',
        'blue-sky': '#D0D6F9',
        'gray-sky': '#979797',
      }
    },
  },
  plugins: [],
}
