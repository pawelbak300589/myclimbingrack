import React from 'react';
import { Route } from 'react-router-dom';

import GuestLayout from './guest-layout.component';

const GuestLayoutRoutes = ({ component: Component, ...otherProps }) => {
    return (
        <Route {...otherProps} render={props => (
            <GuestLayout>
                <Component {...props} />
            </GuestLayout>
        )} />
    )
};

export default GuestLayoutRoutes;