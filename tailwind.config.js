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
        '6xl': '5px 5px 30px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'blue': '#4187f6',
        'dark-blue':'rgb(30 41 59)',
        'light-blue': '#0399ec',
        'orange': '#ff5f45',
        'darker-blue': '#005069',
        'pink': '#fd6c7c',
        'yellow': '#fec402', 
      },
      borderRadius: {      
        'large': '50%',    
      },
      spacing: {        
        'l30': '-30px',      
      },
      fontSize:{
        '10xl':'10rem',
      }, 
      screens: {
        'ph': '375px',
      },
      zIndex: {
        '9999': '9999',      
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};