import React from 'react';
import { Container, Grid, CssBaseline, Typography } from '@material-ui/core';
import ButtonFloating from '../ButtonFloating';

import { useStyles } from '../../styles/FeedStyle';
import FeedCard from './FeedCard';


const Feed = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.paper}>
            <CssBaseline />

            <ButtonFloating />

            <div>
                <Grid container spacing={2}>
                    {props.posts ? (props.posts.map((item, index) => (
                        <FeedCard
                            key={index}
                            post={item}
                            handleClickDelete={props.handleClickDelete}
                            handleCurrentPost={props.handleCurrentPost}
                        />
                    ))) :
                        null
                    }
                </Grid>
            </div>

        </Container>
    );
}

export default Feed; 