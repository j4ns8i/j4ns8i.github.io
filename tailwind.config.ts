import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cterm-0': '#15171d',
        'cterm-1': '#d4737f',
        'cterm-2': '#90b782',
        'cterm-3': '#ffcda4',
        'cterm-4': '#86a5be',
        'cterm-5': '#8f729a',
        'cterm-6': '#76af9d',
        'cterm-7': '#5d6068',
        'cterm-8': '#3b3e46',
        'cterm-9': '#c45361',
        'cterm-10': '#607f55',
        'cterm-11': '#d6ae86',
        'cterm-12': '#4b799e',
        'cterm-13': '#9b68b3',
        'cterm-14': '#487e6d',
        'cterm-15': '#c7d0e0',
      },
      fontFamily: {
        theme_mono: ['VT323', ...fontFamily.mono]
      },
    },
  },
  plugins: [],
} satisfies Config
