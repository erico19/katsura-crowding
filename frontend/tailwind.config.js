/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#00205B",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              backgroundImage: 'linear-gradient(90deg, #66E1FF, #66E1FF)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% .25em',
              backgroundPosition: '0 80%',
              textDecoration: 'none',
              '&:hover': {
                backgroundSize: '100% 100%',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
