import NavBar from '../components/NavBar';
import { CssBaseline } from '@mui/material';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
