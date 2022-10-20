import React from 'react';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <header>
        <h1>My Store</h1>
        <Button component={NavLink} to="/" variant="contained">
      Men
    </Button>
    <Button to="/women" component={NavLink} variant="contained">
      Women
    </Button>
        </header>
    )
}

export default Header;