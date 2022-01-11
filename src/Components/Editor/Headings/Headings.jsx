import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import HeadingEdit from './HeadingEdit';
import ColorEdit from './ColorEdit';
import { Button } from '@mui/material';

export default class Headings extends Component {
  
  render() {
    return (
      <div className="headings">
        <TextField
          id="standard-basic heading-text"
          label="Add text"
          variant="standard"
          sx={{ maxWidth: 350, width: '100%' }}
          value={this.props.states.text}
          onChange={this.props.inputValueHandler}
          onKeyDown={(e) => e.keyCode === 13 && this.props.addTextHandle()}
        />
        <div className="flex">
          <HeadingEdit head={this.props.states.head} headValueHandler={this.props.headValueHandler} />
          <ColorEdit color={this.props.states.color} colorValueHandler={this.props.colorValueHandler} />
        </div>
        <Button
          variant="contained"
          onClick={this.props.addTextHandle}
        >
          Add Heading
        </Button>
      </div>
    );
  }
}
