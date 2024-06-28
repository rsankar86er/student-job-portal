import { AppBar, Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import logo from '../assets/img/logo.png';
import hero from '../assets/img/h1_hero.jpg';

function JobListing (){
    return (
        <div>
            <Box sx={{ m:2, display: 'flex'}}>
               <img src={logo}/>
            </Box>
            <Box sx={{ display: 'flex'}}>
               <img width="100%" src={hero}/>
            </Box>
        </div>
    )
}
export default JobListing;