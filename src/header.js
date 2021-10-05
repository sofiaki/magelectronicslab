import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from './mel2.png';
import ContactPhoneRounded from '@mui/icons-material/ContactPhoneRounded';
import Button from '@mui/material/Button'



const Header =()=>{
    return(
        <Grid container sx={{minHeight:'25vh',bgcolor:'#aed900'}} p="3px">
            <Grid item xs={12} md={12} lg={12}>
                <Box m={2} >
                    <Avatar alt="Mag Electronics Lab" src={logo} sx={{width: 80, height: 80 }}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={10} lg={10}>
                <Typography variant="h3">Mag Electronics Lab</Typography>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
                <Box sx={{m:'2px'}}><Typography variant="h5">Άγγελος Μαγούλης</Typography></Box>
                <Button variant="contained" href="#footer" sx={{bgcolor: '#a1c100', textTransform:'none', m:'3px', '&:hover':{bgcolor:'#90b000'}}}>
                <Typography variant="subtitles1" display={{xs:'none', md:'block'}}>Επικοινωνήστε μαζί μας.</Typography>
                <ContactPhoneRounded></ContactPhoneRounded>
                </Button>
            </Grid>
        </Grid>
    )
}
export default Header;