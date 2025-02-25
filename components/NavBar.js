"use client";

import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Steph Philipps
        </Typography>
        
        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={Link} href="/">Home</Button>
          <Button color="inherit" component={Link} href="/projects">Projects</Button>
          <Button color="inherit" component={Link} href="/writing-samples">Writing Samples</Button>
          <Button color="inherit" component={Link} href="/contact">Contact</Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose} component={Link} href="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/projects">Projects</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/writing-samples">Writing Samples</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} href="/contact">Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
