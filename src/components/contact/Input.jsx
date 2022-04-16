import React from 'react';

import { TextField } from '@mui/material';

const Input = ({ name, label, value, ChangeHandler, type, multiLine, rows }) => {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={ChangeHandler}
      fullWidth
      variant="standard"
      required
      multiline={multiLine}
      rows={rows ? rows : 1}
      InputProps={{
        style: {
          fontSize: 32,
          color: '#23313a',
          fontWeight: 'normal',
        },
      }}
    />
  );
};

export default Input;
