import { createTheme } from 'react-dark-theme'; 
export const lightTheme = {
    background: 'white',
    text: 'black',
    highlight:'#e963a6'
  }
   
export const darkTheme = {
    background: '#111111',
    text: 'white',
    highlight:'#e963a6'
  }
  
export default createTheme(darkTheme, lightTheme)