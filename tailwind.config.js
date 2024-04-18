/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans']
    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9'
      },
      animation: {
        slide: 'slide 16s infinite alternate ease-in-out'
      },
      keyframes: {
        slide: {
          '0%, 20%': { 'margin-left': '0%' },
          '25%, 45%': { 'margin-left': '-100%' },
          '50%, 70%': { 'margin-left': '-200%' },
          '75%, 100%': { 'margin-left': '-300%' }
        }
      }
    },
    width: {
      'fill-available': '-webkit-fill-available'
    },
    maskImage: {
      // Definiendo una utilidad personalizada llamada 'gradient-to-b'
      'mask-image': 'linear-gradient( white 80%, transparent)'
    },
    screens: {
      sm: '400px',

      md: '800px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: []
}
