import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/auth/authSelectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import VerifyEmailPage from "./verify-email.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const VerifyEmailContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(VerifyEmailPage);

export default VerifyEmailContainer;