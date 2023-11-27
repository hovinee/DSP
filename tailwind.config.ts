import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        '2xl': '1800px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        C0C0C0: '#C0C0C0',
      },
      fontSize: {
        '10': [
          '1rem',
          {
            lineHeight: '1.498rem',
          },
        ],
        '11': [
          '1.1rem',
          {
            lineHeight: '1.498rem',
          },
        ],
        '12': [
          '1.2rem',
          {
            lineHeight: '1.6rem',
          },
        ],
        '14': [
          '1.4rem',
          {
            lineHeight: '1.907rem',
          },
        ],
        '15': [
          '1.5rem',
          {
            lineHeight: '2.172rem',
          },
        ],
        '16': [
          '1.6rem',
          {
            lineHeight: '2.179rem',
          },
        ],
        '17': [
          '1.7rem',
          {
            lineHeight: '2.068rem',
          },
        ],
        '18': [
          '1.8rem',
          {
            lineHeight: '2.178rem',
          },
        ],
        '21': [
          '2.1rem',
          {
            lineHeight: '2.724rem',
          },
        ],
        '23': [
          '2.3rem',
          {
            lineHeight: '2.8rem',
          },
        ],
        '25': [
          '2.5rem',
          {
            lineHeight: '3.041rem',
          },
        ],
        '31': [
          '3.1rem',
          {
            lineHeight: '4.543rem',
          },
        ],
        '37': [
          '3.7rem',
          {
            lineHeight: '5.358rem',
          },
        ],
        '54': [
          '5.4rem',
          {
            lineHeight: '7.95rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
