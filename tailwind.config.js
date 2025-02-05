
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {




      keyframes: {
        popup: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
      },
      animation: {
        popup: 'popup 1s ease-in-out infinite',
        'popup-twice': 'popup 2s ease-in 2',
        'popup-once': 'popup 2s ease-in 1',
      },


      fontFamily: {
        istok: ["'Istok_Web'", "sans-serif"], // Define Istok_Web for headings
        
        KohSantepheap: ["'KohSantepheap'", "sans-serif"], // Define Quantico for paragraphs
      },


         


      screens: {
        zIndex: {
          '60': '60',
          '9999': '9999', // Custom high z-index value
        },
        screens: {
          // Reuse Tailwind's default breakpoints
          am: '400px',
          sm:  '550px',  
          md:  '768px' , 
          lg:  '1024px', 
          xl:  '1280px',
        },



      },
      borderImage: {
        'custom-gradient1': 'linear-gradient(180deg, #6D4CFF 0%, #00C6FF 100%);', 
      
        'custom-gradient2': 'linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%);', 
      },
      backgroundImage: {


      'text-custom-gradient': ' linear-gradient(95deg, #00FFED 0%, #A50093 75%  ,rgba(165, 0, 146, 0.5) 100%);',
        'button-custom-gradient': ' linear-gradient(90deg, #6D4CFF 0%, #00C6FF 100%);',
        'custom-gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,161,0,1) 100%); ',
        'usecase-gradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,161,0,0.13778011204481788) 100%)',
        'usecase-gradient2': 'linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%)',
        
 


       
 

        

       
      },


      scrollbar: {
        width: {
          thin: '1px', // Adjust width as needed background: linear-gradient(0deg, #D9D9D9, #D9D9D9),
          
          
        },


        color: {
          track: 'bg-gray-200', // Track color
          thumb: 'bg-blue-500', // Thumb color
          hover: 'bg-blue-700', // Thumb hover color
        },
      },
      
      boxShadow: {
        'custom-drop': '0px 0px 15px #00FFED', 
        'custom-drop2': 'inset 0px -1px 20px 3px #00FFED;', 
        'custom-inner': 'inset 0px 4px 5px 5px 0.5  #00FFED', // Inner shadow
        'custom-purple': '0px 0px 25px 23px rgba(255, 161, 0, 1)',
        'custom-token': '0px 0px 20px 11px rgba(255, 237, 73, 1)',
        'inner-custom': 'inset 0 0 18px #ffa100',
      },




      // roadmap card border properties
   
    }
    
  },
  plugins: [ require('tailwind-scrollbar')  ],
}