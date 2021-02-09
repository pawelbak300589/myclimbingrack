import React from 'react';

import ResetPasswordForm from "../../../components/forms/reset-password/reset-password-form.component";

const ResetPasswordPage = ({ match }) => {
    const { token } = match.params;

    return (
        <div className="reset-password-page">
            <ResetPasswordForm token={token} />
        </div>
    );
};

export default ResetPasswordPage;
