/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'#2D9596',
        'titleblue':'#006769',
        'crystalteal':'#006883',
        'icyteal':'#B5C4C0',
        'herodiv':'#071952',
        /* 'bluetheme':'#E8FFFF', */
        'bluetheme':'white',
        'darkbluetheme':'#11009E',
        'red':'#ff0000',
        'greentheme':'#00DFA2',
        'cards':'#FFE5E5',
        'footer':'#4b91ad',
       'tealtext':'#37B7C3', 
       'yellowfooter':'#FFCD4B',
       'yellowtheme':'#FF4B91',
        'goldtheme':'#FFEA20',

      },

      backgroundImage: {
        
        'team_work':"url('/src/images/2151231479.jpg')",
        'social':"url('/src/images/senior-women-celebrating-friendship-park.jpg')",
        'personal':"url('/src/images/adult-male-waiting-recovery-session-start.jpg')",
        'doctor':"url('/src/images/2151231479.jpg')",
        'hands':"url('/src/images/2151231389.jpg')",
        'close':"url('/src/images/2151231486.jpg')",
        'close1':"url('/src/images/20727.jpg')",
        'hands1':"url('/src/images/2151224188.jpg')",
        'doctor1':"url('/src/images/2151224184.jpg')"
      },

      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      },

      

      
    },
    
  },
  plugins: [require('flowbite/plugin'),
  require('tailwind-scrollbar-hide')],
}

