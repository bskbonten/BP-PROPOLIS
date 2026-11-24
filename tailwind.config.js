export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Nama token dipertahankan; nilainya kini palet merah ke putih.
      colors: { ivory: '#FFFFFF', beige: '#FDEEEF', champagne: '#F3C1C5', cocoa: '#A8102B', charcoal: '#2A1114', crimson: '#7E0C20' },
      fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Jost', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
