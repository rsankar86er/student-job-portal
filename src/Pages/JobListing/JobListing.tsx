import { AppBar, Avatar, Box, Button, Card, Chip, Divider, Grid, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Paper, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';

function JobListing (){
    const jobLists = [
        {title: 'UI/UX Designer', location: 'Chennai', company: 'Company Name'},
        {title: 'Frontend Developer', location: 'Bangalore', company: 'Company Name'},
        {title: 'Backend Developer', location: 'Hyderabad', company: 'Company Name'},
        {title: 'Full Stack Developer', location: 'Mumbai', company: 'Company Name'},
        {title: 'Software Developer', location: 'Pune', company: 'Company Name'},
        {title: 'Data Scientist', location: 'Delhi', company: 'Company Name'}
    ];
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    return (
        <>
            <Stack sx={{m:2}}>
                <Grid container alignItems="flex-start" columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Grid item xs={12} lg={9}>
                        <Box sx={{display:'flex', justifyContent:'flex-start', mx:3, mt:3}}>
                            <Paper component="form" sx={{display: 'flex', alignItems: 'center', height:40, width:'100%'}}>
                                <SearchIcon sx={{ml:1,opacity:'0.5'}}/>
                                <InputBase
                                    sx={{ ml: 1, flex: 1, }}
                                    placeholder="Job title or keyword"
                                    inputProps={{ 'aria-label': 'Job title or keyword' }}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <LocationOnOutlinedIcon sx={{opacity:'0.5'}}/>
                                <InputBase
                                    sx={{ ml: 1, flex: 0.5 }}
                                    placeholder="Location"
                                    inputProps={{ 'aria-label': 'Location' }}
                                />
                                <Button variant="contained" size="large" sx={{height:40, borderRadius:0, width:130}}>Find</Button>
                            </Paper>
                            <IconButton sx={{ p: '10px', ml:1 }} aria-label="menu"><FilterAltIcon/></IconButton>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'flex-start', mx:3, mt:1}}>
                            <Chip label="Front end" size="small" variant="outlined" onDelete={handleDelete} sx={{mr:1}} />
                            <Chip label="Chennai" size="small" variant="outlined" onDelete={handleDelete} />
                        </Box>
                        <Typography variant="h5" sx={{m:2}}>1012 Jobs Available</Typography>
                        <Stack sx={{}}>
                            {jobLists.map((job, index) => (
                            <Card variant="outlined" sx={{p:1, display:'flex', mb:1}}>
                                <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                <Stack sx={{mx:1}}>
                                    <Typography variant="body2" sx={{mb:1}}>{job.company}</Typography>
                                    <Typography variant="body1" sx={{mb:1}}>{job.title}</Typography>
                                    <Typography variant="body2" sx={{mb:1, display:'flex', alignItems:'center'}}><LocationOnOutlinedIcon fontSize='small'></LocationOnOutlinedIcon>{job.location}</Typography>
                                </Stack>
                                <Button variant="contained" size='small' sx={{height:30, ml:'auto', textTransform:'capitalize', alignSelf:'flex-end'}}>Apply Now</Button>
                            </Card>))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Stack sx={{}}>
                            <Card variant="outlined" sx={{p:1, borderRadius:'0', mb:1}}>
                                <Typography variant="body1" sx={{fontWeight:'bold', textAlign:'center', width:'100%'}}>Top Companies</Typography>
                                <Box sx={{m:1, display:'flex', justifyContent:'space-between'}}>
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                </Box>
                                <Box sx={{m:1, display:'flex', justifyContent:'space-between'}}>
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                </Box>
                            </Card>
                            <Card variant="outlined" sx={{p:1, borderRadius:'0'}}>
                                <Typography variant="body1" sx={{fontWeight:'bold', textAlign:'center', width:'100%'}}>Top Institutes</Typography>
                                <Box sx={{m:1, display:'flex', justifyContent:'space-between'}}>
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                </Box>
                                <Box sx={{m:1, display:'flex', justifyContent:'space-between'}}>
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                    <ImageIcon sx={{ fontSize: '5rem', opacity: 0.2 }} />
                                </Box>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}
export default JobListing;