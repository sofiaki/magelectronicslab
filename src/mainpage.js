import React from 'react';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Grid';




    
const Main = ()=>{

    let mystring=`Επισκευή κάθε είδους ηλεκτρονικών πλακετών`
    //const isScreenSmall= 
    return(
        <Grid container direction='column'>
            <Grid item xs={1} sx={{m:2}}>
                <Box textAlign="center">
                    <Typography variant='h4' sx={{fontFamily: 'Monospace', m:3}}>{mystring}</Typography>
                    <Typography variant='body1' sx={{m:1}}>Επισκευάζουμε και προγραμματίζουμε πλακέτες οχημάτων, επαγγελματικών μηχανημάτων, οικιακών συσκευών, Η/Υ και περιφεριακών.</Typography>
                </Box>
            </Grid>
            <Grid item sx={{m:2}}>
                <Box display="flex" justifyContent="center">
                    <ImageList 
                        sx={{maxWidth:800, maxHeight: 450}}
                        variant={'quilted'}
                        cols={3}
                        rowHeight={220}
                    >
                        {
                            services.map((i)=>(
                                <ImageListItem key={i.img} cols={i.cols || 1} rows={i.rows || 1}>
                                    <img src={i.img} alt={i.title} title={i.title} loading="lazy" />
                                
                                    <ImageListItemBar 
                                        title={i.title}
                                        sx={{textAlign:'center', bgcolor: 'rgb(147, 209, 0, 0.8)','& .MuiImageListItemBar-title':{whiteSpace: 'normal'} }}
                                        
                                    />
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Main;
const services=[
    {
        img: `${process.env.PUBLIC_URL}/assets/images/diagnostic-car-computer.jpg`,
        title: 'Επισκευή εγκεφάλων αυτοκινήτων',
        cols: 2
    },
    {
        img: `${process.env.PUBLIC_URL}/assets/images/appliance.jpg`,
        title:'Επισκευή πλακετών ηλεκτρικών συσκευών'
    },
    
    {
        img: `${process.env.PUBLIC_URL}/assets/images/car-keys.jpg`,
        title: 'Immobilizer'
    },
    
    {
        img: `${process.env.PUBLIC_URL}/assets/images/motherboard.jpg`,
        title:'Επισκευή Η/Υ',
        cols: 2
    }
];