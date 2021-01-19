import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './custom-button.styles.css';

const CustomButton = ({ children, ...otherProps }) => {
    let content;
    if (otherProps.type === 'button' || otherProps.type === 'submit') {
        content = <Button variant="contained" {...otherProps}>{children}</Button>;
    } else if (otherProps.type === 'link') {
        const { to, ...buttonProps } = otherProps;
        content = <Button variant="contained" component={Link} to={to} {...buttonProps}>{children}</Button>;
    }

    return (
        <React.Fragment>{content}</React.Fragment>
    );
};

export default CustomButton;
