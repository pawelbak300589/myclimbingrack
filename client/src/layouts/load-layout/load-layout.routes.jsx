
import React from 'react';
import { Route } from 'react-router-dom';

import LoadLayout from './load-layout.component';

const LoadLayoutRoutes = ({ component: Component, ...otherProps }) => {
    return (
        <Route {...otherProps} render={props => (
            <LoadLayout>
                <Component {...props} />
            </LoadLayout>
        )} />
    )
};

export default LoadLayoutRoutes;