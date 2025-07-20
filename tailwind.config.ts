import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
    fontFamily: {
      sans: ['var(--font-sf-pro-display)', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
    },
    colors: ({colors}) => ({
      background: '#111111',
      foreground: '#EEEEEE',
      gray: {
        DEFAULT: '#B4B4B4',
        card: '#2A2A2A',
        button: '#202020',
      },

      neutral: colors.neutral,
      transparent: colors.transparent,
    }),
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
} satisfies Config
