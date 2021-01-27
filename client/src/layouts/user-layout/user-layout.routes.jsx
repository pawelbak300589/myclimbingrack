
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/auth/authSelectors";
import UserLayout from './user-layout.component';

const UserLayoutRoutes = ({ component: Component, roles, currentUser, ...otherProps }) => {
    return (
        <Route {...otherProps} render={props => {

            console.log(currentUser);

            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login' }} />;
                // return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
            }
            
            console.log(currentUser.role);

            // check if route is restricted by role
            if (roles && roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/dashboard' }} />;
            }

            // authorised so return component
            return (
                <UserLayout>
                    <Component {...props} />
                </UserLayout>
            );
        }} />
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(UserLayoutRoutes);