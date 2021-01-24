import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import UserHeader from "../../components/header/user-header.component";

const UserLayout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <UserHeader />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  )
};

export default UserLayout;