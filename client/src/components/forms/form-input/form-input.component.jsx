import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formInput: {
        margin: theme.spacing(1),
        width: 400,
    },
}));

const FormInput = ({ handleChange, label, ...otherProps }) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formInput}>
            <TextField label={label} onChange={handleChange} {...otherProps} variant="outlined" />
        </FormControl>
    );
};

export default FormInput;
