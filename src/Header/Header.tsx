import { AppBar, Avatar, Box, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import logo from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';

function Header (){
    const navigate = useNavigate();
    const candidateClick = () => navigate('/CandidateLogin');
    const instituteClick = () => navigate('/InstituteSignin');

    return (
        <Box sx={{ m:2, display: 'flex', justifyContent:'space-between'}}>
            <Box sx={{ display:'flex', alignItems:'center'}}>
                <Link to={'/'}><img src={logo}/></Link>
                <Divider sx={{ height: 28, m: 0.5, mx:3 }} orientation="vertical" />
                <Box sx={{display:'flex'}} className="main-menu">
                    <MenuItem>
                        <Link to={'/'}><Typography variant="body1" color="text.primary">Home</Typography></Link>
                    </MenuItem>
                    <MenuItem sx={{display:'flex'}}>
                        <Typography variant="body1" color="text.primary">Find a job</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography variant="body1" color="text.primary">About</Typography>
                    </MenuItem>
                    <MenuItem>
                        <Typography variant="body1" color="text.primary">Contact</Typography>
                    </MenuItem>
                </Box>
            </Box>
            <Box sx={{ display:'flex', alignItems:'center'}}>
                <Button variant="contained" size="small" sx={{height:40, mr:1}} onClick={candidateClick}>Candidate</Button>
                <Button variant="contained" size="small" sx={{height:40, mr:1}}>Employers</Button>
                <Button variant="contained" size="small" sx={{height:40}} onClick={instituteClick}>Institute</Button>
            </Box>
        </Box>
    )
}
export default Header;