import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { verifyEmail } from "../../../redux/auth/authActions";

const VerifyEmailPage = ({ match, verifyEmail }) => {
    useEffect(() => {
        const { token } = match.params;
        verifyEmail(token);
    }, [verifyEmail, match]);

    return (
        <React.Fragment></React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    verifyEmail: (token) => dispatch(verifyEmail(token))
});

export default connect(null, mapDispatchToProps)(VerifyEmailPage);
