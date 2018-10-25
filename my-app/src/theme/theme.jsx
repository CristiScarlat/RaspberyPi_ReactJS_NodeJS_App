import {  createMuiTheme } from '@material-ui/core/styles';
export default createMuiTheme({
  palette: {
    primary: {
      main: '#2EB998',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#0E494E'
    }
  },
  typography: {
    useNextVariants: true,
  }
});