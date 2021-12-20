import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from './mel2.png';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header =()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      
      setAnchorEl(null);
    };
    return(
    <Grid container id="header" item>
        <Grid xs={12} md={6}  align="center">
            <Avatar alt="Mag Electronics Lab" src={logo} sx={{width: 80, height: 80 }}/>
            <Typography variant="h3" >Mag Electronics Lab</Typography>
            <Typography variant="h5">Άγγελος Μαγούλης</Typography>
        </Grid>
        <Grid id="menu" item xs={12} md={6} lg={6} m="auto">
            <Box sx={{m:'2px'}} display={{xs:'none', md:'block'}}>
                {menu.map((i)=>(
                    <Button id="hBtn" href={i.id}>{i.value}</Button>))
                }
            </Box>
            <Box display={{xs:'block', md:'none'}}>
            <Button
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color:"black"}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          {menu.map((i)=>(
            <MenuItem href={i.id} onClick={handleClose}>{i.value}</MenuItem>))
        }
      </Menu>
            </Box>
        </Grid>
        
        
    </Grid>
    )
}
export default Header;
const menu= [
    {
        id: "#header", value: "Αρχική"
    } , 
    {
        id: "#main", value:"Υπηρεσίες"
    } ,
    {
         id: "#footer", value: "Επικοινωνία"
    }
    ]
