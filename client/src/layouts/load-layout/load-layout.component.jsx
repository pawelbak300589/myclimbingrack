import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e9e9e9',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const LoadLayout = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.container}>
        {props.children}
      </Grid>
    </React.Fragment>
  )
};

export default LoadLayout;