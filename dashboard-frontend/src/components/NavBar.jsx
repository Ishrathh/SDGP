import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function NavBar() {

  return (
    <AppBar position="static" sx={{ bgcolor: '#0C6170' }}>
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Logo here
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">History</Button>
        <Button color="inherit">Preferences</Button>
        <Button color="inherit">FAQs</Button>
        <IconButton>
            <Avatar sx={{ bgcolor: '#DBF5F0' }}></Avatar>
        </IconButton>
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;