/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nuxt/ui/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAE6EA',
          100: '#EFB2BF',
          200: '#E78CA0',
          300: '#DB5875',
          400: '#D5385A',
          500: '#CA0631',
          600: '#B8052D',
          700: '#8F0423',
          800: '#6F031B',
          900: '#550315',
          DEFAULT: '#CA0631'
        },
        red: {
          50: '#FAE6EA',
          100: '#EFB2BF',
          200: '#E78CA0',
          300: '#DB5875',
          400: '#D5385A',
          500: '#CA0631',
          600: '#B8052D',
          700: '#8F0423',
          800: '#6F031B',
          900: '#550315'
        },
        orange: {
          50: '#FFF4E6',
          100: '#FFDBB0',
          200: '#FFCA8A',
          300: '#FFB254',
          400: '#FFA333',
          500: '#FF8C00',
          600: '#E87F00',
          700: '#B56300',
          800: '#8C4D00',
          900: '#6B3B00'
        },
        black: {
          50: '#E9E9E9',
          100: '#B9B9B9',
          200: '#989898',
          300: '#686868',
          400: '#4b4b4b',
          500: '#1e1e1e',
          600: '#1b1b1b',
          700: '#151515',
          800: '#111111',
          900: '#0D0D0D'
        },
        grey: {
          50: '#FDFDFD',
          100: '#F9F9F9',
          200: '#F7F7F7',
          300: '#F3F3F3',
          400: '#F1F1F1',
          500: '#EDEDED',
          600: '#D8D8D8',
          700: '#a8a8a8',
          800: '#828282',
          900: '#646464'
        },
        green: {
          50: '#EEF5EA',
          100: '#C9E1BF',
          200: '#AFD29F',
          300: '#8ABE74',
          400: '#73B159',
          500: '#509E2F',
          600: '#49902B',
          700: '#397021',
          800: '#2C571A',
          900: '#224214'
        },
        yellow: {
          50: '#FFF9E7',
          100: '#FFEBB5',
          200: '#ffe291',
          300: '#FED55E',
          400: '#FECD3F',
          500: '#FEC00F',
          600: '#E7AF0E',
          700: '#B4880B',
          800: '#8C6A08',
          900: '#6B5106'
        },
        blue: {
          50: '#E6F1FA',
          100: '#B0D5F0',
          200: '#8AC0E9',
          300: '#54A3DF',
          400: '#3391D9',
          500: '#0076CF',
          600: '#006BBC',
          700: '#005493',
          800: '#004172',
          900: '#003257'
        }
      },
      backgroundColor: {
        'main-bg': '#F8FAFC'
      },
      borderColor: {
        'light-border': '#EDEDF0',
        'dark-border': '#CBD5E1'
      },
      fontFamily: {
        'sans': ['Montserrat Variable', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
