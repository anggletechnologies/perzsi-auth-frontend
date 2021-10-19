import {   createTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
// import colors from './colors'

const theme = createTheme({
  // colors,
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3F9F98',
      dark:'#2D736E'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#000B40',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFFFFF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    // background:{
    //   default:"#FFFFFF",
    //   paper:"red"
    // }
  },
  typography:{
    fontFamily:'Raleway',
    ...typography
  }
});

export default theme;
