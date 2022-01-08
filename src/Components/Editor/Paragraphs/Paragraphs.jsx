import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import FontEdit from './FontEdit';
import ColorEdit from '../Headings/ColorEdit';

export default class Paragraphs extends Component {
  state = {
    text: '',
    font: 14,
    color: 'black',
    type: 'paragraph',
  };

  inputValueHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  fontValueHandler = (e) => {
    this.setState({
      font: e,
    });
  };
  colorValueHandler = (e) => {
    this.setState({
      color: e,
    });
  };

  addTextHandle = ()=>{
    if (this.state.text !== '') {
      this.props.pageAddHandler({
        text: this.state.text,
        color: this.state.color,
        type: this.state.type,
        font: this.state.font,
      });
      this.setState({
        text: ''
      })
      this.setState({
        color: 'black'
      })
      this.setState({
        font: 14
      })
    } else {
      alert('Please fill all inputs!')
    }
  }
  render() {
    return (
      <div className="headings">
        <TextField
          id="standard-basic heading-text"
          label="Add text"
          variant="standard"
          sx={{ maxWidth: 350, width: '100%' }}
          value={this.state.text}
          onChange={this.inputValueHandler}
          onKeyDown={(e) => e.keyCode === 13 && this.addTextHandle()}
        />
        <div className="flex">
          <FontEdit font={this.state.font} fontValueHandler={this.fontValueHandler} />
          <ColorEdit color={this.state.color} colorValueHandler={this.colorValueHandler} />
        </div>
        <Button
          variant="contained"
          onClick={this.addTextHandle}
        >
          Add Paragraph
        </Button>
      </div>
    );
  }
}
