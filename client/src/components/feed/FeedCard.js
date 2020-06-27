import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    Typography
} from '@material-ui/core';
import MenuSettings from '../Menu';
import FaceIcon from '@material-ui/icons/Face';
import { useStyles } from '../../styles/FeedStyle';

const FeedCard = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <FaceIcon />
                    </Avatar>
                }
                action={
                    <MenuSettings
                        post_id={props.post._id}
                        handleClickDelete={props.handleClickDelete}
                        handleCurrentPost={props.handleCurrentPost}
                    />
                }
                title={props.post.title}
                subheader={props.post.created_at}
            />
            <CardMedia
                className={classes.media}
                image={`${process.env.REACT_APP_BACKEND_URL}/src/images/${props.post.image}`}
                title={props.post.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FeedCard;