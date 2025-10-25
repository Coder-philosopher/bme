import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans], // Inter as default
        inter: ['var(--font-inter)', ...fontFamily.sans],
        playfair: ['var(--font-playfair)', ...fontFamily.serif],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        nunito: ['var(--font-nunito)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
