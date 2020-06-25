import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import { useStyles } from '../../styles/SignUpStyle';
import Alert from '@material-ui/lab/Alert';


const SignUp = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registro
                </Typography>
                <form className={classes.form} onSubmit={props.handleSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Tu nombre"
                                autoFocus
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Tu correo"
                                name="email"
                                autoComplete="email"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Tu contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={props.handleChangeForm}
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
                        Enviar
                    </Button>

                    {props.alertStatus ? (
                        <Link href="/sign-in">
                            <Alert severity="success">
                                {props.message}
                                <br />
                                Inicia sesión para continuar
                            </Alert>
                        </Link>
                    ) : null}

                    <br />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/sign-in" variant="body2">
                                ¿Ya tienes una cuenta?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container >
    );
}

export default SignUp;