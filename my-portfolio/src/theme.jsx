import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Red color for primary elements
    },
    secondary: {
      main: '#f44336', // Light red for secondary elements
    },
    background: {
      paper: '#121212', // Dark background for paper elements
      default: '#121212', // Dark default background
    },
    text: {
      primary: '#ffffff', // White text on dark background
      secondary: '#bdbdbd', // Light gray text for secondary
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
