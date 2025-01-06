/** @type {import('tailwindcss').Config} */
import { themes } from './src/lib/theme'
import catppuccin from '@catppuccin/daisyui'

console.log(catppuccin("mocha"))

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },

  daisyui: {
    themes: [
      catppuccin("mocha"),
      ...themes.filter((i) => i !== "catway")
    ]
  },
  plugins: [require('daisyui')]
}
