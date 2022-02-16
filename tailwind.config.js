module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "quicksand":["Quicksand"],
      },
      boxShadow: {        
        '3xl': '10px 0 0 #4187f6', 
        '4xl': '15px 15px 0 #4187f6',     
        '5xl': '15px -15px 0 #4187f6',
      },
      colors: {
        'blue': '#4187f6',
        'dark-blue':'rgb(30 41 59)',
      },
      borderRadius: {      
        'large': '50%',    
      },
      spacing: {        
        'l30': '-30px',      
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};