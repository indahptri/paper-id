/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#93C854',
      },
      backgroundColor: {
        'footerbg': 'linear-gradient(125deg, #257AB4 0.44%, #113955 96.26%, #113955 96.27%)',
        'herobg': 'linear-gradient(191deg, #4195D5 -45.71%, #3279AE 20.59%, #26628E 46.93%, #133F5D 106.93%)',
      },
      animation: {
        'bounce-slow': 'bounce2 2s ease-in-out 0s infinite alternate',
      },
      keyframes: {
        bounce2: {
          '0%': {transform: 'translateY(10px)'},
          '100%':{transform: 'translateY(-10px)'},
          // '10%, 30%, 50%, 70%': {transform: 'translateY(-8px)'},
          // '20%, 40%, 60%': {transform: 'translateY(8px)'},
          // '80%': {transform: 'translateY(6.4px)'},
          // '90%': {transform: 'translateY(-6.4px)'},
        }
      }
    },
  },
  plugins: [],
}
