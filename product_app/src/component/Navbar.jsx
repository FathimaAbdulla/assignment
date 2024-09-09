import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <AppBar>
        <Toolbar>
            <Typography variant="h6">PRODUCT MANAGEMENT APP</Typography>
            &nbsp;
            <Link to='/'>
            <Button variant="contained" color="secondary">Home</Button>
            </Link>
       &nbsp;
            <Link to='A'>
            <Button variant="contained" color="secondary">Add</Button>
            </Link>
            
        </Toolbar>
        </AppBar> 
    </div>
  )
}

export default Navbar
