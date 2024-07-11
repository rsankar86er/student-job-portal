import EditIcon from '@mui/icons-material/Edit';
import { Autocomplete, Box, Button, Card, Divider, Grid, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from 'react';

function InsitituteProfile() {
    const DegreeList = [
        { title: 'BA'},
        { title: 'B.Com'},
        { title: 'B.Sc'},
        { title: 'B.Tech'},
        { title: 'B.E'},
    ];
    const DepartmentList = [
        { title: 'Maths'},
        { title: 'Chemistry'},
        { title: 'Computer Science'},
        { title: 'Information Technology'},
        { title: 'Electronics and Communication'},
    ];
    const [editMode, setEditMode] = useState(false);
    const handleEditClick = () => {
        setEditMode(!editMode);
    }
    const handleUpdateClick = () => {
        setEditMode(!editMode);
    }

  return (
    <>
        <Stack justifyContent="space-between" alignItems="center" spacing={2} direction="row" sx={{m:2}}>
            <Typography variant="h4" sx={{m:2}}>Welcome Insitute Name !</Typography>
            {!editMode&&<Link href="#" onClick={handleEditClick}><EditIcon></EditIcon></Link>}
        </Stack>
        <Typography variant="h6" sx={{m:2}}>Institute Details</Typography>
        <Card variant="outlined" sx={{m:2, p:2}}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Institute Name :</Typography></Grid>
                <Grid item xs={6} lg={3}>{editMode ?<TextField id="name" size="small" defaultValue="Institute Name" fullWidth/>: <Typography variant="body1">Institute Name</Typography>}</Grid>
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Institute Email :</Typography></Grid>
                <Grid item xs={6} lg={3}>{editMode ?<TextField size="small" defaultValue="Institute Email" fullWidth/>: <Typography variant="body1">Institute Email</Typography>}</Grid>
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Institute Phone :</Typography></Grid>
                <Grid item xs={6} lg={3}>{editMode ?<TextField size="small" defaultValue="Institute Phone" fullWidth/>: <Typography variant="body1">Institute Phone</Typography>}</Grid>
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Institute Address :</Typography></Grid>
                <Grid item xs={6} lg={3}>{editMode ?<TextField size="small" multiline maxRows={4} defaultValue="Institute Address" fullWidth/>: <Typography variant="body1">Institute Address</Typography>}</Grid>
            </Grid>
        </Card>
        <Typography variant="h6" sx={{m:2}}>Courses Offered</Typography>
        <Card variant="outlined" sx={{m:2, p:2}}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Degree offered :</Typography></Grid>
                <Grid item xs={6} lg={3}>
                {editMode ?<Autocomplete
                    multiple
                    id="tags-outlined"
                    options={DegreeList}
                    size='small'
                    getOptionLabel={(option) => option?.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="FilterSelectedOptions"
                        placeholder="Degree"
                    />
                    )}
                /> : <Typography variant="body1">Degree</Typography>}
                </Grid>
                <Grid item xs={6} lg={3}><Typography variant="body1" sx={{fontWeight:'bold', textAlign:'right'}}>Departments :</Typography></Grid>
                <Grid item xs={6} lg={3}>
                {editMode?<Autocomplete
                    multiple
                    id="tags-outlined"
                    options={DepartmentList}
                    size='small'
                    getOptionLabel={(option) => option?.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="FilterSelectedOptions"
                        placeholder="Departments"
                    />
                    )}
                />: <Typography variant="body1">Departments</Typography>}
                </Grid>
            </Grid>
        </Card>
        {editMode && <Box sx={{m:2, display:'flex', justifyContent:'flex-end'}}>
            <Button variant="outlined" sx={{mr:1}} onClick={handleUpdateClick}>Cancel</Button>
            <Button variant="contained" onClick={handleUpdateClick}>Update Profile</Button>
        </Box>}
    </>
  );
}

export default InsitituteProfile;