import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import theme from './src/lib/theme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cterm-0': theme.colors.cterm0,
        'cterm-1': theme.colors.cterm1,
        'cterm-2': theme.colors.cterm2,
        'cterm-3': theme.colors.cterm3,
        'cterm-4': theme.colors.cterm4,
        'cterm-5': theme.colors.cterm5,
        'cterm-6': theme.colors.cterm6,
        'cterm-7': theme.colors.cterm7,
        'cterm-8': theme.colors.cterm8,
        'cterm-9': theme.colors.cterm9,
        'cterm-10': theme.colors.cterm10,
        'cterm-11': theme.colors.cterm11,
        'cterm-12': theme.colors.cterm12,
        'cterm-13': theme.colors.cterm13,
        'cterm-14': theme.colors.cterm14,
        'cterm-15': theme.colors.cterm15,
      },
      fontFamily: {
        "theme-mono": ['VT323', ...fontFamily.mono]
      },
    },
  },
  plugins: [],
} satisfies Config
