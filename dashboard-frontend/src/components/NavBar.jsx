import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IMAGE from '../images/logo.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleAddictionClick = () => {
    navigate('/addictionform');
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#0C6170', height:80 }}>
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src={IMAGE} alt="logo" style={{ width: 100, height: 100 }} />
        </Typography>
        <IconButton>
            <Button onClick={() => handleAddictionClick()} sx={{ color: 'white', height:80, margin:"50px" }}>
              Check Addiction Level
            </Button>
            <Avatar sx={{ bgcolor: '#DBF5F0'}}></Avatar>
        </IconButton>
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;