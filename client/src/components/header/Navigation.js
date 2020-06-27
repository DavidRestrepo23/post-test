import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import CloseSession from './CloseSession';
import { useStyles } from '../../styles/NavigationStyle';

const Navigation = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link href="/" className={classes.brand}>
                            Julius Post's
                        </Link>
                    </Typography>
                    <div>
                        <CloseSession
                            anchorEl={props.anchorEl}
                            handleClick={props.handleClick}
                            handleClose={props.handleClose}
                            handleLogout={props.handleLogout}
                            name={props.name}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;