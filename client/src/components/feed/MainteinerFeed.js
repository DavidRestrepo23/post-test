import React from 'react';
import {
    Button,
    CssBaseline,
    TextField,
    Input,
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import { useStyles } from '../../styles/SignInStyle';
import Alert from '@material-ui/lab/Alert';


const MainteinerFeed = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    {props.action} Post
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={props.handleSubmitForm}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={props.post.title ? props.post.title : ""}
                                id="title"
                                label="Titulo"
                                type="text"
                                name="title"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={props.post.content ? props.post.content : ""}
                                name="content"
                                label="Contenido"
                                type="text"
                                multiline
                                rows={4}
                                id="content"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                variant="outlined"
                                fullWidth
                                id="file"
                                label="Imagen"
                                name="image"
                                type="file"
                                onChange={props.handleChangeFileForm}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {props.action} Post
                    </Button>
                    {props.statusMessage ? (
                        <Alert severity="success">
                            {props.message}
                        </Alert>
                    ) : null}
                </form>
            </div>

        </Container >
    );
}

export default MainteinerFeed;