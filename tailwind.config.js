/** tailwind.config.js */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Python-themed palette (blue + yellow accents)
        accent: '#3776AB',
        accent2: '#FFD43B',
        pythonBlue: '#306998',
        pythonYellow: '#FFD43B',
        peach: '#F6E7DB',
        lavender: '#E9E7F6'
      },
      borderRadius: { 'lg': '14px' },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3776AB 0%, #5B96D9 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFD43B 0%, #FFC700 100%)',
      }
    }
  },
  plugins: []
}
