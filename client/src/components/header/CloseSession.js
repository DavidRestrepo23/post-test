import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    session: {
        color: '#fff !important',
    }
}));

const CloseSession = (props) => {

    const classes = useStyles();

    return (
        <div>
            <Button aria-controls="simple-menu" className={classes.session} aria-haspopup="true" onClick={props.handleClick}>
                {props.name} <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}

            >
                <MenuItem onClick={props.handleClose}>
                    <div onClick={props.handleLogout}>
                        Logout
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default CloseSession;