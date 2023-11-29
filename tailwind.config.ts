import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        C0C0C0: '#C0C0C0',
        D9D9D9: '#D9D9D9',
      },
      fontSize: {
        '12': [
          '1.2rem',
          {
            lineHeight: '1.6rem',
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
        '31': [
          '3.1rem',
          {
            lineHeight: '4.543rem',
          },
        ],
        '35': [
          '3.5rem',
          {
            lineHeight: '5.068rem',
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
        '60': [
          '6rem',
          {
            lineHeight: '8.688rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
