import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser, getUserAuth } from '../redux/actions/auth/actions';
import SignIn from '../components/auth/SignIn';

const SignInContainer = (props) => {

    const [user, setUser] = useState({
        email: null,
        password: null
    });

    useEffect(() => {
        props.getUserAuth();

        if (props.auth) {
            props.history.push('/');
        }

    }, [props.auth, props.history]);


    /**
     * Get values form
     * @param {*} e 
     */
    const handleChangeForm = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }

    /**
     * 
     * @param {*} e 
     */
    const handleSubmitForm = (e) => {
        e.preventDefault();
        props.loginUser(user);
    }


    return (
        <SignIn
            handleChangeForm={handleChangeForm}
            handleSubmitForm={handleSubmitForm}
            message={props.message}
            alertStatus={props.alertStatus}
        />
    );
}

const mapStateToProps = state => {

    return {
        message: state.AuthReducer.message,
        alertStatus: state.AuthReducer.statusMessage,
        auth: state.AuthReducer.auth
    }
};

const mapDispatchToProps = {
    loginUser,
    getUserAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);