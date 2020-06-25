import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        right: 40,
        bottom: 30
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ButtonFloating = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/create-feed">
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </div>
    );
}

export default ButtonFloating;