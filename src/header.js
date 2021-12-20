import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from './mel2.png';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
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
        <Grid item xs={12} md={6}  align="center">
            <Avatar alt="Mag Electronics Lab" src={logo} sx={{width: 80, height: 80 }}/>
            <Typography variant="h3" >Mag Electronics Lab</Typography>
            <Typography variant="h5">Άγγελος Μαγούλης</Typography>
        </Grid>
        <Grid id="menu" item xs={12} md={6} lg={6} m="auto">
            <Box sx={{m:'2px'}} display={{xs:'none', md:'block'}}>
                {menu.map((i)=>(
                    <a class="hBtn" href={i.key}>{i.value}</a>))
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
                id="drop-down-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                  {menu.map((i)=>(
                    <MenuItem onClick={handleClose}><a href={i.key}>{i.value}</a></MenuItem>))
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
        key: "#header", value: "Αρχική"
    } , 
    {
        key: "#main", value:"Υπηρεσίες"
    } ,
    {
         key: "#footer", value: "Επικοινωνία"
    }
    ]
