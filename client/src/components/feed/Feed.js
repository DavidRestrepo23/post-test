import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    IconButton,
    Typography,
    Container,
    Grid,
    CssBaseline
} from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face';
import { useStyles } from '../../styles/FeedStyle';
import ButtonFloating from '../ButtonFloating';
import MenuSettings from '../Menu';

const Feed = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" className={classes.paper}>
            <CssBaseline />

            <ButtonFloating />

            <div>
                <Grid container spacing={2}>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <FaceIcon />
                                </Avatar>
                            }
                            action={
                                <MenuSettings />
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </div>

        </Container>
    );
}

export default Feed; 