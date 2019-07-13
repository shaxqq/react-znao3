import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';

export default function NavButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(e) {
        setAnchorEl(e.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }

    return(
        <div>
            <IconButton aria-controls='simple-menu' aria-haspopup="true" onClick={handleClick} color="inherit" edge='end'
            style={{marginLeft:'16px'}}>
                <AccountCircle />
            </IconButton>
            <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>logout</MenuItem>
            </Menu>
        </div>
    )
}


