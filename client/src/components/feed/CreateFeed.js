import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Input,
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import { useStyles } from '../../styles/SignInStyle';


const CreateFeed = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Crear Post
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Titulo"
                                type="text"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="content"
                                label="Contenido"
                                type="text"
                                multiline
                                rows={4}
                                id="content"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Titulo"
                                name="email"
                                type="file"
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
                        Crear Post
                    </Button>
                </form>
            </div>

        </Container >
    );
}

export default CreateFeed;