import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const colors = ['black','red','blue','green'];

export default function ColorEdit({colorValueHandler, color}) {

  const handleChange = (event) => {
    colorValueHandler(event.target.value)
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">
        Text Color
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard-label"
        value={color}
        label="Color"
        onChange={handleChange}
      >
        {colors.map((color) => {
          return (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
