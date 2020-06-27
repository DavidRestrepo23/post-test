import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAuth } from '../../redux/actions/auth/actions';

const PrivateRoute = ({ component: Component, ...props }) => {

    const { auth, loading } = props.AuthReducer;

    useEffect(() => {
        props.getUserAuth();
    }, []);

    return (
        <Route {...props} render={props => !auth && !loading ?
            (<Redirect to="/sign-in" />) : (<Component {...props} />)}
        />
    );
}

const mapStateToProps = state => {

    const { AuthReducer } = state;

    return {
        AuthReducer
    }
};

const mapDispatchToProps = {
    getUserAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);