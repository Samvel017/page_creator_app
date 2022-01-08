import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default function HeadingEdit({headValueHandler,head}) {

  const handleChange = (event) => {
    headValueHandler(event.target.value)
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">
        Heading Text
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard-label"
        value={head}
        label="Heading"
        onChange={handleChange}
      >
        {headings.map((head) => {
          return (
            <MenuItem key={head} value={head}>
              {head}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
