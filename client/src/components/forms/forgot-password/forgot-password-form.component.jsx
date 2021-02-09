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

import { forgotPassword, clearErrors } from "../../../redux/auth/authActions";
import { selectEmailErrors } from "../../../redux/auth/authSelectors";

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

const ForgotPasswordForm = ({ forgotPassword, clearErrors, emailErrors }) => {
    const classes = useStyles();

    const [userCredentials, setUserCredentials] = useState({ email: '' });

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    const { email } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        forgotPassword(email);
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
                    <Typography className={classes.title} color="textSecondary" component="h2">Forgot your password?</Typography>
                    <Typography className={classes.subtitle} color="textSecondary">Fill in your email address and we will send you password reset email.</Typography>

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
                </CardContent>
                <CardActions>
                    <CustomButton type="submit" color="primary">Send reset password email</CustomButton>
                    <Link href="/login">Go back</Link>
                </CardActions>
            </form>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    emailErrors: selectEmailErrors,
});

const mapDispatchToProps = dispatch => ({
    forgotPassword: (email) => dispatch(forgotPassword(email)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
