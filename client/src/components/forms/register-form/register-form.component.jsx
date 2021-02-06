import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import { register, clearErrors } from "../../../redux/auth/authActions";
import {
    selectFirstNameErrors,
    selectLastNameErrors,
    selectEmailErrors,
    selectPasswordErrors,
    selectConfirmPasswordErrors,
    selectAcceptTermsErrors
} from "../../../redux/auth/authSelectors";

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

const RegisterForm = ({ registerAction, clearErrorsAction, firstNameErrors, lastNameErrors, emailErrors, passwordErrors, confirmPasswordErrors, acceptTermsErrors }) => {
    const classes = useStyles();

    const [userCredentials, setUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });

    useEffect(() => {
        clearErrorsAction();
    }, [clearErrorsAction]);

    const { firstName, lastName, email, password, confirmPassword, acceptTerms } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        registerAction({ firstName, lastName, email, password, confirmPassword, acceptTerms });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        setUserCredentials({ ...userCredentials, [name]: checked });
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
                    <Typography className={classes.title} color="textSecondary" component="h2">Register</Typography>
                    <Typography className={classes.subtitle} color="textSecondary">Register a new user</Typography>

                    <div>
                        <FormInput
                            error={firstNameErrors.length > 0}
                            helperText={displayErrors(firstNameErrors)}
                            type="text"
                            name="firstName"
                            value={firstName}
                            handleChange={handleChange}
                            label="Your First Name"
                        />
                    </div>
                    <div>
                        <FormInput
                            error={lastNameErrors.length > 0}
                            helperText={displayErrors(lastNameErrors)}
                            type="text"
                            name="lastName"
                            value={lastName}
                            handleChange={handleChange}
                            label="Your Last Name"
                        />
                    </div>
                    <div>
                        <FormInput
                            error={emailErrors.length > 0}
                            helperText={displayErrors(emailErrors)}
                            name="email"
                            type="email"
                            label="Your Email"
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
                    <div>
                        <FormInput
                            error={confirmPasswordErrors.length > 0}
                            helperText={displayErrors(confirmPasswordErrors)}
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            handleChange={handleChange}
                            label="Confirm Password"
                        />
                    </div>
                    <div>
                        <FormControl error={acceptTermsErrors.length > 0} component="fieldset">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={acceptTerms}
                                        name="acceptTerms"
                                        onChange={handleCheckboxChange}
                                        color="primary"
                                    />
                                }
                                label="I read and agree to Terms & Conditions"
                            />
                            <FormHelperText>{displayErrors(acceptTermsErrors)}</FormHelperText>
                        </FormControl>
                        <Alert severity="info">By clicking Register button, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</Alert>
                    </div>
                </CardContent>
                <CardActions>
                    <CustomButton type="submit" color="primary">Register</CustomButton>
                </CardActions>
            </form>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    firstNameErrors: selectFirstNameErrors,
    lastNameErrors: selectLastNameErrors,
    emailErrors: selectEmailErrors,
    passwordErrors: selectPasswordErrors,
    confirmPasswordErrors: selectConfirmPasswordErrors,
    acceptTermsErrors: selectAcceptTermsErrors
});

const mapDispatchToProps = dispatch => ({
    registerAction: (userRegisterCredentials) => dispatch(register(userRegisterCredentials)),
    clearErrorsAction: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
