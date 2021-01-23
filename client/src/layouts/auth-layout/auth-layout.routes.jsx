
import React from 'react';
import { Route } from 'react-router-dom';

import AuthLayout from './auth-layout.component';

const AuthLayoutRoutes = ({ component: Component, ...otherProps }) => {
    return (
        <Route {...otherProps} render={props => (
            <AuthLayout>
                <Component {...props} />
            </AuthLayout>
        )} />
    )
};

export default AuthLayoutRoutes;