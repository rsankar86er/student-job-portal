import { Box, Button, Divider, MenuItem, Typography } from '@mui/material';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import AlertWrapper from "../Alert/Alert";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Header (){
    const navigate = useNavigate();

    const candidateClick = () => navigate('/CandidateLogin');
    const instituteClick = () => navigate('/InstituteSignin');

    const alert = useSelector((state:any)=>state.createInstitute.alert);
    const alertmessage = useSelector((state:any)=>state.createInstitute.alertmessage);
    const alerttype = useSelector((state:any)=>state.createInstitute.alerttype);

    console.log(alert, alertmessage, alerttype);
    
    useEffect(()=>{
        alert && navigate('/InstituteSignin');
    },[alert, navigate]);

    return (
        <>
        <Box sx={{ m:2, display: 'flex', justifyContent:'space-between'}}>
            {alert && <AlertWrapper alertmessage={alertmessage} alerttype={alerttype}></AlertWrapper>}
            <Box sx={{ display:'flex', alignItems:'center'}}>
                <Link to={'/'}><img src={logo}/></Link>
                <Divider sx={{ height: 28, m: 0.5, mx:3 }} orientation="vertical" />
                <Box sx={{display:'flex'}} className="main-menu">
                    <MenuItem>
                        <Link to={'/'}><Typography variant="body1" color="text.primary">Home</Typography></Link>
                    </MenuItem>
                    <MenuItem sx={{display:'flex'}}>
                        <Link to={'/JobListing'}><Typography variant="body1" color="text.primary">Find a job</Typography></Link>
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
        <Divider component="hr" className='top-line' />
        </>
    )
}
export default Header;