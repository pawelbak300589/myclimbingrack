import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  blue: {
    background: '#3f51b5',
    text: 'white',
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  white: {
    background: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}));

// <Container>
// {props.children}
// </Container>
const AuthLayout = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item xs={5} className={classes.blue}>
          My Climbing Rack
        </Grid>
        <Grid item xs={7} className={classes.white}>
          {props.children}
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default AuthLayout;