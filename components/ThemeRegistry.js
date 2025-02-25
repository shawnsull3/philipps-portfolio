'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Raleway', 'sans-serif'].join(','), // Poppins for body, Raleway for headings
    h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, letterSpacing: '0.05em' },
    h2: { fontFamily: 'Raleway, sans-serif', fontWeight: 600, letterSpacing: '0.05em' },
    h3: { fontFamily: 'Raleway, sans-serif', fontWeight: 500, letterSpacing: '0.03em' },
    body1: { fontFamily: 'Poppins, sans-serif' },
    body2: { fontFamily: 'Poppins, sans-serif' },
  },
  palette: {
    primary: {
      main: '#264653', // Elegant deep teal
      light: '#2A9D8F', // Vibrant turquoise
      dark: '#1B3A4B',
    },
    secondary: {
      main: '#E76F51', // Bold coral
      light: '#F4A261', // Warm sunset orange
      dark: '#D64933',
    },
    background: {
      default: '#F5F1E8', // Cream-ish background for a refined look
      paper: '#EAE0D5', // Slightly darker cream for UI elements
    },
    text: {
      primary: '#2D2D2D', // Dark gray for readability
      secondary: '#5E5E5E', // Muted gray for softer contrast
    },
    accent: {
      main: '#8A508F', // Stylish deep violet for a unique creative touch
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
