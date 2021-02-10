import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import { resetPassword, clearErrors } from "../../../redux/auth/authActions";
import {
    selectPasswordErrors,
    selectConfirmPasswordErrors
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

const ResetPasswordForm = ({ token, resetPasswordAction, clearErrorsAction, passwordErrors, confirmPasswordErrors }) => {
    const classes = useStyles();

    const [newPassword, setNewPassword] = useState({
        password: '',
        confirmPassword: '',
    });

    useEffect(() => {
        // clearErrorsAction();
    }, [clearErrorsAction]);

    const { password, confirmPassword } = newPassword;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        resetPasswordAction(token, { password, confirmPassword });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewPassword({ ...newPassword, [name]: value });
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
                    <Typography className={classes.title} color="textSecondary" component="h2">Reset Password</Typography>
                    <Typography className={classes.subtitle} color="textSecondary">Please provide new password</Typography>
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
                </CardContent>
                <CardActions>
                    <CustomButton type="submit" color="primary">Reset Password</CustomButton>
                </CardActions>
            </form>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    passwordErrors: selectPasswordErrors,
    confirmPasswordErrors: selectConfirmPasswordErrors
});

const mapDispatchToProps = dispatch => ({
    resetPasswordAction: (token, userRegisterCredentials) => dispatch(resetPassword(token, userRegisterCredentials)),
    clearErrorsAction: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
