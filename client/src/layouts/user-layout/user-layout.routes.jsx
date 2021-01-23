
import React from 'react';
import { Route } from 'react-router-dom';

import UserLayout from './user-layout.component';

const UserLayoutRoutes = ({ component: Component, ...otherProps }) => {
    return (
        <Route {...otherProps} render={props => (
            <UserLayout>
                <Component {...props} />
            </UserLayout>
        )} />
    )
};

export default UserLayoutRoutes;