import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import { login, clearErrors } from "../../../redux/auth/authActions";
import { selectEmailErrors, selectPasswordErrors } from "../../../redux/auth/authSelectors";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 'auto'
    },
    title: {
        fontSize: 24,
    },
    subtitle: {
        marginBottom: 12,
        fontSize: 14,
    },
});

const LoginForm = ({ login, clearErrorsAction, emailErrors, passwordErrors }) => {
    const classes = useStyles();

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    useEffect(() => {
        clearErrorsAction();
    }, [clearErrorsAction]);

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        login({ email, password });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const displayErrors = (errors) => {
        if (errors.length) {
            return errors[0].message
        }
    }

    return (
        <Card className={classes.root} variant="outlined">
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" component="h2">Login</Typography>
                    <Typography className={classes.subtitle} color="textSecondary">Log in  with your email and password</Typography>

                    <div>
                        <FormInput
                            error={emailErrors.length > 0}
                            helperText={displayErrors(emailErrors)}
                            name="email"
                            type="email"
                            label="Email"
                            value={email}
                            handleChange={handleChange}
                        />
                    </div>
                    <div>
                        <FormInput
                            error={passwordErrors.length > 0}
                            helperText={displayErrors(passwordErrors)}
                            name="password"
                            type="password"
                            label="Password"
                            value={password}
                            handleChange={handleChange}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <CustomButton type="submit" color="primary">Log in</CustomButton>
                    <Link href="/register">Register!</Link>
                </CardActions>
            </form>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    emailErrors: selectEmailErrors,
    passwordErrors: selectPasswordErrors
});

const mapDispatchToProps = dispatch => ({
    login: (userLoginCredentials) => dispatch(login(userLoginCredentials)),
    clearErrorsAction: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
