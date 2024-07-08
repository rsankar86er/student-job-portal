import {Box, Divider, Typography, Paper, InputBase, Button } from '@mui/material';
import './HeroBanner.scss';

function HeroBanner (){
    return (
        <Box className="HeroBanner">
            <Typography className='text-color' variant='h1' sx={{p:5, width:800}}>Find your <br/>dream job here!</Typography>
            <Paper component="form" sx={{ mx:5, p: '2px 0', display: 'flex', alignItems: 'center', width: 750, height:60 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    placeholder="Job title or keyword"
                    inputProps={{ 'aria-label': 'Job title or keyword' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <InputBase
                    sx={{ ml: 1, flex: 0.5 }}
                    placeholder="Location"
                    inputProps={{ 'aria-label': 'Location' }}
                />
                <Button variant="contained" size="large" sx={{height:60, borderRadius:0, width:130}}>Find</Button>
            </Paper>
        </Box>
    )
}
export default HeroBanner;