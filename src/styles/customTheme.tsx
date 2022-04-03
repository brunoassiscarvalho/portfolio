
import { createTheme, Theme } from "@mui/material";
import { grey, green, lime, blueGrey, lightBlue } from "@mui/material/colors";
import { ptBR } from '@mui/material/locale';

export const defaultTheme: Theme = createTheme({
  components: {

    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'lowercase',
          padding: '1rem',
        }
      }
    },
  },
  palette: {
    primary: {
      main: blueGrey[800]
    },
    secondary: {
      main: lightBlue[800],
    },
    background: {
      default: grey[300]
    }
  },
  typography: {    
    subtitle1: {
      fontSize: 12,
    },
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },

}, ptBR);

export const matrixTheme: Theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'lowercase',
          padding: '1rem',
        }
      }
    },
  },
  palette: {
    primary: {
      main: green[900]
    },
    secondary: {
      main: lime[800],
    },
    background: {
      paper: grey[800],
      default: grey[900]
    },
    text: { primary: green[200], secondary:green[400] }
  },
  typography: {
    fontFamily: [
      'Roboto Slab',
      'serif',
    ].join(','),
  },

}, ptBR);

const themes: any = {
  defaultTheme,
  matrixTheme
}

export default themes;
