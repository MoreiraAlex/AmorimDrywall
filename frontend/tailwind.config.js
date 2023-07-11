/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: '#bc8a44',
        light: '#dcb36f',
      },
      fill: {
        base: '#bc8a44',
        light: '#dcb36f',
      },
      textColor: {
        baseColor: '#bc8a44',
        light: '#dcb36f',
      },
      fontFamily: {
        primary: 'var(--font-workSans)',
        alt: 'var(--font-roboto)'
      },
      borderColor: {
        base: '#bc8a44',
        light: '#dcb36f',
      },
      animation: {
        teste: 'teste 1s linear' 
      },
      keyframes: {
        teste: {
          '0%': { transform: 'translate(-100%,0)'  },
          '100%': { transform: 'translate(0,0)'  },
        }
      }
    },
  },
  plugins: [],
}
