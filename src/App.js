import React, { Component } from 'react';
import './app.scss';
import Editor from './Components/Editor/Editor';
import Page from './Components/Page';

export default class App extends Component {
  state = {
    pages: [],
    text: '',
    head: 'h1',
    color: 'black',
    type: 'heading',
  };

  editTextFunction = (page, newText) => {
    let index = this.state.pages.indexOf(page);
    let newPages = [...this.state.pages];
    newPages[index].text = newText;
    this.setState({
      pages: newPages,
    });
  };
  editColorFunction = (page, newColor) => {
    let index = this.state.pages.indexOf(page);
    let newPages = [...this.state.pages];
    newPages[index].color = newColor;
    this.setState({
      pages: newPages,
    });
  };
  removeFunction = (indexItem) => {
    this.setState((state) => {
      const newPages = state.pages.filter((page, index) => index !== indexItem);
      console.log(newPages);
      return {
        pages: newPages,
      };
    });
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

  addTextHandle = () => {
    if (this.state.text !== '') {
      this.pageAddHandler({
        text: this.state.text,
        head: this.state.head,
        color: this.state.color,
        type: this.state.type,
      });
      this.setState({
        text: '',
      });
      this.setState({
        color: 'black',
      });
      this.setState({
        head: 'h1',
      });
    } else {
      alert('Please fill all inputs!');
    }
  };
  pageAddHandler = (page) => {
    console.log(page, 'page');
    let array = [...this.state.pages, page];
    console.log(array, 'array');
    this.setState({
      pages: array,
    });
  };

  render() {
    return (
      <div className="App">
        <Editor
          addTextHandle={this.addTextHandle}
          colorValueHandler={this.colorValueHandler}
          headValueHandler={this.headValueHandler}
          inputValueHandler={this.inputValueHandler}
          states={this.state}
          pageAddHandler={this.pageAddHandler}
        />
        <Page
          editColorFunction={this.editColorFunction}
          removeFunction={this.removeFunction}
          editTextFunction={this.editTextFunction}
          inputValueHandler={this.inputValueHandler}
          pages={this.state.pages}
        />
      </div>
    );
  }
}
