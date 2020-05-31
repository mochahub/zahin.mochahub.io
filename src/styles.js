import { createTheme } from 'react-dark-theme'; 
export const lightTheme = {
    background: 'white',
    text: 'black',
  }
   
export const darkTheme = {
    background: '#111111',
    text: 'white',
  }
  
export default createTheme(darkTheme, lightTheme)