import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IMAGE from '../images/logo.png';

function NavBar() {

  return (
    <AppBar position="static" sx={{ bgcolor: '#0C6170', height:80 }}>
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src={IMAGE} alt="logo" style={{ width: 100, height: 100 }} />
        </Typography>
        <IconButton>
            <Avatar sx={{ bgcolor: '#DBF5F0'}}></Avatar>
        </IconButton>
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;