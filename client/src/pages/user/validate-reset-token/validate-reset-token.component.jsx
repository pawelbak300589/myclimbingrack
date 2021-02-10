import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { validateResetToken } from "../../../redux/auth/authActions";

const ValidateResetTokenPage = ({ match, validateResetToken }) => {
    useEffect(() => {
        const { token } = match.params;
        validateResetToken(token);
    }, [validateResetToken, match]);

    return (
        <React.Fragment></React.Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    validateResetToken: (token) => dispatch(validateResetToken(token))
});

export default connect(null, mapDispatchToProps)(ValidateResetTokenPage);
