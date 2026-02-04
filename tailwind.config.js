/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        coral: {
          50: '#fff5f2',
          100: '#ffe8e1',
          200: '#ffd5c8',
          300: '#ffb8a3',
          400: '#ff8f6f',
          500: '#ff6b42',
          600: '#ed4a20',
          700: '#c73a15',
          800: '#a33217',
          900: '#862f19',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ece4',
          200: '#d3d9ca',
          300: '#b5c0a7',
          400: '#96a483',
          500: '#7a8a66',
          600: '#5f6d4f',
          700: '#4a5640',
          800: '#3d4636',
          900: '#343c30',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}