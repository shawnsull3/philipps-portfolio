import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: { xs: 'red', md: '#333' } }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/projects">Projects</Button>
        <Button color="inherit" component={Link} href="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
