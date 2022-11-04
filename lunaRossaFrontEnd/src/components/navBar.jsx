import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material'
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material'
import React from 'react'

export const NavBar = ({ drawerWidth=240 }) => {
  return (
    <AppBar
        position='fixed'
        sx={{
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: {sm: `${ drawerWidth }px`}
        }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr:2, display: {sm: 'none'} }}>
                    <MenuOutlined />    
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography element='h2' noWrap component='div' sx={{fontSize: 30, ml:5}} >Restaurantes</Typography>
                        <IconButton color='inherit' sx={{mr:5}}>
                            <LogoutOutlined />
                        </IconButton>

                </Grid>
            </Toolbar>
    </AppBar>
  )
}
