import React, { Component } from 'react';
import './app.scss';
import Editor from './Components/Editor/Editor';
import Page from './Components/Page';

export default class App extends Component {
  state = {
    pages: [],
  };

  pageAddHandler = (page) => {
    console.log(page, 'page');
    let array = [...this.state.pages, page];
    console.log(array,'array');
    this.setState({
      pages: array,
    });
  };

  render() {
    return (
      <div className="App">
        <Editor pageAddHandler={this.pageAddHandler} />
        <Page pages={this.state.pages}/>
      </div>
    );
  }
}
