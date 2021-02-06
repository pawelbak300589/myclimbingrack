import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ loading, ...otherProps }) => {
        return loading ? (
            <CircularProgress />
        ) : (
                <WrappedComponent {...otherProps} />
            );
    };
    return Spinner;
};

export default WithSpinner;
