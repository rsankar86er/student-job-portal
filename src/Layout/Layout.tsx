import { AppBar, Avatar, Box, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import logo from '../assets/img/logo.png';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout (){
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;