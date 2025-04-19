module.exports = {
    content: [
      './src/**/*.{html,js,svelte}', // Adjust the paths to match your SvelteKit project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8',    // Custom primary color (blue)
          secondary: '#9333EA',   // Custom secondary color (purple)
          accent: '#F59E0B',      // Custom accent color (orange)
          customGray: '#F3F4F6',  // Custom light gray color
        },
        fontFamily: {
          neueMontreal: ['PPNeueMontreal', 'sans-serif'],
          editorialOld: ['PPEditorialOld', 'serif'],
        },
      },
    },
    plugins: [],
  }
  