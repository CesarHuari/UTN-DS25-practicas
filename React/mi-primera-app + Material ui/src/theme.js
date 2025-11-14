import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8b4513',
      light: '#a0522d',
      dark: '#654321',
    },
    secondary: {
      main: '#d2691e', 
      light: '#ff9800',
      dark: '#bf360c',
    },
    accent: {
      main: '#f4a460', 
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#8b4513',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#8b4513',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#2c3e50',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#8b4513',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
          padding: '10px 24px',
        },
        contained: {
          backgroundColor: '#8b4513',
          '&:hover': {
            backgroundColor: '#d2691e',
          },
        },
        outlined: {
          borderColor: '#8b4513',
          color: '#8b4513',
          '&:hover': {
            backgroundColor: 'rgba(139, 69, 19, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bdc3c7',
            },
            '&:hover fieldset': {
              borderColor: '#8b4513',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8b4513',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
