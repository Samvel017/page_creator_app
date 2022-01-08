import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import HeadingEdit from './HeadingEdit';
import ColorEdit from './ColorEdit';
import { Button } from '@mui/material';

export default class Headings extends Component {
  state = {
    text: '',
    head: 'h1',
    color: 'black',
    type: 'heading'
  };

  
  inputValueHandler = (e) => {
    this.setState({
      text: e.target.value,
    }); 
  };
  headValueHandler = (e) => {
    this.setState({
      head: e,
    });
  };
  colorValueHandler = (e) => {
    this.setState({
      color: e,
    });
  };

  addTextHandle = () =>{
    if (this.state.text !== '') {
      this.props.pageAddHandler({
      text: this.state.text,
      head: this.state.head,
      color: this.state.color,
      type: this.state.type
    });
    this.setState({
      text: ''
    })
    this.setState({
      color: 'black'
    })
    this.setState({
      head: 'h1'
    })
    }else {
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
          <HeadingEdit head={this.state.head} headValueHandler={this.headValueHandler} />
          <ColorEdit color={this.state.color} colorValueHandler={this.colorValueHandler} />
        </div>
        <Button
          variant="contained"
          onClick={this.addTextHandle}
        >
          Add Heading
        </Button>
      </div>
    );
  }
}
