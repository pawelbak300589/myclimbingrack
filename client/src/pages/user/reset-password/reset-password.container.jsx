import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/auth/authSelectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import ResetPasswordPage from "./reset-password.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const ResetPasswordContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ResetPasswordPage);

export default ResetPasswordContainer;