import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const fonts = [14, 16, 18, 20, 22];

export default function FontEdit({fontValueHandler,font}) {

  const handleChange = (event) => {
    fontValueHandler(event.target.value)
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">
        Font Size
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard-label"
        value={font}
        label="Font"
        onChange={handleChange}
      >
        {fonts.map((font) => {
          return (
            <MenuItem key={font} value={font}>
              {font}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
