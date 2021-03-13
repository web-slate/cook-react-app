import React from "react";
import TextField from "@material-ui/core/TextField";

import useStyles from "./InputTextField.style";

export default function InputTextField({
  name,
  initialValue = "",
  value,
  error,
  placeholder,
  helperText,
  handleChange,
  onBlur,
}) {
  const classes = useStyles();

  const onChange = (event) => {
    handleChange(event);
  };

  return (
    <div>
      <TextField
        name={name}
        margin="normal"
        variant="outlined"
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        value={value || initialValue}
        className={classes.textFieldContainer}
        InputProps={{ classes: { input: classes.textField } }}
        onChange={onChange}
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        onBlur={onBlur}
      />
    </div>
  );
}
