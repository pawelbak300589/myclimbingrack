import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsLoading } from "../../../redux/auth/authSelectors";
import WithSpinner from "../../../components/with-spinner/with-spinner.component";
import ValidateResetTokenPage from "./validate-reset-token.component";

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading,
});

const ValidateResetTokenContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ValidateResetTokenPage);

export default ValidateResetTokenContainer;