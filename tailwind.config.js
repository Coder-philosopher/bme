import { fontFamily } from 'tailwindcss/defaultTheme'

const font = {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', ...fontFamily.serif],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        nunito: ['var(--font-nunito)', ...fontFamily.sans],
        sans: ['var(--font-nunito)', ...fontFamily.sans], // Make nunito default
      },
    },
  },
  plugins: [],
}
export default font
