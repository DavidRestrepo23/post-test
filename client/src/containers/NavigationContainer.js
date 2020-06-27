import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth/actions'
import Navigation from '../components/header/Navigation';

const NavigationContainer = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        props.logout();
    }

    return (
        <Navigation
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            handleLogout={handleLogout}
            name={props.name}
        />
    );
}

const mapStateToProps = state => {
    return {
        name: state.AuthReducer.user.name
    };
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);