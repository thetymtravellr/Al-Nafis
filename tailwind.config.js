module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-title': "url('/src/Assets/images/icons/download (10).png')",
      },
      fontFamily: {
        'patua' : ['Patua One', 'cursive'],
        'poppins' : ['Poppins', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif']
      },
      keyframes: {
        'up-down': {
            '0%': {
              transform: 'translateY(0)',
             
            },
            '50%' : {
              transform: 'translateY(-10px)',
           
            },
            '100%': {
                transform: 'translateY(0)',
               
            },
        }
    },
    animation: {
        'up-down': 'up-down 5s ease-in-out infinite'
    }
    },
  },
  plugins: [
  ],
}