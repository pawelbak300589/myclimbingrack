import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { history, Role } from "./helpers";

import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.component";
import RegisterPage from "./pages/register/register.component";
import VerifyEmailPage from "./pages/user/verify-email/verify-email.component";
import DashboardPage from "./pages/dashboard/dashboard.component";
// import BrandsPage from "./pages/brands/brands.component";
// import UsersPage from "./pages/users/users.component";
// import Alerts from "./components/alerts/alerts.component";

import GuestLayoutRoutes from './layouts/guest-layout/guest-layout.routes';
import UserLayoutRoutes from './layouts/user-layout/user-layout.routes';
import AuthLayoutRoutes from './layouts/auth-layout/auth-layout.routes';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <GuestLayoutRoutes exact path="/" component={HomePage} />
          <AuthLayoutRoutes exact path="/login" component={LoginPage} />
          <AuthLayoutRoutes exact path="/register" component={RegisterPage} />
          <AuthLayoutRoutes exact path="/user/verify-email" component={VerifyEmailPage} />
          <UserLayoutRoutes exact path="/dashboard" component={DashboardPage} />
          {/*<UserLayoutRoutes path="/brands" roles={[Role.SuperAdmin]} component={BrandsPage} />*/}
          {/*<UserLayoutRoutes path="/users" roles={[Role.SuperAdmin, Role.Admin]} component={UsersPage} />*/}
        </Switch>
      </Router>
      {/*<Alerts />*/}
    </div>
  );
}

export default App;
