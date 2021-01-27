import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import GuestHeader from "../../components/header/guest-header.component";
import Header from "../../components/header/header.component";


const GuestLayout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  )
};

export default GuestLayout;