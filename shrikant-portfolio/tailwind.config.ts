import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        card: '#111114',
        surface: '#18181B',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        text: '#FAFAFA',
        'text-secondary': '#A1A1AA',
      },
    },
  },
  plugins: [],
}

export default config