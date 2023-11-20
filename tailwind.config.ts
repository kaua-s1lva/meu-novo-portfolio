import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#02A676',
        'primary-dark-green': '#003840',
        'second-dark-green': '#005A5B',
        'primary-itau-color': '#004990',
        'primary-labtestes-color': '#F2F5F7',
        'primary-teamgab-color': '#121212',
      },
    },
  },
  plugins: [],
}
export default config
