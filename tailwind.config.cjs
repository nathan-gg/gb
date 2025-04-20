module.exports = {
  content: [
    './src/**/*.{html,js,ts,svelte}', // Adjust the paths to match your SvelteKit project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2310',    // dark green for main theme
        secondary: '#E0B87A',  // gold
        darkText: '#355128',   // dark green text (Headers)
        lightText: '#768669',  // light green text (body)
      },
      fontFamily: {
        // neueMontreal: ['PPNeueMontreal', 'sans-serif'],
        // editorialOld: ['PPEditorialOld', 'serif'],
        DMSans: ['DMSans', 'sans-serif'],
        instrument: ['instrument', 'serif'],
      },
    },
  },
  plugins: [],
}
