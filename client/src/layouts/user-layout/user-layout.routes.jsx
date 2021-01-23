
import React from 'react';
import PrivateRoute from "../../components/private-route/private-route.component";

import UserLayout from './user-layout.component';

const UserLayoutRoutes = ({ component: Component, ...otherProps }) => {
    return (
        <PrivateRoute {...otherProps} render={props => (
            <UserLayout>
                <Component {...props} />
            </UserLayout>
        )} />
    )
};

export default UserLayoutRoutes;