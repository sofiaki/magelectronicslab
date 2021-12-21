import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import makeStyles from '@mui/styles/makeStyles'; 

const useStyles= makeStyles(theme=>({
    facebookIcon: {
        fontSize: '2rem',
        color: 'blue',
        '&:hover':{
            fontSize: '2.5rem',
            cursor: 'pointer',
            boxShadow: '1'
        }
    }
    })
)
const address= ['Μαιζώνος 307 και Κυρίλλου Αρχιεπισκόπου',
    'Πάτρα, 26222',
    'magelectronicslab@gmail.com'
];


const handleClick= (event)=>{
    window.open('https://www.facebook.com/Mag-Electronics-Lab-1820753208215442/', '_blank');
}

const Footer=()=>{
    const iconClass=useStyles();
    return(
        <Grid id="footer" container  justifyContent="center" sx={{position: 'relative', bottom:'0', p:5}}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box sx={{m:'2px', textAlign: 'center'}}>
                    {address.map((i)=>(
                        <Typography key={i} variant="subtitle1" fontFamily="sans-serif">{i}</Typography>
                        )
                    )
                    }
                    <Typography variant="subtitle1" fontFamily="sans-serif"><a href="tel:+302610318995">2610318995</a></Typography>
                    <Typography  variant="subtitle1" fontFamily="sans-serif"><a href="tel:+306976751751">6976751751</a></Typography>

                    <FacebookIcon onClick={handleClick} className={iconClass.facebookIcon} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box sx={{m:'2px', textAlign:'center'}}>
                    <iframe title='MagElectronicsLabLocation' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1566.930525109291!2d21.7270608!3d38.2363315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67fe890bda017228!2sMagElectronicsLab!5e0!3m2!1sel!2sgr!4v1633351660210!5m2!1sel!2sgr" width="300" height="225" style={{border:0}} loading="lazy"></iframe>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Footer;