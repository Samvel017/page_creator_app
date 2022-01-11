import React, { Component } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default class Page extends Component {
  state = {
    clicked: false,
  };

  editChange = (page, e) => {
    this.props.editTextFunction(page, e.target.value);
  };
  editColorHandle = (page, e) => {
    this.props.editColorFunction(page, e.target.value);
  };
  headFunc = (page) => {
    if (page.head === 'h1') {
      return <h1 style={{ color: page.color }}>{page.text}</h1>;
    } else if (page.head === 'h2') {
      return <h2 style={{ color: page.color }}>{page.text}</h2>;
    } else if (page.head === 'h3') {
      return <h3 style={{ color: page.color }}>{page.text}</h3>;
    } else if (page.head === 'h4') {
      return <h4 style={{ color: page.color }}>{page.text}</h4>;
    } else if (page.head === 'h5') {
      return <h5 style={{ color: page.color }}>{page.text}</h5>;
    } else {
      return <h6 style={{ color: page.color }}>{page.text}</h6>;
    }
  };
  clickedToggleHandler = () => {
    this.setState({
      clicked: true,
    });
  };
  editEndHandle = () => {
    this.setState({
      clicked: false,
    });
  };
  render() {
    let { pages } = this.props;
    const colors = ['black', 'red', 'blue', 'green'];
    return (
      <div className="page">
        <h2 className="page-title">
          Your Page <em>(double-click to text for edit)</em>
        </h2>
        <div className="page-block">
          {pages.map((page, index) => {
            return (
              <div key={index}>
                {page.type === 'heading' ? (
                  <div className="heading-block">
                    {this.state.clicked ? (
                      <div>
                        <input
                          style={{ color: page.color }}
                          className="edit-input"
                          value={page.text}
                          onChange={(e) => {
                            this.editChange(page, e);
                          }}
                          onKeyDown={(e) =>
                            e.keyCode === 13 && this.editEndHandle()
                          }
                        />
                      </div>
                    ) : (
                      <div
                        onDoubleClick={() => {
                          this.clickedToggleHandler();
                        }}
                      >
                        {this.headFunc(page)}
                      </div>
                    )}
                    {this.state.clicked ? (
                      <div className="edit-tools">
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            Text Color
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard-label"
                            value={page.color}
                            label="Color"
                            onChange={(e) => {
                              this.editColorHandle(page, e);
                            }}
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
                        <Button
                          className="edit-end"
                          onClick={this.editEndHandle}
                        >
                          <CheckCircleOutlineIcon />
                        </Button>
                      </div>
                    ) : null}

                    <Button
                      onClick={() => {
                        this.props.removeFunction(index);
                      }}
                      variant="outlined"
                      className="delete-button"
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                ) : (
                  <div className="paragraph-block">
                    {this.state.clicked ? (
                      <input
                        style={{ color: page.color }}
                        className="edit-input"
                        value={page.text}
                        onChange={(e) => {
                          this.editChange(page, e);
                        }}
                        onKeyDown={(e) =>
                          e.keyCode === 13 && this.editEndHandle()
                        }
                      />
                    ) : (
                      <p
                        onDoubleClick={() => {
                          this.clickedToggleHandler();
                        }}
                        style={{
                          color: page.color,
                          fontSize: `${page.font}px`,
                        }}
                      >
                        {page.text}
                      </p>
                    )}
                    {this.state.clicked ? (
                      <div className="edit-tools">
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 120 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            Text Color
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard-label"
                            value={page.color}
                            label="Color"
                            onChange={(e) => {
                              this.editColorHandle(page, e);
                            }}
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
                        <Button
                          className="edit-end"
                          onClick={this.editEndHandle}
                        >
                          <CheckCircleOutlineIcon />
                        </Button>
                      </div>
                    ) : null}
                    <Button
                      onClick={() => {
                        this.props.removeFunction(index);
                      }}
                      variant="outlined"
                      className="delete-button"
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
