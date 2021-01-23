import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const AuthLayout = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  )
};

export default AuthLayout;